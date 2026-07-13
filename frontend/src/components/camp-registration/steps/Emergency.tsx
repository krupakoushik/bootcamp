import type { FormData } from "../types";

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

                <p className="text-white/60 mt-5 max-w-xl">
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
                        className="w-full bg-transparent border-b border-gold-soft/30 pb-5 text-5xl font-bebas outline-none placeholder:text-white/20"
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
                        className="w-full bg-transparent border-b border-gold-soft/30 pb-5 text-5xl font-bebas outline-none placeholder:text-white/20"
                    />

                </div>

            </div>

            <div className="flex justify-between mt-5">

                <button
                    onClick={previous}
                    className="text-gold-soft hover:text-cream transition"
                >
                    ← Back
                </button>

                <button
                    onClick={next}
                    className="bg-primary px-10 py-4 rounded-xl font-anton uppercase tracking-[0.35em] hover:bg-gold-soft transition"
                >
                    Continue →
                </button>

            </div>

        </div>
    );
}