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

    payment_screenshot: string;

    verified: boolean;

    qr_code: string | null;

    day1_attended: boolean;
    day2_attended: boolean;

    certificate_generated: boolean;
    certificate_sent: boolean;

    created_at: string;
}