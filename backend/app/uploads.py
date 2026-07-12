import cloudinary.uploader


def upload_payment(file):

    result = cloudinary.uploader.upload(

        file.file,

        folder="ckc/payments",

        resource_type="image",

    )

    return result["secure_url"]