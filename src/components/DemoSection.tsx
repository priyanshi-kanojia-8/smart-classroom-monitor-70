import { Play, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play size={64} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Demo Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Upload your project demo video here
                </p>
              </div>
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground text-center">
                  Classroom Model<br />Photo Placeholder
                </p>
              </div>
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground text-center">
                  Hardware Setup<br />Photo Placeholder
                </p>
              </div>
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground text-center">
                  Sensor Close-up<br />Photo Placeholder
                </p>
              </div>
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground text-center">
                  System Running<br />Photo Placeholder
                </p>
              </div>
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
