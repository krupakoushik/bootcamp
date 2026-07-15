from fastapi import APIRouter, Depends, Form, File, UploadFile
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud import create_registration
from app.uploads import upload_payment

router = APIRouter(
    prefix="/registration",
    tags=["Registration"],
)


@router.post("/")
def register(

    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),

    gender: str = Form(...),

    emergency_name: str = Form(""),
    emergency_phone: str = Form(""),

    medical: str = Form(""),

    pass_type: str = Form(...),

    amount_paid: int = Form(...),

    payment_screenshot: UploadFile = File(...),

    db: Session = Depends(get_db),

):

    payment_url = upload_payment(payment_screenshot)

    registration = {
        "name": name,
        "email": email,
        "phone": phone,
        "gender": gender,
        "emergency_name": emergency_name,
        "emergency_phone": emergency_phone,
        "medical": medical,
        "pass_type": pass_type,
        "amount_paid": amount_paid,
        "payment_screenshot": payment_url,
    }

    return create_registration(
        db,
        registration,
    )