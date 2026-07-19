import type { FormData } from "../../../types/types";

type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Waiver({
    next,
    previous,
    formData,
    setFormData,
}: Props) {
    return (
        <div className="rounded-3xl text-cream border border-gold-soft/50 bg-white/5 backdrop-blur-xl min-h-162.5 flex flex-col justify-between p-10 lg:p-14">

            <div>

                <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                    Step 07 / 09
                </p>

                <h2 className="font-bebas text-6xl lg:text-8xl mt-5 leading-none">
                    BEFORE WE CONTINUE
                </h2>

                <p className="text-cream/60 mt-10 leading-9">
                    ✓ I understand that Kendo is a physical activity.<br />
                    ✓ I am participating voluntarily.<br />
                    ✓ I consent to photography and videography during the event.
                </p>

                <label className="flex items-center gap-4 mt-12 cursor-pointer">

                    <input
                        type="checkbox"
                        checked={formData.waiver}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                waiver: e.target.checked,
                            })
                        }
                        className="w-5 h-5"
                    />

                    <span className="text-lg leading-8">
                        I have read and agree to the{" "}
                        <a
                            href="/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold-soft underline underline-offset-4 hover:text-cream transition"
                        >
                            Terms & Conditions
                        </a>
                        , acknowledge the physical nature of the event, consent to photography
                        and videography, and agree to follow all safety instructions and event
                        policies.
                    </span>

                </label>

            </div>

            <div className="flex justify-between">

                <button
                    onClick={previous}
                    className="text-gold-soft hover:text-cream transition"
                >
                    ← Back
                </button>

                <button
                    onClick={next}
                    disabled={!formData.waiver}
                    className="bg-primary disabled:bg-white/10 disabled:text-cream/30 disabled:cursor-not-allowed px-10 py-4 rounded-xl font-anton uppercase tracking-[0.35em] hover:bg-gold-soft transition"
                >
                    Continue →
                </button>

            </div>

        </div>
    );
}