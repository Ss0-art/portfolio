import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Users, 
  MessageCircle, 
  Lightbulb,
  Server,
  Palette
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["JavaScript", "React.js", "HTML5", "CSS3", "Responsive Design", "Bootstrap"]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL", "Git", "Version Control"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "Python", "SQL", "Basic C", "C#"]
    },
    {
      title: "Design & Creative",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Web Design", "Adobe", "Canva"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Team Collaboration", "Communication", "Problem Solving", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend and backend technologies, 
            combined with strong interpersonal skills for collaborative development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-glow transition-smooth animate-fade-in-up card-gradient"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="text-sm hover:bg-primary hover:text-white transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 shadow-elegant">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg font-semibold">Communication</div>
                <div className="text-sm text-muted-foreground">Multilingual</div>
              </div>
              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg font-semibold">Innovation</div>
                <div className="text-sm text-muted-foreground">Creative Solutions</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg font-semibold">Collaboration</div>
                <div className="text-sm text-muted-foreground">Team Player</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;