import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:shilpa.naragund@email.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/shilpa-naragund"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/shilpa-naragund"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Shilpa Naragund
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              with modern technologies. Let's build something amazing together.
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Dharwad, Karnataka, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Education', id: 'education' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Let's Connect
            </h4>
            <p className="text-muted-foreground text-sm">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-white hover:border-primary transition-smooth"
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Shilpa Naragund. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm flex items-center">
              Made with  using React & TypeScript
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-white transition-smooth"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;