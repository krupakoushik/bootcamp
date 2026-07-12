import io

import qrcode
import cloudinary.uploader


def generate_qr(registration):

    qr = qrcode.QRCode(
        version=1,
        box_size=12,
        border=2,
    )

    qr.add_data(registration.uuid)

    qr.make(fit=True)

    image = qr.make_image(
        fill_color="black",
        back_color="white",
    )

    buffer = io.BytesIO()

    image.save(buffer, format="PNG")

    buffer.seek(0)

    result = cloudinary.uploader.upload(

        buffer,

        folder="ckc/qrcodes",

        public_id=registration.ckc_id,

        overwrite=True,

        resource_type="image",

    )

    return result["secure_url"]