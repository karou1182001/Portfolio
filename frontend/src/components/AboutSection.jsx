import { Code, User, Briefcase } from "lucide-react";
import { VideoCarousel } from "./VideoCarousel";

// -----------------------------------------------------------------------------
// AboutSection
// -----------------------------------------------------------------------------
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* ======================
          Container & Section Title
      ====================== */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Video Carousel */}
       <div className="mb-5">
         <VideoCarousel/>
       </div>

       {/* Visual divisor */}
       <div className="relative mb-5">
         <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
         <span
           className="absolute left-1/2 -translate-x-1/2 -top-3 
                     text-xs px-4 py-1 rounded-full bg-background 
                     text-foreground/70 border border-foreground/10 shadow-sm"
         >
           
         </span>
       </div>

        {/* ======================
            Two-Column Grid
            (1 col on mobile → 2 cols on md+)
        ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ======================
              Left Column — Bio & CTAs
          ====================== */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI Software Engineer and Speaker
            </h3>

            <p className="text-muted-foreground">
            Awarded <span className="text-primary font-semibold">Best Engineering Graduate in Colombia (2023)</span>.<br/>
            <strong> Triple major</strong> with <strong>dual Summa Cum Laude honors</strong>, experienced building end-to-end mobile apps for companies, 
            and <strong>AI full-stack development</strong> at <span className="bg-purple-300 text-black px-1">Apple</span>.  
          </p>

            <p className="text-muted-foreground">
              I love solving problems that bring real change.  
              Outside coding, <br/>you’ll find me speaking on stage… or dancing to Latin music. 
            </p>

            {/* Calls to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1fels8-CGZu24GBybyqlD66cvF6diNC27/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ======================
              Right Column — Feature Cards
          ====================== */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card: Web Developer */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Engineer</h4>
                  <p className="text-muted-foreground">
                    Build AI systems that automate tasks and solve real problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: UI/UX Design */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    From backend to modern UIs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Public Speaking</h4>
                  <p className="text-muted-foreground">
                    Share my story to inspire others to chase their dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Container */}
    </section>
  );
};
