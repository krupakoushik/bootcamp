from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.models import registrations
from app.models import promo

from app.routes.admin import router as admin_router
from app.routes.auth import router as auth_router
from app.routes.registration import router as registration_router
from app.routes.promos import router as promo_router

app = FastAPI(
    title="CKC Backend",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ckc-bootcamp.vercel.app",
        "https://bootcamp.chennaikendoclub.in",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(registration_router)
app.include_router(admin_router)
app.include_router(auth_router)
app.include_router(promo_router)

@app.get("/")
def root():
    return {"message": "CKC Backend Running 🚀"}

@app.get("/health")
async def health():
    return {"status": "ok"}