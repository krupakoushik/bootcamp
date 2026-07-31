from app.database import SessionLocal
from app.models.registrations import Registration

from app.services.mail import send_reminder_email

db = SessionLocal()

participants = (
    db.query(Registration)
    .filter(Registration.verified == True)
    .all()
)

print(f"Found {len(participants)} participants.\n")

for i, participant in enumerate(participants, start=1):

    try:
        send_reminder_email(
            recipient=participant.email,
            name=participant.name,
        )

        print(f"[{i}/{len(participants)}] ✅ {participant.name} | {participant.email}")

    except Exception as e:
        print(f"[{i}/{len(participants)}] ❌ {participant.name} | {participant.email}")
        print(e)

db.close()

print("\n🎉 Done.")