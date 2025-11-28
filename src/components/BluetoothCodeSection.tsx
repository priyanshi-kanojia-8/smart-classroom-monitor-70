import { Bluetooth, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

const BluetoothCodeSection = () => {
  const codeSnippet = `#include "BluetoothSerial.h"
#include "DHT.h"

// ---------------- PIN DEFINITIONS ----------------
#define FLAME_PIN 18
#define PIR_PIN 19
#define SOUND_PIN 21
#define DHTPIN 4
#define DHTTYPE DHT11

#define LED_PIR 22
#define LED_SOUND 15
#define BUZZER_PIN 5

// Bluetooth object
BluetoothSerial SerialBT;
DHT dht(DHTPIN, DHTTYPE);

// =====================================================
// SETUP
// =====================================================
void setup() {
  Serial.begin(115200);
  
  // Start Bluetooth with name
  SerialBT.begin("SmartClassroom_ESP32");
  Serial.println("Bluetooth Started. Pair your phone.");

  pinMode(FLAME_PIN, INPUT);
  pinMode(PIR_PIN, INPUT);
  pinMode(SOUND_PIN, INPUT);

  pinMode(LED_PIR, OUTPUT);
  pinMode(LED_SOUND, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  dht.begin();
}

// =====================================================
// LOOP
// =====================================================
void loop() {

  int flame = digitalRead(FLAME_PIN);   // LOW = fire
  int pir = digitalRead(PIR_PIN);       // HIGH = motion
  int sound = digitalRead(SOUND_PIN);   // HIGH = noise

  float temp = dht.readTemperature();
  float hum = dht.readHumidity();

  // =====================================================
  // LED + BUZZER Alerts
  // =====================================================

  // 🔥 FLAME ALERT
  if (flame == LOW) {
    digitalWrite(BUZZER_PIN, HIGH);
    digitalWrite(LED_PIR, HIGH);
    digitalWrite(LED_SOUND, HIGH);
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }

  // 👤 PIR LED
  if (pir == HIGH) {
    digitalWrite(LED_PIR, HIGH);
  } else {
    digitalWrite(LED_PIR, LOW);
  }

  // 🔊 SOUND LED
  if (sound == HIGH) {
    digitalWrite(LED_SOUND, HIGH);
  } else {
    digitalWrite(LED_SOUND, LOW);
  }

  // =====================================================
  // SEND DATA OVER BLUETOOTH
  // =====================================================

  SerialBT.print("Flame: ");
  SerialBT.print(flame == LOW ? "🔥 Fire Detected" : "Safe");
  SerialBT.print(" | PIR: ");
  SerialBT.print(pir);
  SerialBT.print(" | Sound: ");
  SerialBT.print(sound);
  SerialBT.print(" | Temp: ");
  SerialBT.print(temp);
  SerialBT.print("C | Humidity: ");
  SerialBT.print(hum);
  SerialBT.println("%");

  // Special Alert Messages
  if (flame == LOW) SerialBT.println("🔥 FIRE ALERT!");
  if (pir == HIGH) SerialBT.println("👤 Motion Detected");
  if (sound == HIGH) SerialBT.println("🔊 Loud Sound Detected");
  if (temp > 32) SerialBT.println("🌡 High Temperature!");
  if (hum > 70) SerialBT.println("💧 High Humidity!");

  delay(1500);
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    toast.success("Code copied to clipboard!");
  };

  const codeExplanations = [
    {
      title: "Bluetooth Setup",
      description: "Initializes ESP32 Classic Bluetooth as 'SmartClassroom_ESP32' for pairing",
    },
    {
      title: "Sensor Reading",
      description: "Reads flame, motion, sound, temperature, and humidity values continuously",
    },
    {
      title: "LED Alerts",
      description: "Controls PIR and Sound LEDs based on sensor detection status",
    },
    {
      title: "Fire Emergency",
      description: "Activates buzzer and both LEDs when flame sensor detects fire",
    },
    {
      title: "Bluetooth Transmission",
      description: "Sends formatted sensor data over Bluetooth every 1.5 seconds",
    },
    {
      title: "Alert Messages",
      description: "Sends special warnings for fire, motion, noise, high temperature and humidity",
    },
  ];

  return (
    <section id="bluetooth-code" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ESP32 Source Code with Bluetooth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Arduino IDE code for Bluetooth-only monitoring mode
          </p>
        </div>

        <Card className="border-border shadow-xl mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bluetooth className="text-primary" size={32} />
                <div>
                  <CardTitle className="text-2xl">bluetooth_monitor.ino</CardTitle>
                  <CardDescription>Arduino IDE source code for ESP32 Bluetooth mode</CardDescription>
                </div>
              </div>
              <Button onClick={copyCode} variant="outline" className="gap-2">
                <Copy size={18} />
                Copy Code
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-background rounded-lg p-6 overflow-x-auto border border-border">
              <pre className="text-sm">
                <code className="text-foreground">{codeSnippet}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codeExplanations.map((item, index) => (
            <Card key={index} className="border-border card-hover">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-info/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Setup Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Install Arduino IDE and ESP32 board support</li>
              <li>Install required libraries: DHT sensor library and BluetoothSerial library</li>
              <li>Connect hardware according to pin definitions in code</li>
              <li>Upload code to ESP32 board via USB</li>
              <li>Install "Serial Bluetooth Terminal" app on your Android phone</li>
              <li>Turn on Bluetooth and pair with "SmartClassroom_ESP32"</li>
              <li>Open the app and connect to see live sensor data</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BluetoothCodeSection;
