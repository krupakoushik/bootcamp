import { useState } from "react";

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

        pass: "Beginner Pass",

        paymentScreenshot: null as File | null,
    });

    const next = () => {
        setStep((prev) => prev + 1);
    };

    const previous = () => {
        setStep((prev) => prev - 1);
    };

    const steps = [
        Name,
        Email,
        Phone,
        Gender,
        Emergency,
        Medical,
        Waiver,
        Choose,
        Payment,
        Success,
    ];

    const CurrentStep = steps[step];

    return (
        <CurrentStep
            next={next}
            previous={previous}
            formData={formData}
            setFormData={setFormData}
        />
    );
}