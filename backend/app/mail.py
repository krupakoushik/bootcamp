import resend
import os
from dotenv import load_dotenv

load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")

def send_test_email():

    params = {
        "from": "Chennai Kendo Club <onboarding@resend.dev>",
        "to": ["krupakoushikkona@gmail.com"],
        "subject": "🥋 Welcome to the Chennai Kendo Club Bootcamp!",
        "html": """
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>
body{
    margin:0;
    padding:0;
    background:#0b0b0b;
    font-family:Arial,sans-serif;
}

.container{
    max-width:700px;
    margin:40px auto;
    background:#151515;
    border-radius:20px;
    overflow:hidden;
    border:1px solid #8d6e32;
}

.hero{
    background:#0d0d0d;
    padding:40px 40px 35px;
    text-align:center;
}

.hero h1{
    color:white;
    font-size:44px;
    margin:0;
}

.hero p{
    color:#d7b56d;
    letter-spacing:4px;
    text-transform:uppercase;
}

.content{
    padding:40px;
    color:white;
    line-height:1.8;
}

.ticket{
    margin-top:35px;
    position:relative;
    overflow:visible;

    border:2px dashed #d7b56d;
    border-radius:18px;
    padding:40px 35px;
    background:#101010;
}

.ticket::before,
.ticket::after{
    content:"";
    position:absolute;
    width:28px;
    height:28px;
    background:#151515;
    border-radius:50%;
    top:50%;
    transform:translateY(-50%);
}

.ticket::before{
    left:-15px;
}

.ticket::after{
    right:-15px;
}

.ticket h2{
    margin-top:0;
    color:#d7b56d;
}

.label{
    color:#999;
}

.value{
    color:white;
    font-weight:bold;
}

.qr{
    margin-top:35px;
    text-align:center;
}

.qr img{
    width:320px;
    max-width:90%;
    padding:14px;
    background:white;
    border-radius:20px;
}

.footer{
    padding:30px;
    background:#111;
    color:#888;
    text-align:center;
    font-size:14px;
}

.button{
    display:inline-block;
    padding:14px 28px;
    background:#d7b56d;
    color:black !important;
    text-decoration:none;
    font-weight:bold;
    border-radius:12px;
    margin-top:20px;
}

.whatsapp{
    background:#25D366;
    color:white !important;
    border:none;
}

.whatsapp:hover{
    background:#2b2b2b;
}

</style>

</head>

<body>

<div class="container">
<div class="hero">
<p>CHENNAI KENDO CLUB</p>
<h1>🥋 You're In!</h1>

<p style="
margin-top:20px;
letter-spacing:0;
text-transform:none;
font-size:20px;
color:white;
">

Welcome to the Chennai Kendo Club
Beginner Bootcamp 2026

</p>
</div>

<div class="content">
<p>
Hello Chandana,
</p>

<p>
Thank you for registering for the
<b>Chennai Kendo Club Beginner Bootcamp 2026.</b>
We are excited to welcome you to two immersive days of Japanese swordsmanship.
</p>

<hr style="
border:none;
border-top:1px solid #2b2b2b;
margin:35px 0;
">

<div class="ticket">

<div style="text-align:center;">

<p style="margin:0;color:#d7b56d;letter-spacing:3px;font-size:13px;">
CHENNAI KENDO CLUB
</p>

<h2 style="margin:12px 0 5px 0;font-size:32px;">
🥋 EVENT PASS
</h2>

<div style="
display:inline-block;
padding:8px 18px;
border-radius:999px;
background:#2b2415;
border:1px solid #d7b56d;
color:#d7b56d;
font-weight:bold;
margin:15px 0;
">
Supporter Pass
</div>

<h2 style="
font-size:34px;
margin:20px 0 5px;
letter-spacing:1px;
">
CHANDANA
</h2>

<p style="color:#d7b56d;letter-spacing:2px;font-size:18px;margin-bottom:30px;">
CKC-BC26-0001
</p>

</div>

<hr style="
border:none;
border-top:1px dashed #555;
margin:30px 0;
">

<div class="qr">

<img src="https://res.cloudinary.com/z03yj9uk/image/upload/v1783947741/ckc/qrcodes/CKC-BC26-0020.png">


<div style="
display:inline-block;
padding:10px 22px;
background:#201b11;
border:1px solid #d7b56d;
border-radius:999px;
color:#d7b56d;
font-weight:bold;
letter-spacing:1px;
font-size:14px;
margin-top:20px;
">
✔ VERIFIED ENTRY PASS
</div>

<p style="font-size:18px;font-weight:bold;margin-top:20px;">
Present this QR during check-in
</p>

<p style="color:#999;font-size:14px;">
This QR is unique to you.<br>
Please do not share it with others.
</p>

</div>

</div>

<h2 style="margin-top:45px;color:#d7b56d;">
📅 Event Details
</h2>

<p>
<b>Dates</b><br>
1–2 August 2026
</p>

<p>
<b>Reporting Time</b><br>
9:45 AM
</p>

<p>
<b>Venue</b><br>
Smashers 1.0, OMR
</p>

<hr style="border:none;border-top:1px solid #333;margin:35px 0;">

<h2 style="color:#d7b56d;">
Before You Arrive
</h2>

<ul>
<li>Comfortable sports clothing</li>
<li>Water bottle</li>
<li>Your QR Pass</li>
<li>Positive attitude</li>
</ul>

<center>

<a
href="https://chennaikendoclub.in"
class="button">

🌐 Visit Website

</a>

&nbsp;&nbsp;

<a
href="https://wa.me/919677278733"
class="button whatsapp">

💬 WhatsApp Support

</a>

</center>

</div>

<div class="footer">

<b>Chennai Kendo Club</b>

<br><br>

See you on the dojo floor.

<br>

押忍 (Osu!)

</div>

</div>

</body>

</html>
"""
    }

    resend.Emails.send(params)
    print("email sent!")


if __name__ == "__main__":
    send_test_email()