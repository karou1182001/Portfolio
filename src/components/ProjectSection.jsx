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

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project special
            </p>
        </div>
    </section>
};