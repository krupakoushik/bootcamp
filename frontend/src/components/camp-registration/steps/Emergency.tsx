import type { FormData } from "../../../types/types";

type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Emergency({
    next,
    previous,
    formData,
    setFormData,
}: Props) {
    return (
        <div className="rounded-3xl text-cream border border-gold-soft/50 bg-white/5 backdrop-blur-xl min-h-162.5 flex flex-col justify-between p-10 lg:p-14">

            <div>

                <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                    Step 05 / 09
                </p>

                <h2 className="font-bebas text-6xl lg:text-8xl mt-5 leading-none">
                    WHOM SHOULD WE
                    <br />
                    CALL IN CASE OF EMERGENCY?
                </h2>

                <p className="text-cream/60 mt-5 max-w-xl">
                    Let's hope we never have to use this. (Optional)
                </p>

                <div className="space-y-10 mt-16">

                    <input
                        type="text"
                        autoFocus
                        placeholder="Name"
                        value={formData.emergencyName}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                emergencyName: e.target.value,
                            })
                        }
                        className="w-full bg-transparent border-b border-gold-soft/30 pb-5 text-5xl font-bebas outline-none placeholder:text-cream/20"
                    />

                    <input
                        type="tel"
                        placeholder="Contact Number"
                        value={formData.emergencyPhone}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                emergencyPhone: e.target.value,
                            })
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                next();
                            }
                        }}
                        className="w-full bg-transparent border-b border-gold-soft/30 pb-5 text-5xl font-bebas outline-none placeholder:text-cream/20"
                    />

                </div>

            </div>

            <div className="flex items-center gap-6 mt-5 font-bebes">

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