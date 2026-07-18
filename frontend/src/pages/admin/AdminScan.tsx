import { useState } from "react";

import { useNavigate } from "react-router-dom";
import QRScanner from "@/components/admin/QRScanner";

const API = "https://bootcamp-m8yr.onrender.com";

type ScanResponse = {
    status: "success" | "duplicate";
    name: string;
    ckc_id: string;
    phone: string;
    pass_type: string;
    checked_in_at: string;
    day?: number;
};

export default function AdminScan() {

    const [day, setDay] = useState<1 | 2>(1);
    const [result, setResult] = useState<
        ScanResponse | { status: "waiting" } | { status: "error"; message: string }
    >({
        status: "waiting",
    });

    async function handleScan(uuid: string) {
        try {
            const response = await fetch(
                `${API}/admin/scan`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },

                    body: JSON.stringify({
                        uuid,
                        day,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setResult({
                    status: "error",
                    message: data.detail,
                });
            }

            else {
                if (data.status === "success") {
                    navigator.vibrate?.(100);
                }

                if (data.status === "duplicate") {
                    navigator.vibrate?.([80, 80, 80]);
                }

                setResult(data);
            }
        }

        catch {
            setResult({
                status: "error",
                message: "Cannot connect to server.",
            });
            navigator.vibrate?.([150, 50, 150]);
        }

        setTimeout(() => {
            setResult({
                status: "waiting",
            });
        }, 5000);
    }

    const navigate = useNavigate();

    const cardStyle =
        result.status === "success"
            ? "border-green-500 bg-green-500/10"
            : result.status === "duplicate"
            ? "border-yellow-500 bg-yellow-500/10"
            : result.status === "error"
            ? "border-red-500 bg-red-500/10"
            : "border-gold-soft/20 bg-black/50";


    return (
        <>

            <main className="mx-auto max-w-3xl p-6 space-y-8">

                <button
                    onClick={() => navigate("/admin")}
                    className="pb-1 text-sm font-semibold transition text-red-400 hover:text-red-300"
                >
                    ← Dashboard
                </button>

                <div>
                    <h1 className="font-bebas text-6xl">
                        SCAN QR
                    </h1>
                    <p className="text-cream/60">
                        Select the attendance session below and scan the participant's QR code.
                    </p>
                </div>

                {/* DAY SELECTOR */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setDay(1)}
                        className={`
                            rounded-2xl
                            py-4
                            font-bold
                            transition
                            ${
                                day === 1
                                    ? "bg-gold-soft text-cream shadow-lg shadow-gold-soft/30"
                                    : "bg-primary/10"
                            }
                        `}
                    >
                        DAY 1
                    </button>

                    <button
                        onClick={() => setDay(2)}
                        className={`
                            rounded-2xl
                            py-4
                            font-bold
                            transition
                            ${
                                day === 2
                                    ? "bg-gold-soft text-cream shadow-lg shadow-gold-soft/30"
                                    : "bg-primary/10"
                            }
                        `}
                    >
                        DAY 2
                    </button>
                </div>

                <QRScanner onScan={handleScan} />

                <div className={`rounded-2xl p-6 min-h-55 flex items-center transition-all duration-300 ease-out transition-all duration-300 ease-out ${cardStyle}`}>
                    {result.status === "waiting" && (
                        <div className="w-full text-center">
                            <h2 className="font-bebas text-4xl text-gold-soft">
                                READY TO SCAN
                            </h2>
                            <p className="mt-3 text-cream/60">
                                Point the camera towards the participant's QR code.
                            </p>
                            <div className="mt-5 inline-flex rounded-full bg-white/10 px-5 py-2">
                                <span className={`font-bold ${day === 1 ? "text-green-400" : "text-blue-400"}`}>
                                    {day === 1 ? "DAY 1" : "DAY 2"}
                                </span>
                            </div>
                        </div>
                    )}

                    {result.status === "error" && (
                        <div className="w-full">
                            <h2 className="text-red-400 text-3xl font-bold">
                                ❌ ERROR
                            </h2>
                            <p className="mt-4 text-lg">
                                {result.message}
                            </p>
                        </div>
                    )}

                    {result.status === "duplicate" && (
                        <div className="w-full">
                            <h2 className="text-yellow-400 text-3xl font-bold">
                                ⚠ ALREADY CHECKED IN
                            </h2>
                            <div className="mt-5 space-y-2 text-lg">
                                <p><strong>{result.name}</strong></p>
                                <p>{result.ckc_id}</p>
                                <p>{result.pass_type}</p>
                                <p>ph: {result.phone}</p>
                                <p className="text-cream/60">
                                    Checked in at {result.checked_in_at}
                                </p>
                            </div>
                        </div>
                    )}

                    {result.status === "success" && (
                        <div className="w-full">
                            <h2 className="text-green-400 text-3xl font-bold">
                                ✅ ATTENDANCE MARKED
                            </h2>
                            <div className="space-y-1">
                                <h3 className="text-3xl font-bold">
                                    {result.name}
                                </h3>
                                <p className="text-gold-soft">
                                    {result.ckc_id}
                                </p>
                                <div className="pt-4 space-y-1 text-cream/80">
                                    <p>{result.pass_type}</p>
                                    <p>ph: {result.phone}</p>
                                    <p>{result.checked_in_at}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}