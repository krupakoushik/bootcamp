from pathlib import Path
import os

import resend
from dotenv import load_dotenv
from jinja2 import Environment, FileSystemLoader, select_autoescape

load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")

BASE_DIR = Path(__file__).resolve().parent.parent

env = Environment(
    loader=FileSystemLoader(BASE_DIR / "templates"),
    autoescape=select_autoescape(["html", "xml"]),
)

def send_registration_email(
    recipient: str,
    name: str,
    ckc_id: str,
    pass_type: str,
    qr_url: str,
) -> dict:
    template = env.get_template("confirmation_email.html")

    html = template.render(
        name=name,
        ckc_id=ckc_id,
        pass_type=pass_type,
        qr_url=qr_url,
    )

    try:
        response = resend.Emails.send({
            "from": "Chennai Kendo Club <Admissions@chennaikendoclub.in>",
            "to": [recipient],
            "subject": "Your Kendo×Bootcamp'26 Entry Pass",
            "html": html,
        })

        print(f"Email sent to {recipient} ({ckc_id})")

        return response

    except Exception as e:
        print(f"Failed to send email to {ckc_id}: {e}")
        raise


if __name__ == "__main__":
    send_registration_email(
        recipient="jyothiipandit@gmail.com",
        name="jyothi pandit",
        ckc_id="CKC-BC26-0001",
        pass_type="Supporter Pass",
        qr_url="https://res.cloudinary.com/z03yj9uk/image/upload/v1784031773/ckc/qrcodes/CKC-BC26-0023.png",
    )