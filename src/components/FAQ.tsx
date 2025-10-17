import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while larger applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide ongoing support and maintenance packages. All projects include a support period, and we offer extended maintenance plans to ensure your digital presence stays current and secure.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We specialize in modern web technologies including React, TypeScript, Node.js, and various frameworks. We select the best technology stack for each project based on your specific requirements and goals.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Absolutely! We can help improve, redesign, or add features to existing projects. We'll assess your current setup and provide recommendations for enhancement or optimization.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with milestone-based payments. A deposit is required to begin, with subsequent payments tied to project milestones. Final payment is due upon project completion and your approval.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions? Answered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border bg-card px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
