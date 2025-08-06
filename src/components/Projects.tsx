import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import drowsinessProject from "@/assets/drowsiness-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Drowsiness Detection System",
      description: "An intelligent computer vision system that monitors driver alertness in real-time using advanced machine learning algorithms. The system analyzes facial features and eye movement patterns to detect signs of drowsiness and provides immediate alerts to prevent accidents.",
      image: drowsinessProject,
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "TensorFlow"],
      githubUrl: "https://github.com/Ss0-art/drowsiness",
      demoUrl: "#",
      featured: true
    }

  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my development work, demonstrating proficiency in full-stack
            development and innovative problem-solving approaches.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden shadow-card hover:shadow-glow transition-smooth animate-fade-in-up ${project.featured ? 'lg:grid lg:grid-cols-2' : ''
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={project.featured ? 'order-2' : ''}>
                <div className="relative h-64 lg:h-full">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="w-12 h-12 text-primary mx-auto mb-2" />
                        <p className="text-primary font-medium">Project Preview</p>
                      </div>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">Featured Project</Badge>
                    </div>
                  )}
                </div>
              </div>

              <div className={`p-8 ${project.featured ? 'order-1' : ''}`}>
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="sm" className="group">
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    View Code
                  </Button>
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" size="sm" className="group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Live Demo
                  </Button>
                </a>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;