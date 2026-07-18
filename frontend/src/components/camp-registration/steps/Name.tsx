import type { FormData } from "../../../types/types";

type Props = {
    next: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Name({
    next,
    formData,
    setFormData,
}: Props) {
    return (
        <div className="rounded-3xl text-cream border border-gold-soft/50 bg-white/5 backdrop-blur-xl min-h-162.5 flex flex-col justify-between p-10 lg:p-14">

            <div>

                <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                    Step 01 / 09
                </p>

                <h2 className="font-bebas text-6xl lg:text-8xl mt-5 leading-none">
                    WHAT'S YOUR
                    <br />
                    FULL NAME?
                </h2>

                <p className="text-cream/60 mt-5 max-w-xl">
                    This name will appear on your participation certificate and event pass.
                </p>

                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            name: e.target.value,
                        })
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && formData.name.trim()) {
                            next();
                        }
                    }}
                    className="
                        mt-16
                        w-full
                        bg-transparent
                        border-b
                        border-gold-soft
                        pb-5
                        text-5xl
                        font-bebas
                        tracking-wide
                        outline-none
                        focus:border-primary
                        transition
                    "
                />

            </div>

            <div className="flex justify-end">

                <button
                    onClick={next}
                    disabled={!formData.name.trim()}
                    className="
                        bg-primary
                        disabled:bg-white/10
                        disabled:text-cream/30
                        disabled:cursor-not-allowed
                        font-bebas
                        text-cream
                        font-extrabold
                        px-24
                        py-4
                        rounded-2xl
                        tracking-[0.3em]
                        hover:bg-gold-soft
                        transition
                        duration-300
                    "
                >
                    Continue →
                </button>

            </div>

        </div>
    );
}