from sqlalchemy.orm import Session

from app.models.promo import PromoCode
from app.constants import PASS_PRICES

from datetime import datetime

def calculate_price(
    db: Session,
    pass_type: str,
    promo_code: str | None = None,
):
    original = PASS_PRICES[pass_type]

    discount = 0

    promo = None

    if promo_code:

        promo = (
            db.query(PromoCode)
            .filter(
                PromoCode.code == promo_code.upper(),
                PromoCode.is_active == True,
            )
            .first()
        )

        if promo:

            if promo.valid_until and promo.valid_until < datetime.utcnow():
                promo = None

            elif (
                promo.max_uses is not None
                and promo.used_count >= promo.max_uses
            ):
                promo = None

            elif promo.discount_type == "fixed":
                discount = promo.discount_value

            else:
                discount = (
                    original * promo.discount_value
                ) // 100

    final = max(original - discount, 0)

    return {
        "original": original,
        "discount": discount,
        "final": final,
        "promo": promo,
    }