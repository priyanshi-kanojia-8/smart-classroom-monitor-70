import { Bluetooth, Smartphone, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BluetoothSection = () => {
  return (
    <section id="bluetooth" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bluetooth className="text-primary animate-pulse" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold">
              Bluetooth Monitoring Mode
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your Smart Classroom IoT System offline using ESP32's Classic Bluetooth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Bluetooth className="text-primary" size={24} />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The RoomSense360 system uses <strong>ESP32's Classic Bluetooth</strong> for 
                offline data monitoring when internet connectivity is not available.
              </p>
              <p>
                The ESP32 broadcasts as <code className="bg-muted px-2 py-1 rounded text-primary font-semibold">ESP32_Smart_Classroom</code> and 
                sends real-time sensor data through Bluetooth Serial communication.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <p className="font-semibold mb-2 text-foreground">Data Format Sent:</p>
                <code className="text-sm block">
                  Temp: 29.4°C | Humidity: 61% | PIR: 0 | Sound: 870 | Flame: 2000
                </code>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-xl bg-gradient-to-br from-primary/5 to-info/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Smartphone className="text-primary" size={24} />
                How to Use Bluetooth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Upload the Code</p>
                    <p className="text-sm text-muted-foreground">Flash the ESP32 with the Arduino code</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Open Your Android Mobile</p>
                    <p className="text-sm text-muted-foreground">Ensure Bluetooth is enabled</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Install Serial Bluetooth Terminal</p>
                    <p className="text-sm text-muted-foreground">Free app by Kai Morich on Play Store</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Turn On Bluetooth</p>
                    <p className="text-sm text-muted-foreground">Enable Bluetooth from your phone settings</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Connect to Device</p>
                    <p className="text-sm text-muted-foreground">
                      Look for <code className="bg-background px-2 py-0.5 rounded text-primary">ESP32_Smart_Classroom</code> and pair
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border shadow-xl bg-gradient-to-r from-background to-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Live Terminal Output Sample
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto">
              <div className="bg-slate-900 text-green-400 p-6 rounded-lg font-mono text-sm border-4 border-primary/20 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 text-blue-400">
                  <Smartphone size={20} />
                  <span>Serial Bluetooth Terminal</span>
                </div>
                <div className="space-y-2">
                  <p>Connected to: ESP32_Smart_Classroom</p>
                  <p className="text-gray-500">----------------------------</p>
                  <p>Temp: 29.4°C | Humidity: 61%</p>
                  <p>PIR: 0 | Sound: 870 | Flame: 2000</p>
                  <p className="text-gray-500">----------------------------</p>
                  <p>Temp: 29.5°C | Humidity: 62%</p>
                  <p>PIR: 1 | Sound: 865 | Flame: 1998</p>
                  <p className="text-gray-500">----------------------------</p>
                  <p>Temp: 29.4°C | Humidity: 61%</p>
                  <p>PIR: 0 | Sound: 870 | Flame: 2000</p>
                  <p className="animate-pulse">▮</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20 card-hover">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="text-success mx-auto mb-3" size={40} />
              <h3 className="font-bold mb-2">Offline Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                No internet required, works anywhere
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 card-hover">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="text-success mx-auto mb-3" size={40} />
              <h3 className="font-bold mb-2">Real-Time Data</h3>
              <p className="text-sm text-muted-foreground">
                Instant sensor updates via Bluetooth
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 card-hover">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="text-success mx-auto mb-3" size={40} />
              <h3 className="font-bold mb-2">Easy Setup</h3>
              <p className="text-sm text-muted-foreground">
                Simple pairing with any Android device
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BluetoothSection;