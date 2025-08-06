import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen, Code, Lightbulb } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Explore advanced patterns and techniques for creating maintainable and scalable React applications with modern tools and methodologies.",
      date: "Coming Soon",
      category: "React",
      readTime: "5 min read",
      placeholder: true
    },
    {
      title: "Full Stack Development: From Idea to Deployment",
      excerpt: "A comprehensive guide to building and deploying full-stack applications using the MERN stack, from conception to production.",
      date: "Coming Soon", 
      category: "Full Stack",
      readTime: "8 min read",
      placeholder: true
    },
    {
      title: "MongoDB Best Practices for Modern Web Applications",
      excerpt: "Learn advanced MongoDB techniques, optimization strategies, and best practices for building robust database solutions.",
      date: "Coming Soon",
      category: "Database",
      readTime: "6 min read", 
      placeholder: true
    }
  ];

  const categories = [
    { name: "React", icon: <Code className="w-4 h-4" />, count: 1 },
    { name: "Full Stack", icon: <Lightbulb className="w-4 h-4" />, count: 1 },
    { name: "Database", icon: <BookOpen className="w-4 h-4" />, count: 1 },
    { name: "JavaScript", icon: <Code className="w-4 h-4" />, count: 0 }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Blog & Insights
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, programming best practices, 
            and the latest trends in technology. Stay tuned for upcoming articles!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card 
                  key={index}
                  className="p-6 shadow-card hover:shadow-glow transition-smooth animate-fade-in-up card-gradient"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group text-primary"
                      disabled={post.placeholder}
                    >
                      {post.placeholder ? 'Coming Soon' : 'Read More'}
                      {!post.placeholder && (
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="p-6 shadow-card card-gradient">
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-smooth cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="text-primary mr-2">
                        {category.icon}
                      </div>
                      <span className="text-foreground">
                        {category.name}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="p-6 shadow-card card-gradient">
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Stay Updated
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get notified when I publish new articles about web development and technology.
              </p>
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="w-full"
                disabled
              >
                Subscribe (Coming Soon)
              </Button>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 shadow-card card-gradient">
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                What I'm Working On
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Writing comprehensive React best practices guide
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Exploring new AI integration possibilities
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Building new full-stack project portfolio
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;