import type { FormData } from "../types";

type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Choose({
    next,
    previous,
    formData,
    setFormData,
}: Props) {
    return (
        <div className="rounded-3xl text-cream border border-gold-soft/50 bg-white/5 backdrop-blur-xl min-h-[700px] flex flex-col justify-between p-10">

            <div>

                <p className="font-anton tracking-[0.45em] uppercase text-gold-soft text-xs">
                    Step 08 / 09
                </p>

                <h2 className="font-bebas text-7xl lg:text-9xl mt-5 leading-none">
                    RESERVE
                    <br />
                    YOUR PLACE
                </h2>

                <p className="mt-6 text-white/70 max-w-2xl">
                    Select the pass that best fits you.
                </p>

                <div className="grid lg:grid-cols-3 gap-5 mt-16">

                    {[
                        { name: "BEGINNER PASS", price: "3000" },
                        { name: "SUPPORTER PASS", price: "5000" },
                        { name: "PATRON PASS", price: "8000" },
                    ].map((pass) => (
                        <button
                            key={pass.price}
                            onClick={() =>
                                setFormData({
                                    ...formData,
                                    pass: pass.price,
                                })
                            }
                            className={`rounded-3xl border p-8 transition ${
                                formData.pass === pass.price
                                    ? "border-primary bg-primary/10"
                                    : "border-gold-soft/30 hover:border-primary"
                            }`}
                        >
                            <p className="font-anton tracking-[0.3em] text-gold-soft">
                                {pass.name}
                            </p>

                            <h3 className="font-bebas text-7xl mt-6">
                                ₹{pass.price}
                            </h3>
                        </button>
                    ))}

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