import Kedoin from "@/assets/seminar/kedoin.jpeg"
import Shido from "@/assets/seminar/shido.jpeg"
import Kubo from "@/assets/seminar/kubo.jpeg"
import Hieda from "@/assets/seminar/hieda.jpeg"
import Raj from "@/assets/seminar/raj.jpeg"



export default function Sensei() {
    return (
    <div>
        <div className="mt-10 mb-10 flex items-center justify-center gap-5 text-cream">
            <div className="h-px w-20 bg-gold-soft/30" />

            <p className="font-anton text-cream text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                Learn from those who have walked the path.
            </p>

            <div className="h-px w-20 bg-gold-soft/30" />
        </div>

        <div className="rounded-3xl border text-cream border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10">

            <div className="text-center">

                <p className="font-anton tracking-[0.8em] uppercase text-gold-soft">
                    WORLD CLASS INSTRUCTORS
                </p>

                <h2 className="font-bebas text-7xl lg:text-9xl text-cream mt-3">
                    MEET THE
                    <br />
                    SENSEIS
                </h2>

                <p className="max-w-3xl mx-auto mt-6 text-white/70 text-lg">
                    Under the guidance of India's highest ranked Kendoka,
                    alongside visiting instructors from Japan and the United States.
                </p>

            </div>


            {/* stats */}

            <div className="grid md:grid-cols-3 gap-6 mt-14 text-center text-cream">

                <div>
                    <h3 className="font-bebas text-6xl text-cream">7</h3>
                    <p className="font-anton tracking-[0.4em] uppercase text-gold-soft text-xs">
                        Instructors
                    </p>
                </div>

                <div>
                    <h3 className="font-bebas text-6xl text-cream">3</h3>
                    <p className="font-anton tracking-[0.4em] uppercase text-gold-soft text-xs">
                        Countries
                    </p>
                </div>

                <div>
                    <h3 className="font-bebas text-6xl text-cream">80+</h3>
                    <p className="font-anton tracking-[0.4em] uppercase text-gold-soft text-xs">
                        Years Combined Experience
                    </p>
                </div>

            </div>


            <div className="mt-20 space-y-24">

                {/* 1 */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="aspect-square rounded-3xl overflow-hidden border border-gold-soft/40 bg-white/5">
                        <img
                            src={Kedoin}
                            alt="Kedoin Sensei"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>

                        <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                            Japan
                        </p>

                        <h3 className="font-bebas text-7xl mt-2">
                            KEDOIN
                            <br />
                            SENSEI
                        </h3>

                        <p className="mt-4 text-2xl text-white/80">
                            Kyoshi • 7 Dan
                        </p>

                    </div>

                </div>


                {/* 2 */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 text-right">

                        <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                            Japan
                        </p>

                        <h3 className="font-bebas text-7xl mt-2">
                            SHIDO
                            <br />
                            SENSEI
                        </h3>

                        <p className="mt-4 text-2xl text-white/80">
                            Renshi • 6 Dan
                        </p>

                    </div>


                    <div className="aspect-square order-1 lg:order-2 rounded-3xl border border-gold-soft/40 bg-white/5 overflow-hidden">
                        <img
                            src={Shido}
                            alt="Shido Sensei"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* 3 */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="aspect-square rounded-3xl overflow-hidden border border-gold-soft/40 bg-white/5">
                        <img
                            src={Kubo}
                            alt="Kubo Sensei"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>

                        <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                            Japan
                        </p>

                        <h3 className="font-bebas text-7xl mt-2">
                            KUBO
                            <br />
                            SENSEI
                        </h3>

                        <p className="mt-4 text-2xl text-white/80">
                            5 Dan
                        </p>

                    </div>

                </div>


                {/* 4 */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 text-right">

                        <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                            Japan
                        </p>

                        <h3 className="font-bebas text-7xl mt-2">
                            HIEDA
                            <br />
                            SENSEI
                        </h3>

                        <p className="mt-4 text-2xl text-white/80">
                            5 Dan
                        </p>

                    </div>

                    <div className="aspect-square order-1 lg:order-2 rounded-3xl border border-gold-soft/40 bg-white/5 overflow-hidden">
                        <img
                            src={Hieda}
                            alt="Hieda Sensei"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>


                {/* 5 */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="aspect-square rounded-3xl overflow-hidden border border-gold-soft/40 bg-white/5">
                        <img
                            src={Raj}
                            alt="Raj Sensei"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>

                        <p className="font-anton tracking-[0.5em] uppercase text-gold-soft text-xs">
                            USA
                        </p>

                        <h3 className="font-bebas text-7xl mt-2">
                            RAJ
                            <br />
                            SENSEI
                        </h3>

                        <p className="mt-4 text-2xl text-white/80">
                            4 Dan
                        </p>

                    </div>

                </div>

            </div>

        </div>
    </div>


    )
}