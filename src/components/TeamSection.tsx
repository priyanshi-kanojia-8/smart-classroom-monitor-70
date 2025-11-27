import { GraduationCap, Users, Building2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import priyanshiPhoto from "@/assets/priyanshi-photo.png";
import richaPhoto from "@/assets/richa-photo.png";
import rituPhoto from "@/assets/ritu-photo.png";

const TeamSection = () => {
  const teamMembers = [
    { name: "Priyanshi", role: "Hardware & Circuit Design", photo: priyanshiPhoto },
    { name: "Richa Shukla", role: "Software & Cloud Integration", photo: richaPhoto },
    { name: "Ritu Sharma", role: "Testing & Documentation", photo: rituPhoto },
  ];

  return (
    <section id="team" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Project Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Developed by Computer Science students at IGDTUW
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover border-border text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-info/5">
            <CardContent className="p-8 text-center">
              <Building2 className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold mb-2">Institution</h3>
              <p className="text-sm text-muted-foreground">
                Indira Gandhi Delhi Technical<br />University for Women
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-to-br from-accent/5 to-success/5">
            <CardContent className="p-8 text-center">
              <GraduationCap className="text-accent mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold mb-2">Department</h3>
              <p className="text-sm text-muted-foreground">
                Computer Science<br />& Engineering
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-to-br from-warning/5 to-destructive/5">
            <CardContent className="p-8 text-center">
              <Users className="text-warning mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold mb-2">Project Type</h3>
              <p className="text-sm text-muted-foreground">
                IoT Mini Project<br />Academic Year 2025
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary to-info text-white border-0">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Project Goals</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              To create an affordable, scalable IoT solution for monitoring classroom environments, 
              improving safety through fire detection, and providing real-time data analytics for 
              educational institutions using modern cloud platforms.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;
