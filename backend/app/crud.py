import uuid

from sqlalchemy.orm import Session

from app.models import Registration

from app.qr import generate_qr

from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException


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
            detail="You have already registered using this phone number."
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

        return None

    if registration.verified:

        return registration

    registration.qr_code = generate_qr(
        registration
    )

    registration.verified = True

    db.commit()

    db.refresh(registration)

    return registration