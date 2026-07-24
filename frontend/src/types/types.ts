export interface FormData {
    name: string;
    email: string;
    phone: string;

    gender: string;

    emergencyName: string;
    emergencyPhone: string;

    medical: string;

    waiver: boolean;

    pass: string;

    promoCode: string;
    originalAmount: number;
    discount: number;
    finalAmount: number;

    paymentScreenshot: File | null;
}