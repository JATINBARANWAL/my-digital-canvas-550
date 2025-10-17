import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for small projects and startups",
    features: [
      "Single page website",
      "Responsive design",
      "Basic SEO setup",
      "1 month support",
      "Contact form integration",
    ],
  },
  {
    name: "Professional",
    price: "$5,000",
    description: "Ideal for growing businesses",
    features: [
      "Multi-page website",
      "Advanced animations",
      "CMS integration",
      "3 months support",
      "Analytics setup",
      "SEO optimization",
      "Custom features",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$10,000+",
    description: "For complex applications and large-scale projects",
    features: [
      "Custom web application",
      "API development",
      "Database design",
      "6 months support",
      "Priority support",
      "Advanced integrations",
      "Scalable architecture",
      "Team training",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Investment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for projects of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 border ${
                plan.popular
                  ? "border-foreground bg-accent"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-foreground text-background px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="text-4xl font-bold">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
