import type { FormData } from "../../../types/types";

type Props = {
    next: () => void;
    previous: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};


export default function Email({
    next,
    previous,
    formData,
    setFormData,
}: Props) {
    return (
        <div className="rounded-3xl text-cream border border-gold-soft/50 bg-white/5 backdrop-blur-xl min-h-162.5 flex flex-col justify-between p-10 lg:p-14">

            <div>

                <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                    Step 02 / 09
                </p>

                <h2 className="font-bebas text-6xl lg:text-8xl mt-5 leading-none">
                    WHERE SHOULD WE
                    <br />
                    SEND YOUR TICKET?
                </h2>

                <p className="text-cream mt-5 max-w-xl">
                    We'll send your confirmation email and QR ticket here after your payment is verified.
                </p>

                <input
                    type="email"
                    autoFocus
                    placeholder="coolkid123@example.com"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value,
                        })
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && formData.email.trim()) {
                            next();
                        }
                    }}
                    className="mt-16 w-full bg-transparent border-b border-gold-soft/30 pb-5 text-3xl lg:text-5xl font-bebas outline-none placeholder:text-white/20"
                />

            </div>

            <div className="flex items-center gap-6 font-bebas mt-5">

                <button
                    onClick={previous}
                    className="px-5 text-gold-soft hover:text-cream transition"
                >
                    ← Back
                </button>

                <button
                    onClick={next}
                    disabled={!formData.email.trim()}
                    className="flex-1 bg-primary rounded-xl py-4 tracking-[0.35em] disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed uppercase hover:bg-gold-soft transition"
                >
                    Continue →
                </button>

            </div>

        </div>
    );
}