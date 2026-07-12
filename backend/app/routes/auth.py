from fastapi import APIRouter
from fastapi import HTTPException

from pydantic import BaseModel

from app.config import ADMIN_USERNAME
from app.config import ADMIN_PASSWORD

from app.auth import create_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


class Login(BaseModel):

    username: str

    password: str


@router.post("/login")
def login(credentials: Login):

    if (

        credentials.username == ADMIN_USERNAME

        and

        credentials.password == ADMIN_PASSWORD

    ):

        return {

            "token": create_token()

        }

    raise HTTPException(

        status_code=401,

        detail="Wrong username or password",

    )