from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import asc, desc, func
from app.dependencies import verify_admin
from app.database import get_db
from app.models import Registration
from app.crud import verify_registration
from datetime import datetime
from app.schemas import AttendanceScan

router = APIRouter(
    prefix="/admin",
    tags=["Admin"],
)


@router.get("/registrations")
def registrations(
    _: dict = Depends(verify_admin),
    db: Session = Depends(get_db),
):
    return (
        db.query(Registration)
        .order_by(
            asc(Registration.verified),
            desc(Registration.created_at),
        )
        .all()
    )


@router.get("/dashboard")
def dashboard(
    _: dict = Depends(verify_admin),
    db: Session = Depends(get_db),
):
    total = db.query(func.count(Registration.id)).scalar() or 0

    verified = (
        db.query(func.count(Registration.id))
        .filter(Registration.verified == True)
        .scalar()
        or 0
    )

    pending = total - verified

    revenue = (
        db.query(func.sum(Registration.amount_paid))
        .scalar()
        or 0
    )

    day1 = (
        db.query(func.count(Registration.id))
        .filter(Registration.day1_attended == True)
        .scalar()
        or 0
    )

    day2 = (
        db.query(func.count(Registration.id))
        .filter(Registration.day2_attended == True)
        .scalar()
        or 0
    )

    return {
        "participants": total,
        "verified": verified,
        "pending": pending,
        "revenue": revenue,
        "day1_attendance": day1,
        "day2_attendance": day2,
    }


@router.post("/verify/{registration_id}")
def verify(

    registration_id: int,

    _: dict = Depends(verify_admin),

    db: Session = Depends(get_db),

):

    return verify_registration(
        db,
        registration_id,
    )


@router.post("/scan")
def scan_attendance(
    request: AttendanceScan,
    _: dict = Depends(verify_admin),
    db: Session = Depends(get_db),
):
    registration = (
        db.query(Registration)
        .filter(Registration.uuid == request.uuid)
        .first()
    )

    if registration is None:
        raise HTTPException(
            status_code=404,
            detail="Participant not found.",
        )

    if not registration.verified:
        raise HTTPException(
            status_code=400,
            detail="Registration has not been verified.",
        )

    now = datetime.utcnow()

    if request.day == 1:

        if registration.day1_attended:
            return {
                "status": "duplicate",
                "name": registration.name,
                "checked_in_at": registration.day1_checked_in_at,
            }

        registration.day1_attended = True
        registration.day1_checked_in_at = now

    elif request.day == 2:

        if registration.day2_attended:
            return {
                "status": "duplicate",
                "name": registration.name,
                "checked_in_at": registration.day2_checked_in_at,
            }

        registration.day2_attended = True
        registration.day2_checked_in_at = now

    else:
        raise HTTPException(
            status_code=400,
            detail="Invalid day.",
        )

    db.commit()
    db.refresh(registration)

    return {
        "status": "success",
        "name": registration.name,
        "ckc_id": registration.ckc_id,
        "pass_type": registration.pass_type,
        "day": request.day,
        "checked_in_at": now,
    }