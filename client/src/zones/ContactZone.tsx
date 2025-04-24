import { useState } from "react";
import { motion } from "framer-motion";
import Portal from "@/components/ui/portal";
import DialogBox from "@/components/ui/dialog-box";
import PixelButton from "@/components/ui/pixel-button";
import { useGameStore } from "@/store/gameStore";
import { useToast } from "@/hooks/use-toast";

const ContactZone = () => {
  const { setCurrentZone } = useGameStore();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally send the form data to a server
    console.log("Form data submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll respond as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download",
      description: "Resume download initiated!",
    });
    
    // Create a link element and trigger download for the resume
    const link = document.createElement('a');
    // Path is relative to the attached_assets folder
    link.href = '/attached_assets/christopher_joshy_resume.pdf';
    link.download = 'Christopher_Joshy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      id="contact" 
      className="zone min-h-screen p-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-medieval-auto z-0">
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="font-pixel text-lg md:text-2xl text-highlight text-center mb-8">PORTAL ROOM</h1>
        <p className="font-pixel-secondary text-sm md:text-base text-center mb-12">Connect with me through these magical gateways...</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* GitHub Portal */}
          <Portal 
            title="GITHUB"
            icon="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"
            href="https://github.com/ChristopherJoshy"
          />
          
          {/* LinkedIn Portal */}
          <Portal 
            title="LINKEDIN"
            icon="https://cdn.iconscout.com/icon/free/png-256/linkedin-160-461814.png"
            href="https://www.linkedin.com/in/christopher-joshy-272a77290/"
          />
          
          {/* Gmail Portal */}
          <Portal 
            title="GMAIL"
            icon="https://cdn.iconscout.com/icon/free/png-256/gmail-30-722694.png"
            href="mailto:christopherjoshy4@gmail.com"
          />
          
          {/* Instagram Portal */}
          <Portal 
            title="INSTAGRAM"
            icon="https://cdn.iconscout.com/icon/free/png-256/instagram-1868978-1583142.png"
            href="https://instagram.com/calculatederror"
          />
          
          {/* Resume Portal */}
          <Portal 
            title="RESUME"
            icon="https://cdn.iconscout.com/icon/free/png-256/resume-1956282-1650445.png"
            href="#"
            onClick={handleResumeDownload}
          />
        </div>
        
        {/* Contact Form */}
        <div className="mt-16">
          <DialogBox className="max-w-lg mx-auto">
            <h2 className="font-pixel text-sm text-highlight mb-6 text-center">SEND A MESSAGE</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-pixel text-xs mb-2">YOUR NAME</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-primary border-2 border-highlight px-3 py-2 font-pixel-secondary text-text text-sm" 
                  placeholder="Enter your name..."
                  required
                />
              </div>
              
              <div>
                <label className="block font-pixel text-xs mb-2">YOUR EMAIL</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-primary border-2 border-highlight px-3 py-2 font-pixel-secondary text-text text-sm" 
                  placeholder="Enter your email..."
                  required
                />
              </div>
              
              <div>
                <label className="block font-pixel text-xs mb-2">MESSAGE</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-primary border-2 border-highlight px-3 py-2 font-pixel-secondary text-text text-sm h-24" 
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <PixelButton type="submit" variant="accent">SEND</PixelButton>
              </div>
            </form>
          </DialogBox>
        </div>
        
        <div className="flex justify-center mt-12">
          <PixelButton onClick={() => setCurrentZone('home')}>
            RETURN TO HOME
          </PixelButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactZone;
