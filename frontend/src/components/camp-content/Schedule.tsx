export default function Schedule() {
    return(
                <div className="grid lg:grid-cols-2 gap-5 items-stretch mt-5">
                    <div className="flex flex-col rounded-3xl border border-gold-soft/50 bg-white/5 p-8">
                    <div className="font-anton tracking-[0.8em] text-gold-soft uppercase lg:text-center">
                        Day 1
                        <h2 className="font-bebas text-8xl tracking-normal text-cream uppercase">Saturday, Aug 1</h2>
                    </div>
                        <ul className="space-y-4 mt-6 text-cream">
                            <li>9:30 — 10:15 <span className="text-gold-soft"> 𒉽 </span> Registration and Verification</li>
                            <li>10:15 — 10:30 <span className="text-gold-soft"> 𒉽 </span> Inauguration</li>
                            <li>10:30 — 12:30 <span className="text-gold-soft"> 𒉽 </span> Bootcamp</li>
                            <li>12:30 — 12:45 <span className="text-gold-soft"> 𒉽 </span> Demo Kendo Match</li>
                            <li>12:45 — 1:30 <span className="text-gold-soft"> 𒉽 </span> Lunch Break</li>
                            <li>1:30 — 3:30 <span className="text-gold-soft"> 𒉽 </span> Bootcamp</li>
                            <li>3:30 — 4:00 <span className="text-gold-soft"> 𒉽 </span> Closing of Day 1</li>
                        </ul>
                    </div>
                    <div className="flex flex-col rounded-3xl border border-gold-soft/50 bg-white/5 p-8">
                    <div className="font-anton tracking-[0.8em] text-gold-soft uppercase lg:text-center">
                        Day 2
                        <h2 className="font-bebas text-8xl tracking-normal text-cream uppercase">Sunday, Aug 2</h2>
                    </div>
                        <ul className="space-y-4 mt-6 text-cream">
                            <li>9:30 — 10:15 <span className="text-gold-soft"> 𒉽 </span> Registration and Verification</li>
                            <li>10:15 — 10:30 <span className="text-gold-soft"> 𒉽 </span> Opening and Demo Kendo Match</li>
                            <li>10:30 — 12:30 <span className="text-gold-soft"> 𒉽 </span> Bootcamp</li>
                            <li>12:30 — 1:15 <span className="text-gold-soft"> 𒉽 </span> Lunch Break</li>
                            <li>1:15 — 2:30 <span className="text-gold-soft"> 𒉽 </span> Practice Grading Exam</li>
                            <li>2:30 — 3:30 <span className="text-gold-soft"> 𒉽 </span> Ji-Geiko Group Practice</li>
                            <li>3:30 — 4:00 <span className="text-gold-soft"> 𒉽 </span> Closing Ceremony and Certificate Distribution</li>
                        </ul>
                    </div>
                </div>
    );
}