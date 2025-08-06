import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar, Code, Database, Users } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Hands-on experience in software development with real-time project exposure 
            and practical application of modern web technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant hover:shadow-glow transition-smooth animate-fade-in-up card-gradient">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Software & Web Developer Intern
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-2">
                      Murthy Consultancy and Solutions (MCS)
                    </h4>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Dharwad, Karnataka</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Internship Duration</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-foreground mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-primary" />
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Developed responsive web applications using modern frameworks
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Gained real-time project exposure in client environments
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Implemented MongoDB backend solutions
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Collaborated with senior developers on production projects
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-primary" />
                      Technologies & Skills
                    </h5>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Frontend development with React.js and modern CSS
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Backend development with Node.js and Express.js
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Database design and management with MongoDB
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Version control and collaborative development
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-accent/30 rounded-lg mb-6">
                  <h5 className="font-semibold text-foreground mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Professional Growth & Learning
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    This internship provided invaluable hands-on experience in a professional 
                    software development environment. I learned to work with real client requirements, 
                    participate in code reviews, and contribute to production-level applications. 
                    The experience significantly enhanced my technical skills and gave me insights 
                    into industry best practices and collaborative development workflows.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Technical Stack Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "React.js",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "HTML5",
                      "CSS3",
                      "Git",
                      "RESTful APIs",
                      "Responsive Design"
                    ].map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;