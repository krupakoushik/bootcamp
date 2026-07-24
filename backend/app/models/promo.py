from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func

from app.database import Base


class PromoCode(Base):

    __tablename__ = "promo_codes"

    id = Column(Integer, primary_key=True, index=True)

    code = Column(
        String(50),
        unique=True,
        nullable=False,
        index=True,
    )

    discount_type = Column(
        String(20),
        nullable=False,
    )

    discount_value = Column(
        Integer,
        nullable=False,
    )

    is_active = Column(
        Boolean,
        default=True,
    )

    max_uses = Column(
        Integer,
        nullable=True,
    )

    used_count = Column(
        Integer,
        default=0,
    )

    valid_until = Column(
        DateTime(timezone=True),
        nullable=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )