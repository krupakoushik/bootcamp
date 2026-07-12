import type { FormData } from "../types";

import paymentQR from "@/assets/seminar/payment.jpeg";

type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const API = "http://localhost:8000";

const UPI_ID = "vyapar.175693718407@hdfcbank";
const PAYEE_NAME = "CHENNAI KENDO CLUB";

export default function Payment({
    next,
    previous,
    formData,
    setFormData,
}: Props) {

    const NOTE = `CKC Bootcamp 2K26`;

    const upiLink =
        `upi://pay?pa=${UPI_ID}` +
        `&pn=${encodeURIComponent(PAYEE_NAME)}` +
        `&am=${formData.pass}` +
        `&cu=INR` +
        `&tn=${encodeURIComponent(NOTE)}`;

    const submitRegistration = async () => {

        try {

            if (!formData.paymentScreenshot) {

                alert("Please upload your payment screenshot.");

                return;

            }

            const data = new FormData();

            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);

            data.append("gender", formData.gender);

            data.append("emergency_name", formData.emergencyName);
            data.append("emergency_phone", formData.emergencyPhone);

            data.append("medical", formData.medical);

            data.append("pass_type", formData.pass);

            data.append(
                "payment_screenshot",
                formData.paymentScreenshot
            );

            const response = await fetch(`${API}/registration/`, {

                method: "POST",

                body: data,

            });

            const result = await response.json();

            console.log(result);

            if (!response.ok) {

                throw new Error(JSON.stringify(result));

            }

            next();

        }

        catch (err) {

            console.error(err);

            if (err instanceof Error) {

                alert(err.message);

            }

            else {

                alert("Unknown error.");

            }

        }

    };

    return (

        <div className="rounded-3xl text-cream border border-gold-soft/50 bg-white/5 backdrop-blur-xl p-10 lg:p-14">

            <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                FINAL STEP
            </p>

            <h2 className="font-bebas text-7xl lg:text-9xl mt-5 leading-none">
                RESERVE
                <br />
                YOUR PLACE
            </h2>

            <p className="text-white/60 mt-6 max-w-2xl leading-8">
                Complete your payment using any UPI app and upload your payment
                confirmation below. Once verified, we'll send your unique QR
                ticket directly to your email.
            </p>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

                <div>

                    <p className="font-anton tracking-[0.3em] uppercase text-gold-soft text-xs">
                        REGISTRATION FEE
                    </p>

                    <h2 className="font-bebas text-8xl mt-4">
                        ₹{formData.pass}
                    </h2>

                    <p className="text-white/70 mt-6 leading-8">
                        Scan the QR code using any UPI application or tap the
                        button below to open your preferred payment app.
                    </p>

                    <button
                        onClick={() => {
                            window.location.href = upiLink;
                        }}
                        className="mt-10 bg-primary hover:bg-gold-soft transition duration-300 rounded-2xl px-10 py-4 font-bebas tracking-[0.25em]"
                    >
                        PAY USING UPI →
                    </button>

                </div>

                <div>

                    <div className="rounded-3xl aspect-square flex items-center justify-center p-6">

                        <img
                            src={paymentQR}
                            alt="Payment QR"
                            className="w-full h-full object-contain rounded-2xl"
                        />

                    </div>

                    <p className="text-center text-white/40 mt-5 text-sm">
                        Scan using Google Pay, PhonePe, Paytm, BHIM or any UPI app.
                    </p>

                </div>

            </div>

            <div className="mt-24">

                <p className="font-anton tracking-[0.35em] uppercase text-gold-soft text-xs">
                    PROOF OF PAYMENT
                </p>

                <h3 className="font-bebas text-5xl mt-4">
                    UPLOAD PAYMENT
                    <br />
                    SCREENSHOT
                </h3>

                <p className="text-white/70 mt-6 leading-8">
                    Upload the payment confirmation screenshot.
                    We'll manually verify it before issuing your Event Pass.
                </p>

                <label
                    className="
                        mt-10
                        border-2
                        border-dashed
                        border-gold-soft/30
                        rounded-3xl
                        p-20
                        flex
                        flex-col
                        items-center
                        justify-center
                        cursor-pointer
                        hover:border-primary
                        hover:bg-primary/5
                        transition
                    "
                >

                    <div className="text-6xl">
                        📷
                    </div>

                    <h4 className="font-bebas text-4xl mt-8">
                        CLICK TO UPLOAD
                    </h4>

                    <p className="text-white/50 mt-3">
                        PNG • JPG • JPEG
                    </p>

                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {

                            const file = e.target.files?.[0];

                            if (!file) return;

                            setFormData({
                                ...formData,
                                paymentScreenshot: file,
                            });

                        }}
                    />

                </label>

                {formData.paymentScreenshot && (

                    <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-5">

                        <p className="text-green-300">

                            ✓ {formData.paymentScreenshot.name}

                        </p>

                    </div>

                )}

            </div>

            <div className="flex justify-between mt-5">

                <button
                    onClick={previous}
                    className="text-gold-soft hover:text-cream transition"
                >
                    ← Back
                </button>

                <button
                    onClick={submitRegistration}
                    disabled={!formData.email.trim()}
                    className="bg-primary disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed px-10 py-4 rounded-xl font-anton uppercase tracking-[0.35em] hover:bg-gold-soft transition"
                >
                    SUBMIT →
                </button>

            </div>

        </div>

    );

}