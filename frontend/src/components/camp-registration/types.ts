export type QuestionType =
    | "text"
    | "email"
    | "phone"
    | "number"
    | "textarea"
    | "radio"
    | "checkbox"
    | "payment"
    | "success";

export interface QuestionOption {
    label: string;
    value: string;
}

export interface Question {
    id: keyof RegistrationData;
    title: string;
    subtitle?: string;
    placeholder?: string;

    type: QuestionType;

    required?: boolean;

    options?: QuestionOption[];
}

export interface RegistrationData {
    fullName: string;

    age: string;

    gender: string;

    phone: string;

    email: string;

    emergencyName: string;

    emergencyPhone: string;

    experience: string;

    medical: string;

    waiver: boolean;

    photoConsent: boolean;

    paymentScreenshot: File | null;
}