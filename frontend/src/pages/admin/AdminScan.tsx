import { useState } from "react";

import AdminNavbar from "@/components/admin/AdminNavbar";
import QRScanner from "@/components/admin/QRScanner";

const API = "https://bootcamp-m8yr.onrender.com";

type ScanResponse = {
    status: "success" | "duplicate";
    name: string;
    ckc_id?: string;
    pass_type?: string;
    checked_in_at?: string;
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
                setResult(data);
            }
        }

        catch {
            setResult({
                status: "error",
                message: "Cannot connect to server.",
            });
        }

        setTimeout(() => {
            setResult({
                status: "waiting",
            });
        }, 2000);
    }

    return (
        <>
            <AdminNavbar />

            <main className="mx-auto max-w-3xl p-6 space-y-8">
                <div>
                    <h1 className="font-bebas text-6xl">
                        SCAN QR
                    </h1>
                    <p className="text-white/60">
                        Select attendance session
                    </p>
                </div>

                {/* DAY SELECTOR */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setDay(1)}
                        className={`
                            rounded-xl
                            py-4
                            font-bold
                            transition
                            ${
                                day === 1
                                    ? "bg-green-600 text-white"
                                    : "bg-white/10"
                            }
                        `}
                    >
                        DAY 1
                    </button>

                    <button
                        onClick={() => setDay(2)}
                        className={`
                            rounded-xl
                            py-4
                            font-bold
                            transition
                            ${
                                day === 2
                                    ? "bg-blue-600 text-white"
                                    : "bg-white/10"
                            }
                        `}
                    >
                        DAY 2
                    </button>
                </div>

                <QRScanner onScan={handleScan} />

                <div className="rounded-2xl border border-gold-soft/20 bg-black/40 p-6 min-h-40">
                    {result.status === "waiting" && (
                        <p className="text-white/60">
                            Waiting for QR...
                        </p>
                    )}
                    {result.status === "error" && (
                        <div>
                            <h2 className="text-red-400 text-2xl font-bold">
                                ❌ Error
                            </h2>
                            <p className="mt-3">
                                {result.message}
                            </p>
                        </div>
                    )}

                    {result.status === "duplicate" && (
                        <div>
                            <h2 className="text-yellow-400 text-2xl font-bold">
                                ⚠ Already Checked In
                            </h2>
                            <p className="mt-3">
                                {result.name}
                            </p>
                            <p>
                                {result.checked_in_at}
                            </p>
                        </div>
                    )}

                    {result.status === "success" && (
                        <div>
                            <h2 className="text-green-400 text-2xl font-bold">
                                ✅ Attendance Marked
                            </h2>
                            <p className="mt-3">
                                {result.name}
                            </p>
                            <p>
                                {result.ckc_id}
                            </p>
                            <p>
                                {result.pass_type}
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}