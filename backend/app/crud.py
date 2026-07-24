import uuid
from sqlalchemy.orm import Session
from app.models.registrations import Registration
from app.qr import generate_qr
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
from datetime import datetime

from app.services.mail import send_registration_email

def create_registration(
    db: Session,
    registration: dict,
):

    existing = (
        db.query(Registration)
        .filter(Registration.phone == registration["phone"])
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=409,
            detail="You have already registered using this phone number."
        )


    new_registration = Registration(

        uuid=str(uuid.uuid4()),

        name=registration["name"],
        email=registration["email"],
        phone=registration["phone"],

        gender=registration["gender"],

        emergency_name=registration["emergency_name"],
        emergency_phone=registration["emergency_phone"],

        medical=registration["medical"],

        pass_type=registration["pass_type"],
        
        amount_paid=registration["amount_paid"],

        payment_screenshot=registration["payment_screenshot"],

    )

    try:

        db.add(new_registration)

        db.flush()

        new_registration.ckc_id = f"CKC-BC26-{new_registration.id:04d}"

        db.commit()

        db.refresh(new_registration)

        return new_registration

    except IntegrityError:

        db.rollback()

        raise HTTPException(
            status_code=409,
            detail="This phone number is already registered."
        )

def verify_registration(
    db: Session,
    registration_id: int,
):

    registration = (
        db.query(Registration)
        .filter(Registration.id == registration_id)
        .first()
    )

    if registration is None:
        raise HTTPException(
            status_code=404,
            detail="Registration not found."
        )

    if not registration.verified:

        registration.qr_code = generate_qr(registration)
        registration.verified = True

        db.commit()
        db.refresh(registration)

    if not registration.email_sent:

        try:

            send_registration_email(
                recipient=registration.email,
                name=registration.name,
                ckc_id=registration.ckc_id,
                pass_type=registration.pass_type,
                qr_url=registration.qr_code,
            )

            registration.email_sent = True
            registration.email_sent_at = datetime.utcnow()

            db.commit()
            db.refresh(registration)

        except Exception as e:

            db.rollback()
            print(f"Failed to send email: {e}")

    return registration