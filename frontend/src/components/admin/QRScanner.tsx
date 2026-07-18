import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef } from "react";

type Props = {
    onScan: (text: string) => void;
};

export default function QRScanner({ onScan }: Props) {
    const scannerRef = useRef<Html5Qrcode | null>(null);
    const scanning = useRef(true);

    useEffect(() => {
        const scanner = new Html5Qrcode("reader");
        scannerRef.current = scanner;

        const startScanner = async () => {
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
                    (decodedText) => {
                        if (!scanning.current) return;

                        scanning.current = false;

                        onScan(decodedText);

                        setTimeout(() => {
                            scanning.current = true;
                        }, 2000);
                    },
                    () => {}
                );
            } catch (err) {
                console.error(err);
            }
        };

        startScanner();

        return () => {
            if (
                scannerRef.current &&
                scannerRef.current.isScanning
            ) {
                scannerRef.current
                    .stop()
                    .then(() => scannerRef.current?.clear())
                    .catch(() => {});
            }
        };
    }, [onScan]);

    return (
        <div className="overflow-hidden rounded-2xl border border-gold-soft/20 bg-black h-[55vh]">
            <div id="reader" className="h-full" />
        </div>
    );
}