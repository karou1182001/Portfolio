import { Newspaper, ArrowRight } from "lucide-react";
import { VideoCarousel } from "./VideoCarousel";

// -----------------------------------------------------------------------------
// News Data
// -----------------------------------------------------------------------------
const newsItems = [
  {
    id: 1,
    title: "From Colombia to USF to Apple: One Student's Journey",
    description: "USF highlights my path from Colombia to Apple, featuring my journey, awards, and internship as a full-stack AI developer at Apple.",
    image: "/news/appleIntern.png",
    link: "https://www.usf.edu/ai-cybersecurity-computing/news/2025/maria-zapata-mscs-student.aspx"
  },
  {
    id: 2,
    title: "Best engineering graduate in Colombia 2023!",
    description: "USF featured my recognition as the Best engineering graduate in Colombia 2023 by the Colombian Society of Engineers.",
    image: "/news/linoPomboAward.png",  
    link: "https://www.usf.edu/engineering/news/2024/cse/maria.aspx"
  },
  {
    id: 3,
    title: "Triple Major — x2 Summa Cum Laude Student",
    description: "Featured by Universidad del Norte for completing three degrees: Summa Cum Laude in Software Engineering and Mathematics in Colombia, plus a Computer Science degree in the United States.",
    image: "/news/summaStudent.jpg",
    link: "https://www.uninorte.edu.co/web/grupo-prensa/w/sociedad-colombiana-de-ingenieros-premia-a-egresada-de-sistemas/13400067"
  },
  {
    id: 4,
    title: "Highlighted as a Student of Exceptional Talents by my High School",
    description: "El Heraldo featured students in a news article on exceptional talents, highlighting those recognized as prodigious by the high school IDPHU.",
    image: "/news/idphu.png",
    link: "https://www.elheraldo.co/tendencias/2017/11/06/la-educacion-para-talentos-excepcionales/"
  }
];
// -----------------------------------------------------------------------------
// AwardsSection Component
// -----------------------------------------------------------------------------
export const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Awards & <span className="text-primary">Recognition</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of highlights where my journey and projects have been featured in the press.
        </p>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Cover Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {news.description}
                </p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Newspaper size={18} className="mr-2" /> Read Article
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
