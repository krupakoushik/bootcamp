import Discover from "@/components/camp-content/Discover"
import Schedule from "@/components/camp-content/Schedule"
import Sensei from "@/components/camp-content/Sensei"
import Info from "@/components/camp-content/Info"
import Venue from "@/components/camp-content/Venue"
import Rules from "@/components/camp-content/Rules"
import FAQ from "@/components/camp-content/FAQ"





export default function Content() {


    return (
        <div className="relative h-screen">
            <div className="max-w-7xl mx-auto">

                <Discover />

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        The sword teaches what words cannot.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                <Schedule />

                <Sensei />

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-center text-xs md:text-sm tracking-[0.45em] uppercase">
                        Two days. One beginning.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                <Info />

                
                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        The hardest step is the first one. Take it.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                <Venue />

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        The dojo is where strangers become kendoka.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                <Rules />

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        Questions are the first step to learning.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                <FAQ />

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        Ready to take your first step?
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                {/* ================= PASS ================= */}

                <section className="mt-5">

                    <div className="grid lg:grid-cols-2 gap-5 rounded-3xl border border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10 mt-5">
                        <div>
                            <p className="font-anton tracking-[0.8em] text-gold-soft uppercase">
                                Beginner Bootcamp Pass
                            </p>
                            <div>

                                <h2 className="font-bebas text-9xl text-cream">

                                    ₹3000

                                </h2>

                                <p className="text-white/60 mt-3 text-cream">

                                    One registration.
                                    Two unforgettable days.

                                </p>
                            </div>
                        </div>
                        <div>
                            <ul className="space-y-5 text-cream">
                                <li><span className="text-gold-soft"> 𒉽 </span> Two Full Days of Kendo Training</li>
                                <li><span className="text-gold-soft"> 𒉽 </span> Shinai Rental Included</li>
                                <li><span className="text-gold-soft"> 𒉽 </span> Vegetarian Lunch</li>
                                <li><span className="text-gold-soft"> 𒉽 </span> Completion Certificate</li>
                                <li><span className="text-gold-soft"> 𒉽 </span> CKC Membership Benefits</li>
                            </ul>

                        </div>

                    </div>

                </section>




            </div>
        </div>
    );
}