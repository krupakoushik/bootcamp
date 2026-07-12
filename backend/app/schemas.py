from pydantic import BaseModel


class RegistrationCreate(BaseModel):

    name: str
    email: str
    phone: str

    gender: str

    emergency_name: str
    emergency_phone: str

    medical: str

    pass_type: str


class RegistrationResponse(RegistrationCreate):

    id: int

    verified: bool

    class Config:
        from_attributes = True