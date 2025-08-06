import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Academic foundation in computer applications with exceptional performance 
            and a strong focus on practical learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant hover:shadow-glow transition-smooth animate-fade-in-up card-gradient">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Bachelor of Computer Applications (B.C.A.)
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-2">
                      Sri Sathya Sai Institute For Women, Dharwad
                    </h4>
                    <p className="text-muted-foreground">
                      Karnataka State Akkamahadevi Women's University
                    </p>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <Badge className="bg-primary text-white text-lg px-4 py-2 mb-2">
                      Percentage:91.01%
                    </Badge>
                    
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Outstanding academic performance with 91.01%
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Strong foundation in computer science principles
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Focus on practical application development
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-3 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      Location & Recognition
                    </h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Dharwad, Karnataka, India
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Affiliated with prestigious state university
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Specialized focus on women's education
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/30 rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">Core Curriculum Highlights</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Programming Fundamentals",
                      "Database Management",
                      "Web Development",
                      "Software Engineering",
                      "Data Structures",
                      "Computer Networks",
                      "Project Management"
                    ].map((subject, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {subject}
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

export default Education;