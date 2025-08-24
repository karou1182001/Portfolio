import appleLogo from "../assets/apple_logo.png";
import advocateLogo from "../assets/advocate.jpg"
import { User } from "lucide-react";

// -----------------------------------------------------------------------------
// WorkSection
// -----------------------------------------------------------------------------
export const WorkSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* ======================
          Container & Section Title
      ====================== */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           Work<span className="text-primary"> Experience</span>
        </h2>
        <div className="items-center">
        
        <div className="grid grid-cols-1 gap-6">
        {/* Card: Apple Internship */}
            <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="flex items-start gap-4">
                <div className="shrink-0 aspect-square size-12 sm:size-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img
                    src={appleLogo}
                    alt="Apple Logo"
                    className="max-w-full max-h-full object-contain"
                />
                </div>

                <div className="text-left">
                    <h4 className="font-semibold text-lg">Apple - Full Stack AI Intern</h4>
                    {/* <p className="text-sm text-muted-foreground">Summer 2025</p> */}
                    
                    <ul className="text-muted-foreground list-disc pl-5 space-y-2 mt-3">
                    <li>
                        Built a <strong>multi-agent AI system</strong> to automate predictions 
                        and decision-making workflows for AppleCare.
                    </li>
                    <li>
                        Applied <span className="text-primary font-semibold">LLMs</span>, <span className="text-primary font-semibold">Prompt Engineering</span>, <span className="text-primary font-semibold">Light RAG</span>, and <span className="text-primary font-semibold">Snowflake SQL</span> to process and analyze internal data.
                    </li>
                    <li>
                        Developed a <strong>full-stack web application</strong> with <span className="text-primary font-semibold">Flask</span>, <span className="text-primary font-semibold">ReactJS</span>, and <span className="text-primary font-semibold">Axios</span> to enable teams to interact with the AI agents.
                    </li>
                    <li>
                        <strong>Reduced a 2-week manual process to just 10 minutes</strong>, 
                        significantly improving efficiency and decision speed.
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            {/* Card: Advocate Health Advisors */}
            <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="flex items-start gap-4">
                <div className="shrink-0 aspect-square size-12 sm:size-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img
                    src={advocateLogo}
                    alt="Advocate Logo"
                    className="max-w-full max-h-full object-contain"
                />
                </div>


                <div className="text-left">
                    <h4 className="font-semibold text-lg">Advocate Health Advisors - Full Stack Developer</h4>
                    {/* <p className="text-sm text-muted-foreground">Aug 2023 – Jul 2024</p> */}
                    
                    <ul className="text-muted-foreground list-disc pl-5 space-y-2 mt-3">
                    <li>
                        <strong>Led, designed, and developed</strong> the company’s mobile app using <span className="text-primary font-semibold">Flutter</span>, improving accessibility and boosting <strong>user engagement by 30%</strong>.
                    </li>
                    <li>
                        Maintained and enhanced <strong>full-stack web applications</strong> with <span className="text-primary font-semibold">.NET C#</span> (backend) and <span className="text-primary font-semibold">React/JavaScript</span> (frontend), delivering <strong>responsive and scalable solutions</strong>.
                    </li>
                    </ul>
                </div>
                </div>
            </div>
          </div>
          {/* End Column */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Container */}
    </section>
  );
};
