import { ExternalLink, Github, ArrowRight, Newspaper } from "lucide-react";

// -----------------------------------------------------------------------------
// Projects Data
// -----------------------------------------------------------------------------
const projects = [
   {
        id:1,
        title: "AR Museum",
        description: "AR museum app built in Unity 🏛️. Point your device at exhibits and unlock immersive 3D experiences.",
        image: "/projects/ARProject.png",
        tags:["Unity", "Augmented Reality"],
        demoURL: "https://youtu.be/hCuxN-WTXbs?si=ihDmxhcP4N2zKgA1",
        githubURL: "https://github.com/karou1182001/ARFinalProject/tree/main",
        newsURL: "" // no official press article published
    },
    {
        id:2,
        title: "Real Scale Smart House",
        description: "🏆 1st place project: a smart house controlled by an Android app via Bluetooth, designed to help people with disabilities.",
        image: "/projects/smartHouseProject.png",
        tags:["Android", "Arduino", "Bluetooth", "IoT"],
        demoURL: "https://photos.app.goo.gl/eXB8vRWF8BHjzudk6",
        githubURL: "https://github.com/karou1182001/SmartHouse/blob/main/README.md",
        newsURL: "https://www.uninorte.edu.co/web/grupo-prensa/w/los-proyectos-galardonados-de-la-septima-edicion-de-geo-expo-fisica"
    },
    {
        id:3,
        title: "OttoGame",
        description: "Built in 48h for Global Game Jam 2020 🎮. Play as Otto, a small robot surviving an intergalactic war—so good the crowd chanted its name!",
        image: "/projects/ottoProject.png",
        tags:["Unity", "Global Game Jam", "Teamwork"],
        demoURL: "https://photos.app.goo.gl/9gDtSi2dUGKawbtR8",
        githubURL: "https://github.com/karou1182001/OttoGame",
        newsURL: "https://www.atlantico.gov.co/index.php/noticias/prensa-tic/12876-seguiremos-impulsando-a-los-jovenes-y-la-a-industria-de-videojuegos-en-el-atlantico-elsa-noguera"
    },
    {
        id:4,
        title: "RU? – Social App",
        description: "📱 Flutter + Firebase mobile app that helps university students discover events, connect with peers",
        image: "/projects/ruproject.png",
        tags:["Flutter", "Firebase", "Google Maps API", "Full-Stack"],
        demoURL: "https://drive.google.com/file/d/1Yw07hLMWMkX7oZCyzF6mkarDHmg58CbK/view?usp=sharing",
        githubURL: "https://github.com/karou1182001/AppMovilRU",
        newsURL: "" 
    },
    {
        id:5,
        title: "Disney Akinator Desktop App",
        description: "🎮 Java desktop app that guesses Disney characters using a decision tree",
        image: "/projects/disneyAkinatorProject.png",
        tags:["Java", "Decision Trees", "Desktop App"],
        demoURL: "https://photos.app.goo.gl/pGSW7v1cFkZDdY9w5",
        githubURL: "https://github.com/karou1182001/disneyAkinator",
        newsURL: "" 
    }


]


// -----------------------------------------------------------------------------
// ProjectSection Component
// -----------------------------------------------------------------------------
export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"></p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                            {/* Cover Image */}
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                {/* Links */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoURL} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                        <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                                        {project.newsURL && (
                                            <a href={project.newsURL} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Newspaper size={20}/></a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12 ">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/karou1182001">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};
