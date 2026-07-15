export interface Registration {
    id: number;

    ckc_id: string;
    uuid: string;

    name: string;
    email: string;
    phone: string;

    gender: string;

    emergency_name: string;
    emergency_phone: string;

    medical: string;

    pass_type: string;
    amount_paid: string;

    payment_screenshot: string;

    verified: boolean;

    qr_code: string | null;

    day1_attended: boolean;
    day2_attended: boolean;

    email_sent: boolean;

    created_at: string;
}