from datetime import datetime, timedelta

from jose import jwt

from app.config import SECRET_KEY
from app.config import ALGORITHM


def create_token():

    payload = {

        "admin": True,

        "exp": datetime.utcnow() + timedelta(days=7),

    }

    return jwt.encode(

        payload,

        SECRET_KEY,

        algorithm=ALGORITHM,

    )