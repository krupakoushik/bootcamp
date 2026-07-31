import resend
import os

from dotenv import load_dotenv

load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")

html = """
<p>Helloooo Kubo Senseiiii 👋</p>

<p>
I was going through the registrations one last time before tomorrow...
</p>

<p>
and I noticed your payment screenshot.
</p>

<p>
Except...
</p>

<p>
it wasn't a payment screenshot ;-;
</p>

<p>
It was just a wholesome selfie with Kedoin Sensei hahaha
</p>

<p>
Not gonna lie...
</p>

<p>
I think you might be winning the unofficial
<b>"Best Payment Screenshot"</b>
competition so far. 😌🏆
</p>

<p>
Please don't tell Kedoin Sensei I said that.
</p>

<p>
(Actually... she'll probably find out tomorrow anyway XD)
</p>

<p>
See you tomorrow!!!
</p>

<p>
- Krupa :)
</p>
"""

resend.Emails.send({
    "from": "Chennai Kendo Club <Admissions@chennaikendoclub.in>",
    "to": [
        "kuku22angel@gmail.com",
        "krupakoushikkona@gmail.com"
    ],
    "subject": "Small issue with your registration 😅",
    "html": html,
})

print("😂 Sent!")