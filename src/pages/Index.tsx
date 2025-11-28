import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HardwareSection from "@/components/HardwareSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkingSection from "@/components/WorkingSection";
import DashboardSection from "@/components/DashboardSection";
import BluetoothSection from "@/components/BluetoothSection";
import CodeSection from "@/components/CodeSection";
import BluetoothCodeSection from "@/components/BluetoothCodeSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <HardwareSection />
        <FeaturesSection />
        <WorkingSection />
        <DashboardSection />
      <BluetoothSection />
      <CodeSection />
      <BluetoothCodeSection />
      <DemoSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
