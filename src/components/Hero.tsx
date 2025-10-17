import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background Element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[800px] h-[800px] border border-foreground/20 rotate-45 transform"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Digital Excellence
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Turning Concepts
              <br />
              into Digital Airspace
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We craft exceptional digital experiences that elevate your brand and engage your audience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="group">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>

          <div className="pt-12">
            <p className="text-sm text-muted-foreground">Trusted by innovative brands worldwide</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
