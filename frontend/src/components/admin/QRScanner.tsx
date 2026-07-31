import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef } from "react";

type Props = {
    onScan: (text: string) => void;
    resumeSignal: number;
};

export default function QRScanner({
    onScan,
    resumeSignal,
}: Props) {
    const scannerRef = useRef<Html5Qrcode | null>(null);
    const scanning = useRef(false);

    async function startScanner() {
        const scanner = scannerRef.current;
        if (!scanner) return;

        // Don't start again if it's already running
        if (scanner.isScanning) {
            scanning.current = true;
            return;
        }

        try {
            await scanner.start(
                {
                    facingMode: "environment",
                },
                {
                    fps: 10,
                    qrbox: {
                        width: 280,
                        height: 280,
                    },
                },
                async (decodedText) => {
                    if (!scanning.current) return;

                    scanning.current = false;

                    try {
                        await scanner.stop();
                    } catch {}

                    onScan(decodedText);
                },
                () => {}
            );

            scanning.current = true;
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        scannerRef.current = new Html5Qrcode("reader");

        startScanner();

        return () => {
            const scanner = scannerRef.current;

            if (scanner?.isScanning) {
                scanner
                    .stop()
                    .then(() => scanner.clear())
                    .catch(() => {});
            } else {
                scanner?.clear().catch(() => {});
            }
        };
    }, []);

    useEffect(() => {
        startScanner();
    }, [resumeSignal]);

    return (
        <div className="overflow-hidden rounded-2xl border border-gold-soft/20 bg-black h-[55vh]">
            <div id="reader" className="h-full" />
        </div>
    );
}