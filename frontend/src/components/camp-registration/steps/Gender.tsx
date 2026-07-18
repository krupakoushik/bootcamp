import type { FormData } from "../../../types/types";

type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Gender({
    next,
    previous,
    formData,
    setFormData,
}: Props) {
    return (
        <div className="rounded-3xl text-cream border border-gold-soft/50 bg-white/5 backdrop-blur-xl min-h-162.5 flex flex-col justify-between p-10 lg:p-14">

            <div>

                <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                    Step 04 / 09
                </p>

                <h2 className="font-bebas text-7xl mt-5 leading-none">
                    HOW DO YOU
                    <br />
                    IDENTIFY?
                </h2>


                <div className="grid md:grid-cols-2 gap-5 mt-16">

                    <button
                        onClick={() =>
                            setFormData({
                                ...formData,
                                gender: "Male",
                            })
                        }
                        className={`rounded-2xl border py-10 transition ${
                            formData.gender === "Male"
                                ? "border-primary bg-primary/10"
                                : "border-gold-soft/30 hover:border-primary"
                        }`}
                    >
                        <div className="text-5xl">👨</div>

                        <p className="font-bebas text-3xl mt-5">
                            Male
                        </p>
                    </button>

                    <button
                        onClick={() =>
                            setFormData({
                                ...formData,
                                gender: "Female",
                            })
                        }
                        className={`rounded-2xl border py-10 transition ${
                            formData.gender === "Female"
                                ? "border-primary bg-primary/10"
                                : "border-gold-soft/30 hover:border-primary"
                        }`}
                    >
                        <div className="text-5xl">👩</div>

                        <p className="font-bebas text-3xl mt-5">
                            Female
                        </p>
                    </button>

                    <button
                        onClick={() =>
                            setFormData({
                                ...formData,
                                gender: "Prefer not to say",
                            })
                        }
                        className={`rounded-2xl border py-10 transition md:col-span-2 ${
                            formData.gender === "Prefer not to say"
                                ? "border-primary bg-primary/10"
                                : "border-gold-soft/30 hover:border-primary"
                        }`}
                    >
                        <div className="text-5xl">◯</div>

                        <p className="font-bebas text-3xl mt-5">
                            Prefer not to say
                        </p>
                    </button>

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