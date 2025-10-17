const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, goals, and target audience to create a strategic foundation",
  },
  {
    number: "02",
    title: "Design & Concept",
    description: "Our creative team develops innovative concepts that align with your vision",
  },
  {
    number: "03",
    title: "Development",
    description: "We bring designs to life with clean, efficient code and seamless functionality",
  },
  {
    number: "04",
    title: "Testing & QA",
    description: "Rigorous testing ensures flawless performance across all devices and platforms",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support to ensure continued success",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start group"
            >
              <div className="text-6xl md:text-8xl font-bold text-muted/20 group-hover:text-muted/40 transition-colors">
                {step.number}
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
