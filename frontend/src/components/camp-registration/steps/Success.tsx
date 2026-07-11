import type { FormData } from "../types";

type Props = {
    formData: FormData;
};

export default function Success({
    formData,
}: Props) {
    return (
        <div className="rounded-3xl border border-gold-soft/50 bg-white/5 backdrop-blur-xl p-10 lg:p-14 text-cream">

            <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                REGISTRATION COMPLETE
            </p>

            <h2 className="font-bebas text-6xl lg:text-8xl mt-5 leading-none">
                WELCOME
                <br />
                TO THE DOJO.
            </h2>

            <p className="mt-8 max-w-2xl text-white/70 leading-8">
                Thank you for registering for the Chennai Kendo Club Bootcamp.
                We've received your registration details and payment proof.
                Our team will verify your payment as soon as possible.
            </p>

            {/* Email */}

            <div className="rounded-3xl border border-gold-soft/30 bg-white/5 p-8 mt-12">

                <p className="font-anton tracking-[0.35em] uppercase text-gold-soft text-xs">
                    EVENT PASS
                </p>

                <h3 className="font-bebas text-4xl mt-4">
                    CHECK YOUR EMAIL
                </h3>

                <p className="mt-5 text-white/70 leading-7">
                    Once your payment has been verified, we'll send your
                    confirmation email containing your unique event ticket
                    and personal QR code to:
                </p>

                <p className="font-bebas text-3xl text-gold-soft mt-6 break-all">
                    {formData.email}
                </p>

            </div>

            {/* Attendance */}

            <div className="rounded-3xl border border-gold-soft/30 bg-white/5 p-8 mt-6">

                <p className="font-anton tracking-[0.35em] uppercase text-gold-soft text-xs">
                    ATTENDANCE
                </p>

                <h3 className="font-bebas text-4xl mt-4">
                    DON'T FORGET YOUR QR CODE
                </h3>

                <p className="mt-5 text-white/70 leading-7">
                    Bring your QR code on both days of the bootcamp.
                    Our volunteers will scan it at the venue to mark your
                    attendance. Participants who attend both days will
                    automatically become eligible for their completion certificate.
                </p>

            </div>

            {/* Stay Connected */}

            <div className="mt-14">

                <p className="font-anton tracking-[0.35em] uppercase text-gold-soft text-xs">
                    STAY CONNECTED
                </p>

                <h3 className="font-bebas text-5xl lg:text-6xl mt-4 leading-none">
                    THE WAY OF
                    <br />
                    THE SWORD
                    <br />
                    AWAITS.
                </h3>

                <p className="mt-6 max-w-2xl text-white/70 leading-8">
                    Follow Chennai Kendo Club for updates, training content,
                    future seminars and everything happening before the bootcamp.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-10">

                    <a
                        href="https://chat.whatsapp.com/YOUR_INVITE_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-3xl border border-gold-soft/40 bg-white/5 p-8 hover:border-primary hover:bg-primary/10 transition duration-300"
                    >

                        <p className="font-anton tracking-[0.35em] uppercase text-gold-soft text-xs">
                            COMMUNITY
                        </p>

                        <h4 className="font-bebas text-5xl mt-3">
                            JOIN OUR
                            <br />
                            WHATSAPP
                        </h4>

                        <p className="mt-5 text-white/60 leading-7">
                            Meet fellow participants, receive important event
                            announcements and ask questions before the bootcamp.
                        </p>

                    </a>

                    <a
                        href="https://instagram.com/chennaikendoclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-3xl border border-gold-soft/40 bg-white/5 p-8 hover:border-primary hover:bg-primary/10 transition duration-300"
                    >

                        <p className="font-anton tracking-[0.35em] uppercase text-gold-soft text-xs">
                            FOLLOW US
                        </p>

                        <h4 className="font-bebas text-5xl mt-3">
                            INSTAGRAM
                        </h4>

                        <p className="mt-5 text-white/60 leading-7">
                            Watch Kendo in action, meet our Senseis,
                            explore the dojo and stay updated with future
                            Chennai Kendo Club events.
                        </p>

                    </a>

                </div>

            </div>

        </div>
    );
}