import Circle from "@/assets/seminar/circle.png";

export default function Schedule() {
    return(
                    <div className="grid lg:grid-cols-2 gap-5 rounded-3xl text-cream border border-gold-soft/50 bg-white/3 backdrop-blur-xl p-10 mt-5">
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
    );
}