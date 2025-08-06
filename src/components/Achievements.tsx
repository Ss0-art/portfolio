import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, BookOpen, Star, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Digital Bano Competition Winner",
      description: "Secured first place in the Digital Bano Competition, demonstrating excellence in digital literacy and innovative thinking.",
      category: "Competition",
      highlight: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personality Development Workshop",
      description: "Actively participated in personality development workshops, enhancing communication and leadership skills.",
      category: "Workshop"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Creative Skilling Program",
      description: "Completed creative skilling workshops focused on innovative problem-solving and design thinking methodologies.",
      category: "Workshop"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Full Stack Development Certification",
      description: "Earned comprehensive certification in full-stack web development covering modern technologies and frameworks.",
      category: "Certification"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Advanced Skilling Program",
      description: "Successfully completed advanced skilling programs focusing on cutting-edge technologies and industry practices.",
      category: "Certification"
    }
  ];

  const certifications = [
  
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Recognition for excellence in competitions, professional development through 
            workshops, and comprehensive technical certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`p-6 shadow-card hover:shadow-glow transition-smooth animate-fade-in-up ${
                achievement.highlight ? 'ring-2 ring-primary/20 card-gradient' : 'card-gradient'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-3 rounded-full ${
                  achievement.highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                }`}>
                  {achievement.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <Badge 
                      variant={achievement.highlight ? "default" : "secondary"}
                      className={achievement.highlight ? "bg-primary text-white" : ""}
                    >
                      {achievement.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {achievement.highlight && (
                    <div className="mt-3">
                      <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                        🏆 Winner
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Achievements;