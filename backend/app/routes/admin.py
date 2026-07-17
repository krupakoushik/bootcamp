from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import asc, desc
from app.dependencies import verify_admin
from app.database import get_db
from app.models import Registration
from app.crud import verify_registration

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