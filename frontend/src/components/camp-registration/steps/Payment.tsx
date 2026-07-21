import type { FormData } from "../../../types/types";

import { useState } from "react";

import posthog from "@/lib/posthog";

import paymentQR from "@/assets/seminar/payment.png";

import { toast } from "sonner";


type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};


const API = "https://bootcamp-m8yr.onrender.com";

const UPI_ID = "vyapar.175693718407@hdfcbank";



export default function Payment({

    next,
    previous,
    formData,
    setFormData,
}: Props) {

    const [loading, setLoading] = useState(false);

    const PASS_NAMES: Record<string, string> = {
        "2500": "Beginner Pass",
        "5000": "Supporter Pass",
        "8000": "Patron Pass",
    };


    const copyUpiId = async () => {
        try {
            await navigator.clipboard.writeText(UPI_ID);

            toast.success("UPI ID copied!");

            posthog.capture("upi_id_copied");
        } catch {
            alert(`UPI ID: ${UPI_ID}`);
        }
    };

    const submitRegistration = async () => {

        if (loading) return;

        setLoading(true);

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

            data.append(
                "pass_type",
                PASS_NAMES[formData.pass]
            );

            data.append(
                "amount_paid",
                formData.amount
            );

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
                throw new Error(result.detail || "Something went wrong.");
            }

            posthog.identify(formData.email, {
                name: formData.name,
                email: formData.email,
                pass: PASS_NAMES[formData.pass],
                amount: formData.amount,
            });

            posthog.capture("registration_completed", {
                pass: PASS_NAMES[formData.pass],
                amount: formData.amount,
            });         


            next();

        }

        catch (err) {

            console.error(err);
            posthog.capture("registration_failed");

            if (err instanceof Error) {

                alert(
                    err.message.replace(/"/g, "")
                );

            }

            else {

                alert("Unknown error.");

            }

        }

        finally {

            setLoading(false);

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

            <p className="text-cream/60 mt-6 max-w-2xl leading-8">
                Complete your payment using any UPI app and upload your payment
                confirmation below. Once verified, we'll send your unique QR
                ticket directly to your email.
            </p>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

                <div>

                    <p className="font-anton tracking-[0.3em] uppercase text-gold-soft text-xs">
                        CONFIRM THE AMOUNT YOU ARE PAYING
                    </p>

                    <input
                            type="number"
                            autoFocus
                            min="1"
                            value={formData.amount}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    amount: e.target.value,
                                })
                            }
                            className="
                                mt-4
                                w-72
                                bg-transparent
                                border-b
                                border-gold-soft
                                pb-4
                                text-8xl
                                font-bebas
                                outline-none
                                focus:border-primary
                            "
                    />
                    <p className="text-cream/70 mt-6 leading-8">
                        Scan the QR code or copy the UPI ID below to complete your payment. Once done, return here and upload the payment screenshot.
                    </p>

                        <div className="mt-6 rounded-xl border border-gold-soft/20 bg-white/5 p-5">
                            <p className="text-gold-soft text-xs tracking-[0.3em] uppercase">
                                UPI ID
                            </p>

                            <p className="mt-2 font-mono text-lg break-all select-all">
                                {UPI_ID}
                            </p>
                        </div>

                        <button
                            onClick={copyUpiId}
                            disabled={loading}
                            className="mt-10 bg-primary hover:bg-gold-soft transition duration-300 rounded-2xl px-10 py-4 font-bebas tracking-[0.25em]"
                        >
                            📋 COPY UPI ID
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

                    <p className="text-center text-cream/40 mt-5 text-sm">
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

                <p className="text-cream/70 mt-6 leading-8">
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

                    <p className="text-cream/50 mt-3">
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

            {loading && (

                    <div className="mt-8 rounded-xl border border-gold-soft/30 bg-gold-soft/10 p-5">

                        <p className="text-gold-soft font-medium">

                            Uploading your payment screenshot...

                        </p>

                        <p className="text-cream/60 mt-2 text-sm">

                            This may take 30-60 seconds to train your patience levels.
                            Please don't close this page.

                        </p>

                    </div>

            )}


            <div className="flex justify-between mt-5">

                <button
                    onClick={previous}
                    disabled={loading}
                    className="text-gold-soft hover:text-cream transition"
                >
                    ← Back
                </button>

                <button
                    onClick={submitRegistration}
                    disabled={loading || !formData.amount.trim()}
                    className="bg-primary disabled:bg-white/10 disabled:text-cream/30 disabled:cursor-not-allowed px-10 py-4 rounded-xl font-bebes uppercase tracking-[0.35em] hover:bg-gold-soft transition"
                >
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-5 w-5 inline mr-3"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="opacity-20"
                            />
                            <path
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                        </svg>

                        PROCESSING REGISTRATION...
                    </>
                ) : (
                    "SUBMIT →"
                )}
                </button>

            </div>

        </div>

    );

}