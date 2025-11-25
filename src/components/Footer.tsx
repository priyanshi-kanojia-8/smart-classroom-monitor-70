import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Smart Classroom IoT
            </h3>
            <p className="text-sm text-muted-foreground">
              Environmental monitoring and safety system using ESP32 and ThingSpeak cloud platform.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Project Details</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>IoT Lab Project 2024</li>
              <li>Computer Science Department</li>
              <li>IGDTUW, New Delhi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Team Members</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Priyanshi</li>
              <li>Richa Shukla</li>
              <li>Ritu Sharma</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Smart Classroom IoT Project. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
