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
        const scanning = useRef(true);
        const lastScan = useRef("");

        useEffect(() => {
            scanning.current = true;
            lastScan.current = "";
        }, [resumeSignal]);

        useEffect(() => {

            const scanner = new Html5Qrcode("reader");
            scannerRef.current = scanner;

            scanner
                .start(
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
                    (decodedText) => {

                        console.log("Decoded:", decodedText);

                        if (!scanning.current) return;

                        if (decodedText === lastScan.current) return;

                        lastScan.current = decodedText;
                        scanning.current = false;

                        onScan(decodedText);

                    },
                    () => {}
                )
                .catch(console.error);

            return () => {

                if (scanner.isScanning) {
                    scanner
                        .stop()
                        .then(() => scanner.clear())
                        .catch(console.error);
                }

            };

        }, []);

    return (
        <div className="overflow-hidden rounded-2xl border border-gold-soft/20 bg-black h-[55vh]">
            <div id="reader" className="h-full" />
        </div>
    );
}