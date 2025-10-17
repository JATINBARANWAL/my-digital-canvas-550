import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete brand system for a tech startup",
  },
  {
    title: "E-Commerce Platform",
    category: "Development",
    description: "Modern shopping experience with seamless checkout",
  },
  {
    title: "Mobile Application",
    category: "App Design",
    description: "Intuitive fitness tracking app",
  },
  {
    title: "Marketing Campaign",
    category: "Strategy",
    description: "Integrated digital marketing campaign",
  },
  {
    title: "Website Redesign",
    category: "Web Design",
    description: "Complete overhaul of corporate website",
  },
  {
    title: "Product Launch",
    category: "Campaign",
    description: "Multi-channel product launch strategy",
  },
];

const WorkShowcase = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Latest Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card hover:bg-accent transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
