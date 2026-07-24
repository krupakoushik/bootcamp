from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.database import get_db
from app.services.promo import calculate_price

router = APIRouter(
    prefix="/promos",
    tags=["Promo"],
)


class PromoRequest(BaseModel):
    code: str
    pass_type: str


@router.post("/validate")
def validate(
    request: PromoRequest,
    db: Session = Depends(get_db),
):

    result = calculate_price(
        db,
        request.pass_type,
        request.code,
    )

    return {
        "valid": result["promo"] is not None,
        "original_amount": result["original"],
        "discount": result["discount"],
        "final_amount": result["final"],
    }