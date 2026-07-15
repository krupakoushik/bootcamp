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

    amount_paid: int


class RegistrationResponse(RegistrationCreate):

    id: int

    verified: bool

    class Config:
        from_attributes = True