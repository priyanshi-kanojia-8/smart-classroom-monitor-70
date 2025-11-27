import { Cpu, Thermometer, Flame, Radio, Volume2, Lightbulb, Bell, Cable } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import circuitDiagram from "@/assets/circuit-diagram.png";

const HardwareSection = () => {
  const hardware = [
    {
      icon: Cpu,
      name: "ESP32 Dev Module",
      description: "32-bit microcontroller with WiFi and Bluetooth connectivity for IoT applications",
      color: "text-primary",
    },
    {
      icon: Thermometer,
      name: "DHT11 Sensor",
      description: "Digital temperature and humidity sensor for environmental monitoring",
      color: "text-info",
    },
    {
      icon: Flame,
      name: "Flame Sensor (IR)",
      description: "Infrared-based fire detection sensor for safety alerts",
      color: "text-destructive",
    },
    {
      icon: Radio,
      name: "PIR Motion Sensor",
      description: "Passive infrared sensor to detect motion and occupancy in the classroom",
      color: "text-accent",
    },
    {
      icon: Volume2,
      name: "Sound Sensor",
      description: "Acoustic sensor to monitor noise levels and classroom disturbances",
      color: "text-warning",
    },
    {
      icon: Lightbulb,
      name: "LED Indicators (2x)",
      description: "Visual indicators for PIR motion detection and sound level alerts",
      color: "text-primary",
    },
    {
      icon: Bell,
      name: "Active Buzzer",
      description: "Audio alarm system triggered during fire emergency detection",
      color: "text-destructive",
    },
    {
      icon: Cable,
      name: "Supporting Components",
      description: "Breadboard, jumper wires, and 5V power supply for circuit connections",
      color: "text-muted-foreground",
    },
  ];

  return (
    <section id="hardware" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hardware Components
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our system uses carefully selected IoT components for accurate environmental monitoring and safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hardware.map((item, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-xl border border-border shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Circuit Overview</h3>
          <div className="rounded-lg overflow-hidden">
            <img 
              src={circuitDiagram} 
              alt="ESP32 Circuit Diagram showing connections between ESP32, DHT11, PIR sensor, flame sensor, sound sensor, LEDs, and active buzzer"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Complete wiring diagram showing ESP32 connections to all sensors and output devices
          </p>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
