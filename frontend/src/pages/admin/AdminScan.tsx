import { useState } from "react";

import AdminNavbar from "@/components/admin/AdminNavbar";
import QRScanner from "@/components/admin/QRScanner";

export default function AdminScan() {
    const [result, setResult] = useState("Waiting for QR...");

    const handleScan = (text: string) => {
        console.log(text);

        setResult(text);

        // Later:
        // await axios.post("/admin/scan", { uuid: text });
    };

    return (
        <>
            <AdminNavbar />

            <main className="mx-auto flex max-w-3xl flex-col gap-8 p-6">

                <div>
                    <h1 className="font-bebas text-5xl tracking-wide">
                        Scan QR
                    </h1>

                    <p className="text-cream/70">
                        Point the camera at a participant's QR code.
                    </p>
                </div>

                <QRScanner onScan={handleScan} />

                <div className="rounded-2xl border border-gold-soft/20 bg-black/40 p-6">
                    <p className="text-sm uppercase tracking-widest text-gold-soft">
                        Last Scan
                    </p>

                    <p className="mt-3 break-all text-lg">
                        {result}
                    </p>
                </div>

            </main>
        </>
    );
}