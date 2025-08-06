import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Shilpa_Naragund.pdf'; // Public folder path
  link.download = 'Shilpa_Naragund.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 subtle-gradient opacity-90" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Shilpa Naragund</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-muted-foreground">
            Passionate Full Stack Developer with a knack for creating 
            <span className="text-primary font-medium"> dynamic web solutions</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={downloadResume}
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline-primary" 
              size="xl" 
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in">
          <div className="flex justify-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">91.01%</div>
              <div className="text-sm">Percentage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
