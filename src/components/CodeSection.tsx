import { Code2, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

const CodeSection = () => {
  const codeSnippet = `#include <WiFi.h>
#include <HTTPClient.h>
#include <BluetoothSerial.h>
#include "DHT.h"

// ---------------- PIN DEFINITIONS ----------------
#define FLAME_PIN 18
#define PIR_PIN 19
#define SOUND_PIN 21
#define DHTPIN 4
#define DHTTYPE DHT11

#define LED_PIR 22          // PIR LED
#define LED_SOUND 15        // SOUND LED
#define BUZZER_PIN 5        // Active buzzer

// ---------------- WIFI SETTINGS ----------------
const char* ssid = "YOUR_WIFI_NAME";    
const char* password = "YOUR_WIFI_PASSWORD";

// ---------------- THINGSPEAK API ----------------
String apiKey = "YOUR_THINGSPEAK_WRITE_API_KEY";
const char* server = "http://api.thingspeak.com/update";

// ---------------- BLUETOOTH ----------------
BluetoothSerial SerialBT;

DHT dht(DHTPIN, DHTTYPE);

// =====================================================
// SETUP
// =====================================================
void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_Classroom"); 
  Serial.println("Bluetooth Started: ESP32_Classroom");

  pinMode(FLAME_PIN, INPUT);
  pinMode(PIR_PIN, INPUT);
  pinMode(SOUND_PIN, INPUT);

  pinMode(LED_PIR, OUTPUT);
  pinMode(LED_SOUND, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  dht.begin();

  Serial.println("Connecting to WiFi...");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\\nWiFi Connected!");
  SerialBT.println("WiFi Connected!");
}

// =====================================================
// LOOP
// =====================================================
void loop() {

  // ------- READ SENSORS -------
  int flame = digitalRead(FLAME_PIN);   // LOW = fire
  int pir = digitalRead(PIR_PIN);       // HIGH = motion
  int sound = digitalRead(SOUND_PIN);   // HIGH = loud
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();

  // ------- PRINT TO SERIAL + BLUETOOTH -------
  String message = 
        "Flame:" + String(flame) +
        " | PIR:" + String(pir) +
        " | Sound:" + String(sound) +
        " | Temp:" + String(temp) +
        " | Humidity:" + String(hum);

  Serial.println(message);
  SerialBT.println(message);  // send to Bluetooth

  // =====================================================
  // SENSOR ALERT LOGIC
  // =====================================================

  // 🔥 FLAME DETECTED
  if (flame == LOW) {
    digitalWrite(BUZZER_PIN, HIGH);
    digitalWrite(LED_PIR, HIGH);
    digitalWrite(LED_SOUND, HIGH);
    SerialBT.println("🔥 FIRE DETECTED!");
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }

  // 👤 PIR MOTION LED
  digitalWrite(LED_PIR, pir == HIGH ? HIGH : LOW);

  // 🔊 SOUND LED
  digitalWrite(LED_SOUND, sound == HIGH ? HIGH : LOW);

  // =====================================================
  // SEND DATA TO THINGSPEAK
  // =====================================================

  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    String url = server;
    url += "?api_key=" + apiKey;
    url += "&field1=" + String(flame == LOW ? 0 : 1);
    url += "&field2=" + String(pir);
    url += "&field3=" + String(sound);
    url += "&field4=" + String(temp);
    url += "&field5=" + String(hum);

    http.begin(url);
    int httpCode = http.GET();

    if (httpCode > 0) {
      Serial.println("Data sent to ThingSpeak");
      SerialBT.println("Data sent to ThingSpeak");
    } else {
      Serial.println("ThingSpeak Error");
      SerialBT.println("ThingSpeak Error");
    }

    http.end();
  }

  delay(20000); // ThingSpeak requires minimum 15 seconds
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    toast.success("Code copied to clipboard!");
  };

  const codeExplanations = [
    {
      title: "WiFi Connection",
      description: "Establishes connection to WiFi network using SSID and password credentials",
    },
    {
      title: "Sensor Initialization",
      description: "Configures DHT11, PIR, flame, and sound sensors with appropriate pin modes",
    },
    {
      title: "Data Reading",
      description: "Continuously reads temperature, humidity, motion, sound, and fire detection values",
    },
    {
      title: "LED Indicators",
      description: "Controls PIR LED and Sound LED based on sensor detection status",
    },
    {
      title: "Emergency Alert",
      description: "Activates buzzer and both LEDs when fire is detected by flame sensor",
    },
    {
      title: "ThingSpeak Upload",
      description: "Sends all five sensor values to ThingSpeak cloud via HTTP POST request",
    },
  ];

  return (
    <section id="code" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ESP32 Source Code with ThingSpeak
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Arduino IDE code for the Smart Classroom monitoring system
          </p>
        </div>

        <Card className="border-border shadow-xl mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Code2 className="text-primary" size={32} />
                <div>
                  <CardTitle className="text-2xl">main.ino</CardTitle>
                  <CardDescription>Arduino IDE source code for ESP32</CardDescription>
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
              <li>Install required libraries: DHT sensor library and WiFi library</li>
              <li>Replace YOUR_WIFI_SSID and YOUR_WIFI_PASSWORD with your WiFi credentials</li>
              <li>Replace YOUR_THINGSPEAK_API_KEY with your ThingSpeak Write API Key</li>
              <li>Connect hardware according to pin definitions in code</li>
              <li>Upload code to ESP32 board via USB</li>
              <li>Open Serial Monitor to view connection status and data transmission</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CodeSection;