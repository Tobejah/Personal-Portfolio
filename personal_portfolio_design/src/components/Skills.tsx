import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  Code, 
  Database, 
  BarChart, 
  PieChart, 
  Layers, 
  Users, 
  MessageSquare, 
  Target, 
  Zap 
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 90, icon: Code },
    { name: "React/Next.js", level: 85, icon: Code },
    { name: "Node.js/Express", level: 80, icon: Database },
    { name: "HTML5/CSS", level: 95, icon: Code },
    { name: "Tailwind CSS", level: 90, icon: Code },
  ];

  const dataAnalystSkills = [
    { name: "Python (Pandas/Numpy)", level: 90, icon: Database },
    { name: "SQL / PostgreSQL", level: 85, icon: Database },
    { name: "Data Visualization (Matplotlib)", level: 88, icon: BarChart },
    { name: "Machine Learning (Scikit-learn)", level: 80, icon: Layers },
    { name: "Power BI / Tableau", level: 75, icon: PieChart },
  ];

  const softSkills = [
    { name: "Team Leadership", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Problem Solving", icon: Target },
    { name: "Adaptability", icon: Zap },
  ];

  return (
    <section ref={ref} id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          />
        </div>

        {/* Three-column horizontal layout */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
          
          {/* Technical Skills */}
          <motion.div className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary/10 p-2 rounded-lg mr-4">
                            <IconComponent className="text-primary" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-card-foreground">{skill.name}</span>
                              <span className="text-primary font-medium">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Data Analyst Skills */}
          <motion.div className="flex-1"
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Data Analyst Skills
            </h3>
            <div className="space-y-6">
              {dataAnalystSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary/10 p-2 rounded-lg mr-4">
                            <IconComponent className="text-primary" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-card-foreground">{skill.name}</span>
                              <span className="text-primary font-medium">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills + Always Learning */}
          <motion.div className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}          
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card">
                      <CardContent className="p-6 text-center">
                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <IconComponent className="text-primary" size={28} />
                        </div>
                        <h4 className="font-medium text-card-foreground">{skill.name}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="border-0 shadow-md bg-primary/5">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-card-foreground mb-2">Always Learning</h4>
                  <p className="text-muted-foreground">
                    I'm constantly exploring new technologies and methodologies 
                    to stay current with industry trends and best practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
