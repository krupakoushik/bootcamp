import {
    ChevronDown
} from "lucide-react";

import { useState } from "react";

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

export default function Schedule() {

    
    const [open, setOpen] = useState<number | null>(0);

    return(
                <div className="mt-5">
                    <div className="rounded-3xl border border-gold-soft/50 bg-white/5 p-8 mt-5 text-cream">

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

                                            <p className="text-cream leading-7 pr-8">
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>
                </div>
    );
}