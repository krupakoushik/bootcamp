import Logo from "@/assets/kendo/kendo-w-l-gpt.png"

export default function Discover() {
    return(
        <div className="grid lg:grid-cols-2 text gap-5 rounded-3xl border border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10 mt-5">
            <div className="font-anton tracking-[0.8em] text-gold-soft">
                THE WAY OF THE SWORD
                <h2 className="font-bebas text-8xl tracking-normal text-cream uppercase">discover kendo</h2>
                <div className="text-cream tracking-[0.15em] text-lg mt-4 leading-tight max-w-xl font-inter">
                    Kendo is the modern Japanese martial art of swordsmanship, where discipline, respect and precision matter as much as strength.<br /><br />
                    Two immersive days of Japanese swordsmanship,
                            taught by experienced instructors from India,
                            Japan and the United States.<br /><br />
                    No experience.<br />
                    No equipment.<br />
                    Just bring your curiosity.<br />
                </div>
            </div>
                <div className="flex items-center justify-center">
                    <img
                        src={Logo}
                        className="w-105 max-w-full object-contain"
                    />
                </div>
        </div>
    );
}