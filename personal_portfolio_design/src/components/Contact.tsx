import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast("Please fill in all fields");
      return;
    }

    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    toast("Thank you for your message! I'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dexter.toby15@gmail.com",
      href: "mailto:dexter.toby15@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7349493484",
      href: "tel:+447349493484"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kristianstad, Sweden",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Tobejah",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/david-okeke-tobe/",
      color: "hover:text-blue-600"
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Get In Touch
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
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg bg-card">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-card-foreground">Send me a message</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or leave a hello"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-input-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-accent text-primary-foreground py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-lg bg-card">
              <CardHeader>
                <h3 className="text-2xl font-bold text-card-foreground">Contact Information</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href !== "#" ? (
                            <a 
                              href={info.href} 
                              className="text-card-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-card-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-card-foreground">Follow Me</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-secondary p-3 rounded-lg text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                          aria-label={social.label}
                        >
                          <IconComponent size={24} />
                        </a>
                      );
                    })}
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Let's connect and stay in touch through social media!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;