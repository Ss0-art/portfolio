import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Kannada", level: "Native" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate B.C.A. graduate from Sri Sathya Sai Institute For Women, Dharwad, 
                with a strong foundation in computer applications and a CGPA of 9.42. My journey in 
                technology began with curiosity and has evolved into a deep passion for creating 
                innovative web solutions.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Full Stack Developer, I specialize in modern web technologies including React.js, 
                Node.js, Express.js, and MongoDB. I'm particularly interested in the intersection of 
                web development and artificial intelligence, always seeking to incorporate cutting-edge 
                technologies into practical solutions.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My experience includes real-time project exposure during my internship at Murthy 
                Consultancy and Solutions, where I honed my skills in web development and backend 
                technologies. I bring strong communication and problem-solving skills to every project, 
                ensuring collaborative success and innovative outcomes.
              </p>
            </div>

            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-medium text-foreground">
                      {language.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {language.level}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-100 rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
                <img
                  src={profilePhoto}
                  alt="Shilpa Naragund"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-20 animate-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;