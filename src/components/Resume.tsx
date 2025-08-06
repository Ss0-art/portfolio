
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  const downloadResume = () => {
    // This would trigger the resume download
    console.log("Download resume");
  };

  const previewResume = () => {
    // This would open resume preview
    console.log("Preview resume");
  };

  const resumeHighlights = [
    "Full Stack Developer with React.js & Node.js expertise",
    "B.C.A. Graduate with 9.42 CGPA",
    "Proficient in MongoDB, Express.js, and modern web technologies",
    "Experience with real-time project development",
    "Strong problem-solving and communication skills",
    "Winner of Digital Bano Competition",
    "Certified in advanced web development technologies"
  ];

  return (
    <section id="resume" className="py-20">
      

        <div className="max-w-4xl mx-auto">
  
              <div>

               

             
      
            </div>
        
        </div>
    </section>
  );
};

export default Resume;