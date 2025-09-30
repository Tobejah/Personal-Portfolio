import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import CV from "../assets/David_Okeke_Zetkin_CV.pdf";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "David_Okeke_Zetkin_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={ref} id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-6">
                      Hello! I'm David Okeke
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm a passionate Full-stack developer/Data Analyst with over 3 years of experience 
                    creating digital solutions that make a difference. I specialize in 
                    modern web technologies and have a keen eye for user experience design.
                  </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      When I'm not coding, you can find me exploring new technologies, 
                      contributing to open-source projects, or mentoring aspiring developers. 
                      I believe in writing clean, maintainable code and creating products 
                      that users love.
                    </p>
                    
                    <Button 
                      onClick={handleDownloadCV}
                      className="bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Download size={20} />
                      Download CV
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-secondary p-6 rounded-lg">
                      <h4 className="font-bold text-card-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground">Alsager, United Kingdom</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-lg">
                      <h4 className="font-bold text-card-foreground mb-2">Experience</h4>
                      <p className="text-muted-foreground">3+ Years</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-lg">
                      <h4 className="font-bold text-card-foreground mb-2">Specialization</h4>
                      <p className="text-muted-foreground">Full-Stack Developer/Data Analyst</p>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-lg">
                      <h4 className="font-bold text-card-foreground mb-2">Education</h4>
                      <p className="text-muted-foreground">B.Sc. Computer Science</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;