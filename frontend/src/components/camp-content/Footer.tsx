import Logo from "@/assets/kendo/kendo-w-l-gpt.png"

export default function Footer() {
    return(
        <footer className="mt-5">
            <div className="rounded-3xl border border-gold-soft bg-white/5 backdrop-blur-xl p-10 lg:p-14">

                <div className="grid lg:grid-cols-3 lg:text-left text-center gap-12">

                    {/* Logo */}
                    <div>

                        <img
                            src={Logo}
                            alt="Chennai Kendo Club"
                            className="w-full h-auto"
                        />

                    </div>

                    {/* Links */}
                    <div>

                        <h3 className="font-bebas text-7xl text-cream">
                            QUICK LINKS
                        </h3>

                        <div className="mt-6 flex flex-col gap-4 text-white/60">

                            <a href="#schedule" className="hover:text-gold-soft transition">
                                Schedule
                            </a>

                            <a href="#venue" className="hover:text-gold-soft transition">
                                Venue
                            </a>

                            <a href="#faq" className="hover:text-gold-soft transition">
                                FAQ
                            </a>

                            <a href="#registration" className="hover:text-gold-soft transition">
                                Register
                            </a>

                        </div>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="font-bebas text-7xl text-cream">
                            CONTACT
                        </h3>

                        <div className="mt-6 flex flex-col gap-4 text-white/60">

                            <a
                                href="wa.me/919677278733"
                                className="hover:text-gold-soft transition"
                            >
                                +91 96772 78733
                            </a>

                            <p>
                                Chennai, Tamil Nadu
                            </p>

                            <a
                                href="https://instagram.com/chennai_kendo_club/"
                                target="_blank"
                                className="hover:text-gold-soft transition"
                            >
                                Instagram →
                            </a>

                        </div>

                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gold-soft/20 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-white/40 text-sm">
                        © 2026 Chennai Kendo Club. All Rights Reserved.
                    </p>

                    <p className="text-white/40 text-sm">
                        Designed & Developed by{" "}
                        <a
                            href="https://www.linkedin.com/in/krupa-koushik/"
                            target="_blank"
                            className="text-gold-soft hover:underline"
                        >
                            Krupa Koushik
                        </a>
                    </p>

                </div>

            </div>
        </footer>
    )
}