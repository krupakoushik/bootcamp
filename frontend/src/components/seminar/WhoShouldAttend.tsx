import Logo from "@/assets/kendo/kendo-w-l-gpt.png"
import {
    MapPin,
    CalendarDays,
    Clock3,
    UtensilsCrossed,
    Users,
    ChevronDown
} from "lucide-react";

import { useState } from "react";

import Circle from "@/assets/seminar/circle.png";



const faqs = [
  {
    question: "Do I need any prior experience?",
    answer:
      "Not at all. This seminar is designed specifically for complete beginners. You'll be guided from your very first step."
  },
  {
    question: "What should I wear?",
    answer:
      "A t-shirt and comfortable track pants are perfect. Please avoid shorts, sleeveless clothing and jewellery."
  },
  {
    question: "Is equipment provided?",
    answer:
      "Yes. Loaner shinai will be provided for every participant. You don't need to buy anything."
  },
  {
    question: "Is lunch included?",
    answer:
      "Yes. Fresh vegetarian lunch is included on both days."
  },
  {
    question: "Can I attend only one day?",
    answer:
      "The seminar is designed as a complete two-day experience. We strongly recommend attending both days."
  },
  {
    question: "Will I be able to keep up?",
    answer:
      "Absolutely. Everyone starts together and instructors adjust the pace for complete beginners."
  },
  {
    question: "What is the minimum age?",
    answer:
      "Participants should be at least 10 years old."
  },
  {
    question: "Can I continue training after this?",
    answer:
      "Yes. You'll be invited to continue regular training with Chennai Kendo Club if you'd like."
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. Parking is available at Smashers Sports Academy."
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds depend on how close the event is. Please contact us directly for assistance."
  },
  {
    question: "Who can I contact?",
    answer:
      "You can reach us through WhatsApp or Instagram"
  }
];


export default function WhoShouldAttend() {

    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="relative h-screen">
            <div className="max-w-7xl mx-auto">


                {/* discover */}
                <div className="grid lg:grid-cols-2 gap-5 rounded-3xl border border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10 mt-5">
                    <div className="font-anton tracking-[0.8em] text-gold-soft">
                        THE WAY OF THE SWORD
                        <h2 className="font-bebas text-8xl tracking-normal text-cream uppercase">discover kendo</h2>
                        <div className="text-cream tracking-[0.15em] text-lg mt-4 leading-tight max-w-xl font-inter">
                            Kendo is the modern Japanese martial art of swordsmanship, where discipline, respect and precision matter as much as strength.<br /><br />
                            Over two immersive days, you'll learn how to move, strike and think like a kendoka under the guidance of experienced instructors.<br /><br />
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

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        The sword teaches what words cannot.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                {/* schedule */}
                <div className="grid lg:grid-cols-2 gap-5 items-stretch mt-5">
                    <div className="flex flex-col rounded-3xl border border-gold-soft/50 bg-white/5 p-8">
                    <div className="font-anton tracking-[0.8em] text-gold-soft uppercase lg:text-center">
                        Day 1
                        <h2 className="font-bebas text-8xl tracking-normal text-cream uppercase">Saturday, Aug 1</h2>
                    </div>
                        <ul className="space-y-4 mt-6 text-cream">
                            <li>9:45 — 10:00 <span className="text-gold-soft"> 𒉽 </span> Registration</li>
                            <li>10:00 — 12:30 <span className="text-gold-soft"> 𒉽 </span> Beginners Boot Camp</li>
                            <li>12:30 — 12:45 <span className="text-gold-soft"> 𒉽 </span> Demo Kendo Match</li>
                            <li>12:45 — 1:30 <span className="text-gold-soft"> 𒉽 </span> Lunch Break</li>
                            <li>1:30 — 3:30 <span className="text-gold-soft"> 𒉽 </span> Beginners Boot Camp</li>
                            <li>3:30 — 4:00 <span className="text-gold-soft"> 𒉽 </span> Closing</li>
                        </ul>
                    </div>
                    <div className="flex flex-col rounded-3xl border border-gold-soft/50 bg-white/5 p-8">
                    <div className="font-anton tracking-[0.8em] text-gold-soft uppercase lg:text-center">
                        Day 2
                        <h2 className="font-bebas text-8xl tracking-normal text-cream uppercase">Sunday, Aug 2</h2>
                    </div>
                        <ul className="space-y-4 mt-6 text-cream">
                            <li>9:45 — 10:00 <span className="text-gold-soft"> 𒉽 </span> Registration</li>
                            <li>10:00 — 12:30 <span className="text-gold-soft"> 𒉽 </span> Beginners Boot Camp</li>
                            <li>12:30 — 12:45 <span className="text-gold-soft"> 𒉽 </span> Demo Kendo Match</li>
                            <li>12:45 — 1:30 <span className="text-gold-soft"> 𒉽 </span> Lunch Break</li>
                            <li>1:15 — 3:15 <span className="text-gold-soft"> 𒉽 </span> Practice Exam grading</li>
                            <li>3:15 — 4:00 <span className="text-gold-soft"> 𒉽 </span> Ji-Keiko / Closing Ceremony and Certificate Distribution</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-center text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        Two days. One beginning.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                {/* info */}
                <div className="grid lg:grid-cols-2 gap-5 items-stretch mt-5">
                    <div className="flex flex-col rounded-3xl border border-gold-soft/50 bg-white/5 p-8">
                        <h3 className="font-bebas text-cream text-6xl lg:text-8xl">YOUR FIRST TWO DAYS AS A KENDOKA</h3>
                        <ul className="space-y-4 mt-6 text-cream">
                            <li><span className="text-gold-soft"> 𒉽 </span> Footwork that builds balance</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> Powerful beginner strikes</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> Timing & distancet</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> Dojo etiquette</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> Confidence holding a shinai</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> A foundation to continue training</li>
                        </ul>
                    </div>
                    <div className="flex flex-col rounded-3xl border border-gold-soft/50 bg-white/5 p-8">
                        <h3 className="font-bebas text-cream text-6xl lg:text-8xl">SHOW UP.<br />WE'LL HANDLE THE REST.</h3>
                        <p>Never held a sword before?<br />Perfect.<br /><br />That's exactly who this bootcamp was designed for.</p>
                        <ul className="space-y-4 mt-6 text-cream">
                            <li><span className="text-gold-soft"> 𒉽 </span> Loaner shinai included</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> Fresh vegetarian lunch both days</li> 
                            <li><span className="text-gold-soft"> 𒉽 </span> Official participation certificate</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> Friendly instructors</li>
                            <li><span className="text-gold-soft"> 𒉽 </span> Learn at your own pace</li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        The hardest step is the first one. Take it.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                {/* venue */}
                <div className="grid lg:grid-cols-2 gap-5 rounded-3xl border border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10 mt-5">
                    <div className="font-bebas text-cream text-2xl"><span className="text-8xl">TRAINING VENUE</span>
                        <ul className="space-y-5 mt-8 font-bebas text-2xl text-cream">

                            <li className="flex items-center gap-4">
                                <MapPin className="w-6 h-6 text-gold-soft" />
                                OMR, Chennai - 600096
                            </li>

                            <li className="flex items-center gap-4">
                                <CalendarDays className="w-6 h-6 text-gold-soft" />
                                August 1st – 2nd
                            </li>

                            <li className="flex items-center gap-4">
                                <Clock3 className="w-6 h-6 text-gold-soft" />
                                10:00 AM – 4:00 PM
                            </li>

                            <li className="flex items-center gap-4">
                                <UtensilsCrossed className="w-6 h-6 text-gold-soft" />
                                Vegetarian Lunch Included
                            </li>

                            <li className="flex items-center gap-4">
                                <Users className="w-6 h-6 text-gold-soft" />
                                Ages 10+
                            </li>

                        </ul>

                        <div className="mt-10"></div>
                        <a href="https://maps.app.goo.gl/Hdcj8fwPMtmnvSb58" className="bg-primary font-bebas text-cream font-extrabold text-xl px-9 sm:px-9 md:px-35 py-3 rounded-2xl tracking-[0.3em] hover:bg-gold-soft  transition duration-300" target="_blank" rel="noreferrer">
                            GET DIRECTIONS →
                        </a>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.000914723301!2d80.24840100000002!3d12.971792999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6c74b36057%3A0x68af6e44988d3b3b!2sSmasher%20Sports%20Academy!5e0!3m2!1sen!2sin!4v1783663529230!5m2!1sen!2sin" 
                        className="w-full h-full" 
                        loading="lazy">
                        </iframe>
                    </div>
                </div>

                                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        The dojo is where strangers become kendoka.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                {/* rules */}
                    <div className="grid lg:grid-cols-2 gap-5 rounded-3xl border border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10 mt-5">
                        <div className="flex items-center justify-center">
                            <img
                                src={Circle}
                                className="w-105 max-w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="font-bebas text-8xl">DOJO ETIQUETTE</h3>
                            <ul className="space-y-4 mt-6">
                                <li><span className="text-gold-soft"> 𒉽 </span>Bow when entering and leaving the dojo.</li>
                                <li><span className="text-gold-soft"> 𒉽 </span>Respect instructors and fellow kendoka.</li>
                                <li><span className="text-gold-soft"> 𒉽 </span>Wear comfortable track pants and a t-shirt.</li>
                                <li><span className="text-gold-soft"> 𒉽 </span>Remove watches, rings and jewellery.</li>
                                <li><span className="text-gold-soft"> 𒉽 </span>Arrive before 9:45 AM.</li>
                                <li><span className="text-gold-soft"> 𒉽 </span>Phones stay off the training floor.</li>
                            </ul>
                        </div>
                    </div>

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        Questions are the first step to learning.
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

                {/* faq */}
                <div className="mt-5">
                    <div className="rounded-3xl border border-gold-soft/50 bg-white/5 p-8 mt-5">

                        <h3 className="font-bebas text-7xl lg:text-8xl">
                            BEFORE YOU REGISTER
                        </h3>

                        <div className="mt-8 space-y-3">

                            {faqs.map((faq, index) => (

                                <div
                                    key={index}
                                    className="border-b border-gold-soft/20 pb-3 cursor-pointer"
                                >

                                    <button
                                        onClick={() =>
                                            setOpen(open === index ? null : index)
                                        }
                                        className="w-full flex justify-between items-center text-left cursor-pointer"
                                    >

                                        <span className="font-medium text-lg text-creamr">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            className={`transition duration-300 text-gold-soft ${
                                                open === index
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />

                                    </button>

                                    <div
                                        className={`grid transition-all duration-500 ease-in-out ${
                                            open === index
                                                ? "grid-rows-[1fr] mt-4"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >

                                        <div className="overflow-hidden">

                                            <p className="text-white/80 leading-7 pr-8">
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>
                </div>

                <div className="mt-10 mb-10 flex items-center justify-center gap-5">
                    <div className="h-px w-20 bg-gold-soft/30" />
                    <p className="font-anton text-gold-soft text-xs md:text-sm tracking-[0.45em] uppercase text-center">
                        Ready to take your first step?
                    </p>
                    <div className="h-px w-20 bg-gold-soft/30" />
                </div>

            </div>
        </div>
    );
}