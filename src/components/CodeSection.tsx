import { Code2, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

const CodeSection = () => {
  const codeSnippet = `#include <WiFi.h>
#include <DHT.h>

// WiFi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// ThingSpeak configuration
String apiKey = "YOUR_THINGSPEAK_API_KEY";
const char* server = "api.thingspeak.com";

// Pin definitions
#define DHTPIN 4          // DHT11 sensor pin
#define DHTTYPE DHT11     // DHT sensor type
#define PIR_PIN 13        // PIR motion sensor pin
#define FLAME_PIN 12      // Flame sensor pin
#define SOUND_PIN 34      // Sound sensor pin (analog)
#define PIR_LED 14        // PIR indicator LED
#define SOUND_LED 27      // Sound indicator LED
#define BUZZER_PIN 26     // Active buzzer pin

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  
  // Initialize sensors and outputs
  pinMode(PIR_PIN, INPUT);
  pinMode(FLAME_PIN, INPUT);
  pinMode(PIR_LED, OUTPUT);
  pinMode(SOUND_LED, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  
  dht.begin();
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected!");
}

void loop() {
  // Read sensor values
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  int pirStatus = digitalRead(PIR_PIN);
  int flameStatus = digitalRead(FLAME_PIN);
  int soundLevel = analogRead(SOUND_PIN);
  
  // PIR LED indicator
  digitalWrite(PIR_LED, pirStatus);
  
  // Sound LED indicator
  if (soundLevel > 500) {
    digitalWrite(SOUND_LED, HIGH);
  } else {
    digitalWrite(SOUND_LED, LOW);
  }
  
  // Fire emergency response
  if (flameStatus == LOW) {  // Flame detected
    digitalWrite(PIR_LED, HIGH);
    digitalWrite(SOUND_LED, HIGH);
    digitalWrite(BUZZER_PIN, HIGH);
    delay(1000);
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }
  
  // Send data to ThingSpeak
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    
    if (client.connect(server, 80)) {
      String postStr = apiKey;
      postStr += "&field1=";
      postStr += String(flameStatus);
      postStr += "&field2=";
      postStr += String(pirStatus);
      postStr += "&field3=";
      postStr += String(soundLevel);
      postStr += "&field4=";
      postStr += String(temperature);
      postStr += "&field5=";
      postStr += String(humidity);
      
      client.print("POST /update HTTP/1.1\\n");
      client.print("Host: api.thingspeak.com\\n");
      client.print("Connection: close\\n");
      client.print("X-THINGSPEAKAPIKEY: " + apiKey + "\\n");
      client.print("Content-Type: application/x-www-form-urlencoded\\n");
      client.print("Content-Length: ");
      client.print(postStr.length());
      client.print("\\n\\n");
      client.print(postStr);
      
      Serial.println("Data sent to ThingSpeak");
    }
    client.stop();
  }
  
  // Wait 20 seconds before next update
  delay(20000);
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
            ESP32 Source Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete Arduino code for the Smart Classroom monitoring system
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
