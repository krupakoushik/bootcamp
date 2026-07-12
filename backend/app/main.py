from fastapi import FastAPI

from app.database import Base
from app.database import engine
from fastapi.middleware.cors import CORSMiddleware

import app.models

from app.routes.admin import router as admin_router

from app.routes.auth import router as auth_router

from app.routes.registration import router as registration_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CKC Backend",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ckc-bootcamp.vercel.app/",
        "https://bootcamp.chennaikendoclub.in/",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(registration_router)
app.include_router(admin_router)
app.include_router(auth_router)

@app.get("/")
def root():

    return {

        "message": "CKC Backend Running 🚀"

    }