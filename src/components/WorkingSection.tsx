import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import systemArchitecture from "@/assets/system-architecture.png";

const WorkingSection = () => {
  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "Sensors continuously collect environmental data - temperature, humidity, motion, sound, and fire detection",
      color: "bg-primary/10 border-primary/30",
    },
    {
      number: "02",
      title: "ESP32 Processing",
      description: "Microcontroller processes sensor readings and applies logic for threshold detection and alerts",
      color: "bg-info/10 border-info/30",
    },
    {
      number: "03",
      title: "Emergency Response",
      description: "If fire detected → buzzer activates + both LEDs turn ON. Motion → PIR LED. Sound → Sound LED",
      color: "bg-destructive/10 border-destructive/30",
    },
    {
      number: "04",
      title: "Continuous Monitoring",
      description: "Temperature and humidity values are constantly monitored and logged for environmental analysis",
      color: "bg-accent/10 border-accent/30",
    },
    {
      number: "05",
      title: "WiFi Connection",
      description: "ESP32 connects to WiFi network using configured SSID and password credentials",
      color: "bg-warning/10 border-warning/30",
    },
    {
      number: "06",
      title: "Cloud Upload",
      description: "Data transmitted to ThingSpeak cloud via REST API every 20 seconds with 5 field parameters",
      color: "bg-success/10 border-success/30",
    },
    {
      number: "07",
      title: "Data Visualization",
      description: "ThingSpeak updates graphs and displays real-time sensor values on dashboard interface",
      color: "bg-primary/10 border-primary/30",
    },
    {
      number: "08",
      title: "Remote Access",
      description: "Users can monitor classroom conditions from anywhere via web dashboard or mobile app",
      color: "bg-info/10 border-info/30",
    },
  ];

  return (
    <section id="working" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete workflow from sensor data collection to cloud visualization
          </p>
        </div>

        <div className="relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-primary via-info to-accent -translate-x-1/2"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 lg:text-right lg:pr-12">
                  {index % 2 === 0 && (
                    <Card className={`p-6 card-hover ${step.color} border-2`}>
                      <div className="flex items-start gap-4">
                        <span className="text-4xl font-bold opacity-50">{step.number}</span>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-info flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 lg:hidden">
                      <ArrowRight className="rotate-90" size={24} />
                    </div>
                  )}
                </div>

                <div className="flex-1 lg:pl-12">
                  {index % 2 !== 0 && (
                    <Card className={`p-6 card-hover ${step.color} border-2`}>
                      <div className="flex items-start gap-4">
                        <span className="text-4xl font-bold opacity-50">{step.number}</span>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-card rounded-xl border border-border shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">System Architecture</h3>
          <div className="rounded-lg overflow-hidden bg-white p-8">
            <img 
              src={systemArchitecture} 
              alt="System Architecture diagram showing data flow from sensors through ESP32 to ThingSpeak and web dashboard"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Complete system architecture showing data flow from sensors to cloud dashboard
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
