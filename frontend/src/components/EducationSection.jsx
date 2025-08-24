import { Book, GraduationCap } from "lucide-react";

// -----------------------------------------------------------------------------
// EducationSection
// -----------------------------------------------------------------------------
export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      {/* ======================
          Container & Section Title
      ====================== */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>
        <div className="grid grid-cols-1 gap-6">

          {/* Card: M.Sc. Computer Science */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  M.Sc. Computer Science, focus on AI
                </h4>
                <p className="text-muted-foreground">
                  University of South Florida (USF) · <em>Expected May 2026</em>
                </p>
              </div>
            </div>
          </div>

          {/* Card: B.Sc. Computer Science */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">B.Sc. Computer Science</h4>
                <p className="text-muted-foreground">
                  University of South Florida (USF) · <em>International Student Scholarship</em>
                </p>
              </div>
            </div>
          </div>

          {/* Card: B.S. Pure Math & Software Eng. */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  B.S. in Pure Mathematics
                </h4>
                <p className="text-muted-foreground">
                  Universidad del Norte · <span className="text-primary font-semibold">Summa Cum Laude</span> · GPA: 4.68/5.0
                </p>
              </div>
            </div>
          </div>

          {/* Card: B.S. Pure Math & Software Eng. */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  B.S. Software Engineering
                </h4>
                <p className="text-muted-foreground">
                  Universidad del Norte · <span className="text-primary font-semibold">Summa Cum Laude</span> · GPA: 4.68/5.0
                </p>
              </div>
            </div>
          </div>

        </div>
        {/* End Grid */}
      </div>
      {/* End Container */}
    </section>
  );
};
