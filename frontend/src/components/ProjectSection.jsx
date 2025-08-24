import { ExternalLink, Github, ArrowRight} from "lucide-react";

// -----------------------------------------------------------------------------
// Projects Data
// -----------------------------------------------------------------------------
const projects = [
    {
        id:1,
        title: "Saas landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project1.png",
        tags:["React", "TailwindCSS", "Supabase"],
        demoURL: "#",
        githubURL: "#",
    },
    {
        id:2,
        title: "Saas landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project2.png",
        tags:["React", "TailwindCSS", "Supabase"],
        demoURL: "#",
        githubURL: "#",
    },
    {
        id:3,
        title: "Saas landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project3.png",
        tags:["React", "TailwindCSS", "Supabase"],
        demoURL: "#",
        githubURL: "#",
    }
]

// -----------------------------------------------------------------------------
// ProjectSection Component
// -----------------------------------------------------------------------------
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            {/* ----------------------
                Section Heading
            ---------------------- */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary">Projects</span>
            </h2>

            {/* Short description under the title */}
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project special
            </p>

            {/* ----------------------
                Projects Grid
                (1 col on mobile → 2/3 cols on larger screens)
            ---------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    // Single project card
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                        {/* Project cover image with subtle zoom on hover */}
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        {/* Card content: tags, title, description, links */}
                        <div className="p-6">
                            {/* ----- Tech Tags ----- */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            {/* ----- Project Title ----- */}
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            {/* ----- Project Description ----- */}
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            {/* ----- External Links (demo + repo) ----- */}
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                    <a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ----------------------
                CTA: View more projects on GitHub
            ---------------------- */}
            <div className="text-center mt-12 ">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/karou1182001">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};
