import { ChevronDown, Cpu, Thermometer, Radio, Flame, Volume2, Cloud } from "lucide-react";
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
      {/* Premium Gradient Background with Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-info/5 to-background">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'var(--gradient-mesh)',
          }}
        />
      </div>
      
      {/* Animated Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-info/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="mb-8 inline-block animate-fade-in">
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-semibold hover-lift">
            <Cpu className="w-4 h-4 text-primary animate-pulse" />
            IoT Mini Project 2025
          </span>
        </div>

        {/* Main Title with Glassmorphism Card */}
        <div className="mb-8 inline-block animate-float">
          <div className="glass-card px-12 py-8 rounded-3xl max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span 
                className="gradient-text animate-gradient-shift"
                style={{
                  backgroundSize: '200% auto',
                  backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--info)), hsl(var(--accent)), hsl(var(--primary)))',
                }}
              >
                RoomSense360
              </span>
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-foreground/80 mb-6 max-w-3xl mx-auto font-medium animate-slide-up leading-relaxed">
          IoT-based real-time monitoring system using ESP32 and ThingSpeak cloud platform
        </p>

        {/* Sensor Tags with Icons and Glow */}
        <div className="mb-12 flex flex-col items-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="group px-4 py-2.5 glass-card rounded-full flex items-center gap-2 hover-lift cursor-pointer">
              <Cpu className="w-4 h-4 text-primary group-hover:animate-pulse" />
              <span className="font-medium">ESP32</span>
            </span>
            <span className="group px-4 py-2.5 glass-card rounded-full flex items-center gap-2 hover-lift cursor-pointer">
              <Thermometer className="w-4 h-4 text-info group-hover:animate-pulse" />
              <span className="font-medium">DHT11</span>
            </span>
            <span className="group px-4 py-2.5 glass-card rounded-full flex items-center gap-2 hover-lift cursor-pointer">
              <Radio className="w-4 h-4 text-accent group-hover:animate-pulse" />
              <span className="font-medium">PIR Sensor</span>
            </span>
            <span className="group px-4 py-2.5 glass-card rounded-full flex items-center gap-2 hover-lift cursor-pointer">
              <Flame className="w-4 h-4 text-destructive group-hover:animate-pulse" />
              <span className="font-medium">Flame Sensor</span>
            </span>
            <span className="group px-4 py-2.5 glass-card rounded-full flex items-center gap-2 hover-lift cursor-pointer">
              <Volume2 className="w-4 h-4 text-warning group-hover:animate-pulse" />
              <span className="font-medium">Sound Sensor</span>
            </span>
            <span className="group px-4 py-2.5 glass-card rounded-full flex items-center gap-2 hover-lift cursor-pointer">
              <Cloud className="w-4 h-4 text-primary group-hover:animate-pulse" />
              <span className="font-medium">ThingSpeak</span>
            </span>
          </div>
        </div>

        {/* Developed By Section */}
        <div className="mb-16 space-y-3 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Developed By</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="font-bold text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 inline-block cursor-pointer">
              Priyanshi
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="font-bold text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 inline-block cursor-pointer">
              Richa Shukla
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="font-bold text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 inline-block cursor-pointer">
              Ritu Sharma
            </span>
          </div>
          <div className="glass-card inline-block px-6 py-3 rounded-full mt-4">
            <p className="text-sm text-foreground/70 font-medium">
              Department of Computer Science & Engineering
              <br />
              Indira Gandhi Delhi Technical University for Women
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("hardware")}
            className="shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 text-base px-8 py-6 hover:scale-105"
          >
            Explore Hardware
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("dashboard")}
            className="glass-card hover:bg-primary/10 text-base px-8 py-6 hover:scale-105 border-2"
          >
            View Live Dashboard
          </Button>
        </div>

        {/* Animated Scroll Indicator */}
        <button
          onClick={() => scrollToSection("hardware")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce group"
          aria-label="Scroll down"
        >
          <div className="glass-card p-3 rounded-full group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
            <ChevronDown size={28} className="text-primary group-hover:text-info transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
