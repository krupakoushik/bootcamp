import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QRScanner from "@/components/admin/QRScanner";

import API from "@/lib/api";

type ScanResponse = {
    status: "success" | "duplicate";
    name: string;
    ckc_id: string;
    phone: string;
    pass_type: string;
    checked_in_at: string;
};

export default function AdminScan() {
    const navigate = useNavigate();
    const [day, setDay] = useState<1 | 2>(1);
    const [participant, setParticipant] =
        useState<ScanResponse | null>(null);
    const [resumeSignal, setResumeSignal] = useState(0);
    const [error, setError] = useState<string | null>(null);
    
    async function handleScan(uuid: string) {
        try {
            setError(null);
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
                navigator.vibrate?.([150, 50, 150]);
                setError(data.detail);
                setResumeSignal((v) => v + 1);
                return;
            }

            if (data.status === "success") {
                navigator.vibrate?.(100);
            } else {
                navigator.vibrate?.([80, 80, 80]);
            }
            setParticipant(data);

        } catch {
            navigator.vibrate?.([150, 50, 150]);
            setError("Cannot connect to server.");
            setResumeSignal((v) => v + 1);
        }
    }

    return (
        <>
            <main className="mx-auto max-w-3xl p-6 space-y-8">
                
                <button
                    onClick={() => navigate("/admin")}
                    className="text-red-400 hover:text-red-300 transition font-semibold"
                >
                    ← Dashboard
                </button>

                <div>
                    <h1 className="font-bebas text-6xl text-cream">
                        SCAN QR
                    </h1>

                    <p className="text-cream/60">
                        Select the attendance session below and scan the participant's QR code.
                    </p>
                </div>

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

                <QRScanner
                    onScan={handleScan}
                    resumeSignal={resumeSignal}
                />

                {error && (
                    <div className="rounded-2xl border border-red-500 bg-red-500/10 p-5">
                        <h2 className="text-red-400 text-xl font-bold">
                            ❌ Error
                        </h2>

                        <p className="mt-2">
                            {error}
                        </p>
                    </div>
                )}

            </main>

            {participant && (

                <div
                    className="
                        fixed
                        inset-0
                        bg-black/80
                        backdrop-blur-sm
                        flex
                        items-center
                        justify-center
                        z-50
                        p-5
                    "
                    onClick={() => {
                        setParticipant(null);
                        setResumeSignal((v) => v + 1);
                    }}
                >

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`
                            w-full
                            max-w-md
                            rounded-3xl
                            p-10
                            text-center
                            border
                            ${
                                participant.status === "success"
                                    ? "border-green-500 bg-green-950"
                                    : "border-yellow-500 bg-yellow-950"
                            }
                        `}
                    >

                        <h2 className="text-3xl font-bold">

                            {participant.status === "success"
                                ? "✅ ATTENDANCE MARKED"
                                : "⚠ ALREADY CHECKED IN"}

                        </h2>

                        <h1 className="font-bebas text-6xl mt-8">
                            {participant.name}
                        </h1>

                        <p className="text-gold-soft text-xl mt-2">
                            {participant.ckc_id}
                        </p>

                        <div className="mt-8 space-y-2 text-lg">

                            <p>
                                {participant.pass_type}
                            </p>

                            <p>
                                📞 {participant.phone}
                            </p>

                            <p>
                                {participant.checked_in_at}
                            </p>

                        </div>

                        <p className="mt-10 text-white/40 text-sm">
                            Tap anywhere to continue
                        </p>

                    </div>

                </div>

            )}

        </>
    );
}