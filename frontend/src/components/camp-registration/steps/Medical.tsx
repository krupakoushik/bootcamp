import type { FormData } from "../../../types/types";

type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Medical({
    next,
    previous,
    formData,
    setFormData,
}: Props) {
    return (
        <div className="rounded-3xl border border-gold-soft/50 bg-white/5 backdrop-blur-xl min-h-162.5 flex flex-col justify-between p-10 lg:p-14">

            <div>

                <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                    Step 06 / 09
                </p>

                <h2 className="font-bebas text-6xl lg:text-8xl mt-5 leading-none uppercase">
                    Anything we should know?
                </h2>

                <p className="text-cream/60 mt-5 max-w-xl">
                    Tell us about medical conditions, food allergies, previous martial arts experience, or anything you'd like us to know. (Optional)
                </p>

                <textarea
                    value={formData.medical}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            medical: e.target.value,
                        })
                    }
                    className="
                        mt-16
                        w-full
                        h-56
                        rounded-3xl
                        border
                        border-gold-soft/30
                        bg-white/5
                        p-8
                        resize-none
                        outline-none
                    "
                />

            </div>

            <div className="flex items-center gap-6 mt-5 font-bebas">

                <button
                    onClick={previous}
                    className="px-5 text-gold-soft hover:text-cream transition"
                >
                    ← Back
                </button>

                <button
                    onClick={next}
                    className="flex-1 bg-primary rounded-xl py-4 tracking-[0.35em] uppercase hover:bg-gold-soft transition"
                >
                    Continue →
                </button>

            </div>

        </div>
    );
}