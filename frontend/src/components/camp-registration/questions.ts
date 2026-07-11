import type { Question } from "./types";

export const questions: Question[] = [

    {
        id: "fullName",
        title: "What's your full name?",
        subtitle: "This name will appear on your participation certificate.",
        type: "text",
        placeholder: "John Doe",
        required: true
    },

    {
        id: "age",
        title: "How old are you?",
        subtitle: "Minimum age is 10 years.",
        type: "number",
        placeholder: "18",
        required: true
    },

    {
        id: "gender",
        title: "Gender",
        subtitle: "Optional",
        type: "radio",
        required: false,

        options: [
            {
                label: "Male",
                value: "male"
            },
            {
                label: "Female",
                value: "female"
            },
            {
                label: "Other",
                value: "other"
            },
            {
                label: "Prefer not to say",
                value: "na"
            }
        ]
    },

    {
        id: "phone",
        title: "Phone Number",
        subtitle: "We'll contact you if needed.",
        type: "phone",
        placeholder: "9876543210",
        required: true
    },

    {
        id: "email",
        title: "Email Address",
        subtitle: "Your confirmation ticket will be sent here.",
        type: "email",
        placeholder: "you@example.com",
        required: true
    },

    {
        id: "emergencyName",
        title: "Emergency Contact Name",
        type: "text",
        placeholder: "Parent / Guardian",
        required: true
    },

    {
        id: "emergencyPhone",
        title: "Emergency Contact Number",
        type: "phone",
        placeholder: "9876543210",
        required: true
    },

    {
        id: "experience",
        title: "Any previous martial arts experience?",
        subtitle: "Optional",
        type: "textarea",
        placeholder: "Karate for 2 years...",
        required: false
    },

    {
        id: "medical",
        title: "Medical conditions or injuries",
        subtitle: "Anything instructors should know.",
        type: "textarea",
        placeholder: "Asthma, knee injury...",
        required: false
    },

    {
        id: "waiver",
        title: "Liability Waiver",
        subtitle:
            "I understand the risks involved in participating and agree to the terms.",
        type: "checkbox",
        required: true
    },

    {
        id: "photoConsent",
        title: "Photography Consent",
        subtitle:
            "I consent to being photographed and filmed for Chennai Kendo Club promotional use.",
        type: "checkbox",
        required: true
    }

];