from fastapi import Depends
from fastapi import HTTPException

from fastapi.security import HTTPBearer
from fastapi.security import HTTPAuthorizationCredentials

from jose import jwt
from jose import JWTError

from app.config import SECRET_KEY
from app.config import ALGORITHM

security = HTTPBearer()


def verify_admin(

    credentials: HTTPAuthorizationCredentials = Depends(security),

):

    try:

        payload = jwt.decode(

            credentials.credentials,

            SECRET_KEY,

            algorithms=[ALGORITHM],

        )

    except JWTError:

        raise HTTPException(

            status_code=401,

            detail="Invalid Token",

        )

    if payload.get("admin") is not True:

        raise HTTPException(

            status_code=401,

            detail="Unauthorized",

        )

    return payload