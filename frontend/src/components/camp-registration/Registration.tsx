import posthog from "@/lib/posthog";
import { useEffect, useState } from "react";

import Name from "./steps/Name";
import Email from "./steps/Email";
import Phone from "./steps/Phone";
import Gender from "./steps/Gender";
import Emergency from "./steps/Emergency";
import Medical from "./steps/Medical";
import Waiver from "./steps/Waiver";
import Choose from "./steps/Choose";
import Payment from "./steps/Payment";
import Success from "./steps/Success";



const steps = [
        { component: Name, name: "Name" },
        { component: Email, name: "Email" },
        { component: Phone, name: "Phone" },
        { component: Gender, name: "Gender" },
        { component: Emergency, name: "Emergency" },
        { component: Medical, name: "Medical" },
        { component: Waiver, name: "Waiver" },
        { component: Choose, name: "Choose Pass" },
        { component: Payment, name: "Payment" },
        { component: Success, name: "Success" },
];

export default function Registration() {
    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",

        gender: "",

        emergencyName: "",
        emergencyPhone: "",

        medical: "",

        waiver: false,

        pass: "2500",

        amount: "0",

        paymentScreenshot: null as File | null,
    });

    const next = () => {
        setStep((prev) => prev + 1);
    };

    const previous = () => {
        setStep((prev) => prev - 1);
    };

    const CurrentStep = steps[step].component;

    useEffect(() => {
        posthog.capture("registration_started");
    }, []);

    useEffect(() => {
        posthog.capture("registration_step", {
            step_number: step + 1,
            step_name: steps[step].name,
        });
    }, [step]);    



    return (
        <CurrentStep
            next={next}
            previous={previous}
            formData={formData}
            setFormData={setFormData}
        />
    );
}