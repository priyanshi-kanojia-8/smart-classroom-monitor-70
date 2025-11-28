import { Play, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import classroomModel1 from "@/assets/classroom-model-1.png";
import classroomModel2 from "@/assets/classroom-model-2.png";
import sensorIntegration1 from "@/assets/sensor-integration-1.png";
import sensorIntegration2 from "@/assets/sensor-integration-2.png";
import hardwareSetup1 from "@/assets/hardware-setup-1.png";
import hardwareSetup2 from "@/assets/hardware-setup-2.png";
import systemRunning1 from "@/assets/system-running-1.png";
import systemRunning2 from "@/assets/system-running-2.png";
import systemRunning3 from "@/assets/system-running-3.png";

const DemoSection = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Demo & Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual demonstration of our Smart Classroom prototype
          </p>
        </div>

        <Card className="border-border shadow-xl mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Play className="text-primary" size={32} />
              <div>
                <CardTitle className="text-2xl">Project Demo Video</CardTitle>
                <CardDescription>Complete system demonstration and working explanation</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video 
                controls 
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-info" size={28} />
                <CardTitle>Cardboard Classroom Model</CardTitle>
              </div>
              <CardDescription>DIY prototype classroom setup</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={classroomModel1} 
                        alt="Cardboard classroom model - top view showing sensor placements" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={classroomModel2} 
                        alt="Cardboard classroom model - side view with hardware setup" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              <p className="text-sm text-muted-foreground">
                Our affordable cardboard classroom model demonstrates the sensor placement and system layout
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-accent" size={28} />
                <CardTitle>Hardware Setup</CardTitle>
              </div>
              <CardDescription>Complete circuit assembly</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={hardwareSetup1} 
                        alt="Hardware setup with ESP32, breadboard, and active buzzer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={hardwareSetup2} 
                        alt="Complete hardware setup showing all wiring connections" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              <p className="text-sm text-muted-foreground">
                ESP32 with all sensors and output devices connected on breadboard
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-warning" size={28} />
                <CardTitle>Sensor Integration</CardTitle>
              </div>
              <CardDescription>Close-up of sensor connections</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={sensorIntegration1} 
                        alt="Close-up of flame and sound sensors with LED indicators" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={sensorIntegration2} 
                        alt="DHT11 and PIR sensor integration with LED alert system" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              <p className="text-sm text-muted-foreground">
                Detailed view of DHT11, PIR, flame, and sound sensor wiring
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-destructive" size={28} />
                <CardTitle>System in Action</CardTitle>
              </div>
              <CardDescription>LEDs and buzzer demonstration</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={systemRunning1} 
                        alt="System running with LEDs active and DHT11 sensor" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={systemRunning2} 
                        alt="ESP32 with active buzzer and complete wiring setup" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={systemRunning3} 
                        alt="System demonstrating flame and sound sensor alerts with LED indicators" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              <p className="text-sm text-muted-foreground">
                Active monitoring with LED indicators and buzzer during fire detection
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
