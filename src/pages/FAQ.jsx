import React from "react";
import { IMAGES, BOOKING_URL } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a head spa?",
    a: "A head spa is a luxury scalp and hair treatment that combines deep cleansing, massage, and nourishing therapies. It promotes relaxation, relieves stress, improves scalp health, and leaves your hair feeling revitalized.",
  },
  {
    q: "How long does each session last?",
    a: "Our sessions range from 60 minutes (Hi Lite Classic) to 110 minutes (Hi Lite VVIP). Each service is designed to provide a thorough, unhurried experience.",
  },
  {
    q: "Do I need to make a reservation?",
    a: "Yes, we recommend booking in advance to secure your preferred time. You can easily book through our online booking system at www.hiliteheadspa.com.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "Upon arrival, you will be welcomed into our serene space. Your specialist will discuss your needs and customize the treatment accordingly. Simply relax and enjoy the experience.",
  },
  {
    q: "Is the head spa suitable for all hair types?",
    a: "Absolutely. Our treatments are designed for all hair types and textures. Our specialists will adjust products and techniques to best suit your individual needs.",
  },
  {
    q: "What are the benefits of regular head spa visits?",
    a: "Regular visits promote ongoing scalp health, reduce stress, improve blood circulation, strengthen hair, and provide a consistent mental reset that supports overall well-being.",
  },
  {
    q: "Do you offer group bookings?",
    a: "Yes! We offer special group rates for both our Royal and VVIP packages. It is a wonderful experience to share with friends, family, or coworkers.",
  },
  {
    q: "What products do you use?",
    a: "We use premium, carefully selected products that are gentle on the scalp and effective in delivering results. Our specialists choose products based on your unique needs.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes, we offer gift cards for all our services. Contact us directly or purchase through our booking system. A head spa experience makes a truly special gift.",
  },
  {
    q: "Where are you located?",
    a: "We are located at 9832 Katella Ave, Anaheim, CA 92804. We are open Monday through Sunday, 9:00 AM to 7:00 PM.",
  },
];

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[420px] flex items-end overflow-hidden">
        <img
          src={IMAGES.scalp}
          alt="Head spa treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">
            Questions & Answers
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="We Are Here to Help"
            title="Common Questions"
          />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-sm px-7"
              >
                <AccordionTrigger className="font-body text-sm text-foreground py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <BookingCTA
        headline="Still Have Questions?"
        subtext="Feel free to contact us or book a session. We are happy to help."
        buttonText="Contact Us"
      />
    </div>
  );
}