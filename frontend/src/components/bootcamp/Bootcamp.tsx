import { useEffect } from "react";

import BG from "@/assets/seminar/seminar-bg.png";
import Text from "@/assets/seminar/bootcamp-removebg.png";
import Countdown from "./Countdown.tsx";
import posthog from "@/lib/posthog";

export default function Bootcamp() {

    useEffect(() => {
        fetch("https://bootcamp-m8yr.onrender.com/health")
            .then(() => console.log("✅ Backend awake"))
            .catch(() => console.log("😴 Backend sleeping"));
    }, []);

    return (
        <div className="relative h-screen">

            {/* background */}
            <img
                src={BG}
                alt="Seminar Background"
                className="w-full h-full object-cover brightness-[0.25] contrast-[1.55] saturate-50"
            />

            {/* content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                {/* timer */}
                <div className="rounded-lg shadow-lg">
                    <p className="font-bebas text-xs tracking-[1em] text-gold-soft">
                        COMMENCES
                    </p>
                    <Countdown />
                </div>

                <img
                    src={Text}
                    alt="Seminar Text"
                    className="w-full max-w-lg h-auto object-contain"
                />

                <p className="font-bebas text-[1.5rem] text-extrabold text-cream/80 leading-[0.8]">
                    AUG 1 • AUG 2
                    <br />
                    <span className="text-gold-soft text-[0.8rem] tracking-[0.3em]">
                        — Smashers 1.0, OMR | Beginner Friendly | 10 AM to 4 PM —
                    </span>
                </p>

                {/* CTA */}
                <div className="mt-5">
                    <button
                        onClick={() => {
                            posthog.capture("hero_register_clicked");

                            document
                                .getElementById("registration")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                        }}
                        className="bg-primary font-bebas text-cream font-extrabold px-24 py-4 rounded-2xl tracking-[0.3em] hover:bg-gold-soft transition duration-300"
                    >
                        REGISTER →
                    </button>
                </div>

            </div>

        </div>
    );
}