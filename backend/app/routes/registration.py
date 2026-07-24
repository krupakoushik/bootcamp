from fastapi import APIRouter, Depends, Form, File, UploadFile
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud import create_registration
from app.uploads import upload_payment
from app.services.promo import calculate_price

from fastapi import HTTPException


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

    promo_code: str = Form(""),

    payment_screenshot: UploadFile = File(...),

    db: Session = Depends(get_db),
):

    payment_url = upload_payment(payment_screenshot)

    price = calculate_price(
        db=db,
        pass_type=pass_type,
        promo_code=promo_code,
    )

    if promo_code and price["promo"] is None:
        raise HTTPException(
            status_code=400,
            detail="Invalid promo code.",
        )

    registration = {
        "name": name,
        "email": email,
        "phone": phone,
        "gender": gender,
        "emergency_name": emergency_name,
        "emergency_phone": emergency_phone,
        "medical": medical,
        "pass_type": pass_type,
        "amount_paid": price["final"],
        "promo_code": promo_code.upper() if promo_code else None,
        "payment_screenshot": payment_url,
    }

    return create_registration(
        db,
        registration,
    )