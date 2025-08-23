import { ArrowDown } from "lucide-react";
import headerImg from "../assets/memoji.png";

// ==========================
// Hero Section Component
// ==========================
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* ======================
          Main Container
      ====================== */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          
          {/* ======================
              Hero Image
          ====================== */}
          <div className="flex justify-center pt-8">
          <img
            src={headerImg}
            alt="Hero"
            className="w-50 md:w-80 animate-float"
          />
          </div>
          {/* ======================
              Hero Title (Animated)
          ====================== */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "} Maria
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "} Zapata
            </span>
          </h1>

          {/* ======================
              Subtitle / Tagline
          ====================== */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I do bla bla bla
          </p>
           
          {/* ======================
              Call To Action (Button)
          ====================== */}
          

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1qv52-4alrlE5rWVqfK2pEp_HV2PLEcCg/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                My Resume
              </a>
            </div>

          
        </div>
      </div>

      {/* ======================
          Scroll Indicator
      ====================== */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
