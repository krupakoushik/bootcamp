import {
    MapPin,
    CalendarDays,
    Clock3,
    UtensilsCrossed,
    Users
} from "lucide-react";

export default function Schedule() {
    return(
                <div className="grid lg:grid-cols-2 gap-5 rounded-3xl border text-cream  border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10 mt-5">
                    <div className="font-bebas text-cream text-2xl"><span className="text-8xl">TRAINING VENUE</span>
                        <ul className="space-y-5 mt-8 font-bebas text-2xl text-cream">

                            <li className="flex items-center gap-4">
                                <MapPin className="w-6 h-6 text-gold-soft" />
                                Smashers 1.0, OMR
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
    );
}