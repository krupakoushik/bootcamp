import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";

import { questions } from "./questions";

export default function RegistrationForm() {

    const [step, setStep] = useState(0);

    const [answers, setAnswers] = useState<Record<string, any>>({});

    const question = questions[step];

    function updateAnswer(value: string | boolean) {

        setAnswers(prev => ({
            ...prev,
            [question.id]: value
        }));

    }



    function validateCurrentStep() {

        const value = answers[question.id];

        if (!question.required)
            return true;

        switch (question.type) {

            case "checkbox":
                return value === true;

            case "radio":
                return value !== undefined;

            default:
                return value?.toString().trim().length > 0;

        }

    }



    function next() {

        if (!validateCurrentStep()) {

            alert("Please complete this field.");

            return;

        }

        if (step === questions.length - 1) {

            console.log(answers);

            // later:
            // POST /api/register

            return;

        }

        setStep(step + 1);

    }



    function back() {

        if (step === 0)
            return;

        setStep(step - 1);

    }



    return (

        <section
            id="register"
            className="py-28 px-6"
        >

            <div className="max-w-4xl mx-auto">

                <AnimatePresence mode="wait">

                    <ProgressBar 
                        current={step}
                        total={questions.length}
                    />

                    <motion.div

                        key={question.id}

                        initial={{
                            opacity: 0,
                            x: 60
                        }}

                        animate={{
                            opacity: 1,
                            x: 0
                        }}

                        exit={{
                            opacity: 0,
                            x: -60
                        }}

                        transition={{
                            duration: .3
                        }}

                    >

                        <QuestionCard

                            question={question}

                            value={answers[question.id]}

                            onChange={updateAnswer}

                            onNext={next}

                            onBack={back}

                            isFirst={step === 0}

                            isLast={step === questions.length - 1}

                        />

                    </motion.div>

                </AnimatePresence>

            </div>

        </section>

    );

}