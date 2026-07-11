import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Question } from "./types";

interface Props {
    question: Question;
    value: string | boolean;

    onChange: (value: string | boolean) => void;

    onNext: () => void;
    onBack: () => void;

    isFirst: boolean;
    isLast: boolean;
}

export default function QuestionCard({
    question,
    value,
    onChange,
    onNext,
    onBack,
    isFirst,
    isLast
}: Props) {

    function renderInput() {

        switch (question.type) {

            case "text":
            case "email":
            case "phone":
            case "number":
                
                return (

                    <input
                        autoFocus
                        type={question.type === "phone"
                            ? "tel"
                            : question.type}
                        value={value}
                        placeholder={question.placeholder}
                        onChange={(e) =>
                            onChange(e.target.value)
                        }

                        onKeyDown={(e) => {

                            if (e.key === "Enter")
                                onNext();

                        }}

                        className="
                        mt-5
                        w-full
                        bg-transparent
                        border-b
                        border-gold-soft/40
                        text-4xl
                        md:text-5xl
                        font-bebas
                        tracking-wide
                        pb-4
                        outline-none
                        focus:border-primary
                        transition
                        placeholder:text-white/20
                        "
                    />

                );

            case "textarea":

                return (

                    <textarea

                        autoFocus

                        value={value}

                        placeholder={question.placeholder}

                        rows={5}

                        onChange={(e) =>
                            onChange(e.target.value)
                        }

                        className="
                        mt-10
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-gold-soft/30
                        bg-white/5
                        p-6
                        text-lg
                        outline-none
                        focus:border-primary
                        transition
                        "

                    />

                );

            case "radio":

                return (

                    <div className="mt-10 space-y-4">

                        {question.options?.map((option) => (

                            <button

                                key={option.value}

                                type="button"

                                onClick={() =>
                                    onChange(option.value)
                                }

                                className={`
                                w-full
                                rounded-xl
                                border
                                p-5
                                text-left
                                transition

                                ${value === option.value

                                        ? "border-primary bg-primary/10"

                                        : "border-white/10 hover:border-gold-soft"}

                                `}
                            >

                                {option.label}

                            </button>

                        ))}

                    </div>

                );

            case "checkbox":

                return (

                    <div className="mt-5">

                        <label className="flex gap-5 items-start cursor-pointer">

                            <input

                                type="checkbox"

                                checked={value}

                                onChange={(e) =>
                                    onChange(e.target.checked)
                                }

                                className="mt-2 w-6 h-6 accent-gold-soft-600"

                            />

                            <span className="text-lg leading-8 text-white/80">

                                {question.subtitle}

                            </span>

                        </label>

                    </div>

                );

            default:

                return null;

        }

    }

    return (

        <div

            className="
            rounded-3xl
            border
            border-gold-soft/40
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            md:p-14
            min-h-[650px]
            flex
            flex-col
            justify-between
            "

        >

            <div>

                <p className="uppercase tracking-[0.45em] text-xs text-gold-soft">

                    Registration

                </p>

                <h2 className="mt-5 font-bebas text-5xl md:text-7xl leading-none">

                    {question.title}

                </h2>

                {question.subtitle &&
                    question.type !== "checkbox" && (

                        <p className="mt-5 text-white/60 text-lg">

                            {question.subtitle}

                        </p>

                    )}

                {renderInput()}

            </div>

            <div className="flex justify-between items-center mt-14">

                {!isFirst ? (

                    <button

                        onClick={onBack}

                        className="
                        flex
                        items-center
                        gap-2
                        text-gold-soft
                        hover:text-primary
                        transition
                        "

                    >

                        <ArrowLeft size={18} />

                        Back

                    </button>

                ) : (

                    <div />

                )}

                <button

                    onClick={onNext}

                    className="
                    bg-primary
                    hover:bg-red-700
                    transition
                    rounded-xl
                    px-8
                    py-4
                    font-bebas
                    tracking-[0.3em]
                    uppercase
                    flex
                    items-center
                    gap-3
                    "

                >

                    {isLast
                        ? "Continue"
                        : "Next"}

                    <ArrowRight size={18} />

                </button>

            </div>

        </div>

    );

}