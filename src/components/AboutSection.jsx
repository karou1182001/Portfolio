import { Code, User, Briefcase } from "lucide-react";

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
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving
              web landscape.
            </p>

            {/* Calls to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
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
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Developer</h4>
                  <p className="text-muted-foreground">
                    Create responsive websites and ship performant, modern UIs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: UI/UX Design */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Design accessible interfaces with thoughtful interactions.
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
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Plan, prioritize, and deliver features end-to-end.
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
