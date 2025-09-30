import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = [
    {
      title: "Flight Delay Prediction Model",
      description: "Engineered a machine learning pipeline processing 17M+ U.S. flight records to forecast delays. Applied Random Forest, KNN, XGBoost, and Logistic Regression, with SHAP for model interpretability and techniques to address class imbalance. The system improved scheduling accuracy and highlighted key factors driving delays, offering applications for airlines, airports, and logistics planning.",
      image: "https://www.travelai.com/resources/wp-content/uploads/2025/06/netli_07461_a_traveler_with_laptop_or_smartphone_screen_displ_e6242499-5710-4ad8-a0b9-94213a5b3e9c_1-1024x574.png",
      tags: ["Python", "SHAP Analysis", "Machine Learning", "Data Analysis"],
      demoUrl: "https://github.com/Tobejah",
      githubUrl: "https://github.com/Tobejah"
    },
    {
      title: "AI-Powered Smart Home Control System",
      description: "Built a real-time, web-based smart home platform with sub-200ms device control. Integrated REST APIs and Socket.IO for seamless connectivity, containerised services with Docker for multi-device testing, and implemented secure JWT authentication. Delivered an intuitive, resilient UI and modular architecture to support scalable, future device integration.",
      image: "https://www.bitsathy.ac.in/wp-content/uploads/Collage-Smart-Homes-JAYANTHI-V-BIT-1-1.jpg",
      tags: ["React", "Web Development", "Socket.IO", "JWT"],
      demoUrl: "https://github.com/Tobejah/Smart-Home-Project",
      githubUrl: "https://github.com/Tobejah/Smart-Home-Project"
    },
    {
      title: "Diabetic Patient Readmission Prediction",
      description: "Developed predictive models (Random Forest, XGBoost) on 50,000+ patient records to forecast hospital readmissions. Achieved ROC-AUC 0.87, with simulations showing an 18% reduction in adverse outcomes. Delivered business-focused insights linking predictive accuracy to cost savings and capacity planning in healthcare settings.",
      image: "https://storage.googleapis.com/kaggle-datasets-images/841033/1445892/594c5f79f0fb16ea07edd00a5f4bd38e/dataset-cover.jpg?t=2020-08-27-15-13-52",
      tags: ["Python", "Machine Learnining", "Hadoop", "Data Analysis"],
      demoUrl: "https://github.com/Tobejah",
      githubUrl: "https://github.com/Tobejah"
    }
  ];

  return (
    <section ref={ref} id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and passion for development.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-card">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-accent text-white"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Github
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-accent text-primary-foreground flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Github
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;