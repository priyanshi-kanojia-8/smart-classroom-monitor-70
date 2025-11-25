import { Shield, CloudUpload, Users, TrendingUp, AlertTriangle, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-time Temperature & Humidity",
      description: "Continuous monitoring of classroom environment with DHT11 sensor for optimal comfort",
      gradient: "from-info to-primary",
    },
    {
      icon: Users,
      title: "Motion Detection System",
      description: "PIR sensor tracks classroom occupancy and student presence automatically",
      gradient: "from-accent to-success",
    },
    {
      icon: AlertTriangle,
      title: "Noise Level Monitoring",
      description: "Sound sensor detects classroom disturbances and maintains discipline standards",
      gradient: "from-warning to-destructive",
    },
    {
      icon: Shield,
      title: "Fire Detection & Alert",
      description: "IR flame sensor with buzzer alarm provides immediate emergency response",
      gradient: "from-destructive to-warning",
    },
    {
      icon: Zap,
      title: "LED Visual Indicators",
      description: "Instant visual feedback for motion detection and sound level status",
      gradient: "from-primary to-info",
    },
    {
      icon: CloudUpload,
      title: "ThingSpeak Cloud Integration",
      description: "Real-time data upload every 20 seconds with live graphs and analytics",
      gradient: "from-info to-accent",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            System Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive monitoring solution for modern smart classrooms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border overflow-hidden"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-primary/10 to-info/10 border-primary/20">
            <h3 className="text-4xl font-bold text-primary mb-2">5</h3>
            <p className="text-muted-foreground">Active Sensors</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-accent/10 to-success/10 border-accent/20">
            <h3 className="text-4xl font-bold text-accent mb-2">20s</h3>
            <p className="text-muted-foreground">Data Update Rate</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-warning/10 to-destructive/10 border-warning/20">
            <h3 className="text-4xl font-bold text-warning mb-2">24/7</h3>
            <p className="text-muted-foreground">Continuous Monitoring</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
