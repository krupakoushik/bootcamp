import HeroVid from "@/assets/bg.mp4";

export default function HeroContent() {
  return (
    <div className="relative h-screen">

        {/* Hero video background */}
        <video
            className="w-full h-full object-cover brightness-[0.30] contrast-[1.4] saturate-50"
            autoPlay
            muted
            loop
            playsInline>
            <source src={HeroVid} type="video/mp4"/>
        </video>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

            <h1 className="font-bebas p-4 text-6xl text-cream tracking-tighter leading-[0.8]">
                ONE DOJO<br />TWO PATHS<br /><br />
                <span className="text-8xl tracking-normal font-extrabold">KENDO × AIKIDO</span>
            </h1>

            <p className="font-inter text-[0.7rem] text-bold text-cream/60 mt-6">
                The Way of the Sword • The Way of Harmony
            </p>
            
            <p className="font-inter text-[0.7rem] tracking-[0.55em] font-extrabold text-cream/45 uppercase">
                Traditional Japanese martial arts
            </p>
            
            {/* CTA buttons */}
            <div className="mt-14">
                <a href="#about" className="bg-gold font-bebes text-black font-extrabold px-24 py-4 rounded-2xl border border-white/15 shadow-xl tracking-[0.3em] hover:bg-gold-soft hover:scale-[1.02] active:scale-[0.98] transition duration-300">
                    ENTER THE DOJO →
                </a>
            </div>

        </div>

    </div>
  );
}

{/*
<span className="text-4xl tracking-normal">剣道 • 合気道</span><br />
*/}