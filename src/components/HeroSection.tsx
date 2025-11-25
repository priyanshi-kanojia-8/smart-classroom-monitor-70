import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-info/5 to-background"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-info/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
            IoT Lab Project 2024
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Smart Classroom Environmental
          <br />
          <span className="gradient-text">Monitoring & Safety System</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          IoT-based real-time monitoring system using ESP32 and ThingSpeak cloud platform
        </p>

        <div className="mb-12 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1 bg-card border border-border rounded-full">ESP32</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full">DHT11</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full">PIR Sensor</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full">Flame Sensor</span>
            <span className="px-3 py-1 bg-card border border-border rounded-full">ThingSpeak</span>
          </div>
        </div>

        <div className="mb-16 space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Developed By</p>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <span className="font-semibold">Priyanshi</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold">Richa Shukla</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold">Ritu Sharma</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Department of Computer Science & Engineering
            <br />
            Indira Gandhi Delhi Technical University for Women
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("hardware")}
            className="shadow-lg"
          >
            Explore Hardware
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("dashboard")}
          >
            View Live Dashboard
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("hardware")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
