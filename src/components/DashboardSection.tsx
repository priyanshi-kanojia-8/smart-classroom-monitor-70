import { ExternalLink, Activity, Cloud } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const DashboardSection = () => {
  const fields = [
    { number: 1, name: "Flame Status", description: "Fire detection sensor status (0 = No Fire, 1 = Fire Detected)" },
    { number: 2, name: "PIR Motion", description: "Motion detection status (0 = No Motion, 1 = Motion Detected)" },
    { number: 3, name: "Sound Level", description: "Noise level intensity (analog value from sound sensor)" },
    { number: 4, name: "Temperature (°C)", description: "Classroom temperature in Celsius" },
    { number: 5, name: "Humidity (%)", description: "Relative humidity percentage" },
  ];

  return (
    <section id="dashboard" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ThingSpeak Cloud Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time sensor data visualization and monitoring through ThingSpeak IoT platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Cloud className="text-primary" size={32} />
                <CardTitle className="text-2xl">Cloud Integration</CardTitle>
              </div>
              <CardDescription>How ESP32 connects to ThingSpeak</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Connection Process:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>ESP32 connects to WiFi using SSID and password</li>
                  <li>Establishes HTTPS connection to ThingSpeak server</li>
                  <li>Sends data via REST API every 20 seconds</li>
                  <li>ThingSpeak processes and stores data in channel fields</li>
                </ol>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <code className="text-xs break-all">
                  https://api.thingspeak.com/update?api_key=YOUR_KEY&field1=value1&field2=value2
                </code>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Activity className="text-accent" size={32} />
                <CardTitle className="text-2xl">Data Fields</CardTitle>
              </div>
              <CardDescription>Five parameters uploaded to cloud</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {fields.map((field) => (
                  <div key={field.number} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      {field.number}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">{field.name}</h5>
                      <p className="text-xs text-muted-foreground">{field.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Live Dashboard View</CardTitle>
            <CardDescription className="text-center">
              Real-time sensor data graphs and visualization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden mb-6 border border-border">
              <iframe 
                width="100%" 
                height="500" 
                src="https://thingspeak.com/channels/3186007/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line"
                title="ThingSpeak Channel 3186007 - RoomSense360"
                className="w-full"
              />
            </div>
            <div className="text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-semibold mb-1">Channel ID</p>
                  <code className="text-xs bg-background px-3 py-1 rounded">3186007</code>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-semibold mb-1">Write API Key</p>
                  <code className="text-xs bg-background px-3 py-1 rounded">PY52GUG1XLWI5EIS</code>
                </div>
              </div>
              <a 
                href="https://thingspeak.com/channels/3186007"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  Open Full Dashboard
                  <ExternalLink size={18} />
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                View detailed analytics and historical data on ThingSpeak
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-primary/5 border-primary/20">
            <h3 className="text-3xl font-bold text-primary mb-2">20s</h3>
            <p className="text-sm text-muted-foreground">Update Interval</p>
          </Card>
          <Card className="text-center p-6 bg-accent/5 border-accent/20">
            <h3 className="text-3xl font-bold text-accent mb-2">5</h3>
            <p className="text-sm text-muted-foreground">Data Fields</p>
          </Card>
          <Card className="text-center p-6 bg-info/5 border-info/20">
            <h3 className="text-3xl font-bold text-info mb-2">∞</h3>
            <p className="text-sm text-muted-foreground">Data History</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
