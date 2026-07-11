interface Props {
    current: number;
    total: number;
}

export default function ProgressBar({
    current,
    total
}: Props) {

    const percentage =
        ((current + 1) / total) * 100;

    return (

        <div className="w-full">

            <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-gold-soft mb-3">

                <span>
                    Step {current + 1}
                </span>

                <span>
                    {total}
                </span>

            </div>

            <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">

                <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{
                        width: `${percentage}%`
                    }}
                />

            </div>

        </div>

    );
}