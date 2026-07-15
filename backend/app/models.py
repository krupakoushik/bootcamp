from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import Text
from sqlalchemy import DateTime

from sqlalchemy.sql import func

from app.database import Base


class Registration(Base):

    __tablename__ = "registrations"

    id = Column(Integer, primary_key=True, index=True)

    ckc_id = Column(
        String(20),
        unique=True,
        nullable=True,
        index=True,
    )

    uuid = Column(
        String(36),
        unique=True,
        nullable=False,
        index=True,
    )

    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, index=True)
    phone = Column(String(12), unique=True, nullable=False, index=True)
    gender = Column(String(20))

    emergency_name = Column(String(100))
    emergency_phone = Column(String(20))

    medical = Column(Text)

    pass_type = Column(String(30), nullable=False)

    amount_paid = Column(Integer, nullable=False, default=2500)

    payment_screenshot = Column(String(500))

    verified = Column(Boolean, default=False)

    qr_code = Column(String(500))

    day1_attended = Column(Boolean, default=False)
    day2_attended = Column(Boolean, default=False)

    email_sent = Column(Boolean, default=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )