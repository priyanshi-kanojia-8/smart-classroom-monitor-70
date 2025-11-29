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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#faf6ff]">
      
      {/* Soft Abstract Floating Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/50 to-cyan-100/30 rounded-full blur-3xl animate-float-gentle opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/40 to-pink-100/20 rounded-full blur-3xl animate-float-gentle opacity-50" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-100/30 to-blue-50/20 rounded-full blur-3xl animate-float-gentle opacity-40" style={{ animationDelay: '5s' }}></div>
      
      {/* Subtle Particle Texture Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 197, 253, 0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Layered Soft Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C300,90 600,10 900,50 C1050,70 1200,50 1200,50 L1200,120 L0,120 Z" fill="#dbeafe" opacity="0.5"></path>
          <path d="M0,70 C300,30 600,90 900,60 C1050,50 1200,70 1200,70 L1200,120 L0,120 Z" fill="#e0e7ff" opacity="0.4"></path>
          <path d="M0,85 C300,60 600,100 900,80 C1050,75 1200,85 1200,85 L1200,120 L0,120 Z" fill="#f0f4ff" opacity="0.3"></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        
        {/* Badge */}
        <div className="mb-8 inline-block animate-fade-in-soft">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full text-xs font-medium text-slate-600 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
            IoT Mini Project 2025
          </span>
        </div>

        {/* Main Title - Clean & Minimal */}
        <div className="mb-6 animate-fade-in-soft" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-800 mb-2">
            <span className="font-semibold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              RoomSense360
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-soft" style={{ animationDelay: '0.4s' }}>
          IoT-based real-time monitoring system using ESP32 and ThingSpeak cloud platform
        </p>

        {/* Sensor Tags - Minimal & Clean */}
        <div className="mb-16 flex flex-col items-center gap-6 animate-fade-in-soft" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-3 text-sm max-w-3xl">
            <span className="group px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full flex items-center gap-2 minimal-hover cursor-pointer shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-slate-700 font-medium">ESP32</span>
            </span>
            <span className="group px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full flex items-center gap-2 minimal-hover cursor-pointer shadow-sm">
              <Thermometer className="w-3.5 h-3.5 text-cyan-500" />
              <span className="text-slate-700 font-medium">DHT11</span>
            </span>
            <span className="group px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full flex items-center gap-2 minimal-hover cursor-pointer shadow-sm">
              <Radio className="w-3.5 h-3.5 text-green-500" />
              <span className="text-slate-700 font-medium">PIR Sensor</span>
            </span>
            <span className="group px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full flex items-center gap-2 minimal-hover cursor-pointer shadow-sm">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-slate-700 font-medium">Flame Sensor</span>
            </span>
            <span className="group px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full flex items-center gap-2 minimal-hover cursor-pointer shadow-sm">
              <Volume2 className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-slate-700 font-medium">Sound Sensor</span>
            </span>
            <span className="group px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full flex items-center gap-2 minimal-hover cursor-pointer shadow-sm">
              <Cloud className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-slate-700 font-medium">ThingSpeak</span>
            </span>
          </div>
        </div>

        {/* Developed By Section - Clean & Elegant */}
        <div className="mb-12 space-y-4 animate-fade-in-soft" style={{ animationDelay: '0.8s' }}>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Developed By</p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-base">
            <span className="font-medium text-slate-700 hover:text-blue-600 transition-colors duration-500 cursor-pointer">
              Priyanshi
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-medium text-slate-700 hover:text-blue-600 transition-colors duration-500 cursor-pointer">
              Richa Shukla
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-medium text-slate-700 hover:text-blue-600 transition-colors duration-500 cursor-pointer">
              Ritu Sharma
            </span>
          </div>
          <div className="inline-block px-6 py-3 bg-white/50 backdrop-blur-sm border border-slate-200/40 rounded-2xl mt-3 shadow-sm">
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Department of Computer Science & Engineering
              <br />
              Indira Gandhi Delhi Technical University for Women
            </p>
          </div>
        </div>

        {/* Action Buttons - Minimal Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-soft" style={{ animationDelay: '1s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("hardware")}
            className="bg-slate-800 hover:bg-slate-700 text-white shadow-sm hover:shadow-md transition-all duration-500 text-sm px-8 py-5 rounded-full font-medium"
          >
            Explore Hardware
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("dashboard")}
            className="bg-white/60 backdrop-blur-sm border-slate-300 hover:bg-white hover:border-slate-400 text-slate-700 text-sm px-8 py-5 rounded-full font-medium transition-all duration-500"
          >
            View Live Dashboard
          </Button>
        </div>

        {/* Minimal Scroll Indicator */}
        <button
          onClick={() => scrollToSection("hardware")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float-gentle group"
          aria-label="Scroll down"
        >
          <div className="p-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full shadow-sm group-hover:shadow-md transition-all duration-500">
            <ChevronDown size={20} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
