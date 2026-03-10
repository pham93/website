import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "TreeCanopy.US",
        description: "Developed an application to explore urban forests and visualize tree canopy changes nationwide. Allows users to interactively analyze geospatial map data.",
        link: "https://treecanopy.us",
        github: null,
        tags: ["React", "Geospatial", "Maps", "Next.js"]
    },
    {
        title: "Yanta (Yet Another NoteTaking App)",
        description: "Built a note-taking application similar to Notion with integrated AI LLM features to assist in productivity and organization.",
        link: null,
        github: "https://github.com/pham93/Yanta",
        tags: ["AI", "LLM", "React", "Fullstack"]
    }
]

export default function Projects() {
    return (
        <section className="mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 flex flex-col items-start leading-[0.85]">
                    <span className="text-foreground">Recent</span>
                    <span className="text-muted-foreground/30 mt-2">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-[2rem] border border-border bg-card p-8 flex flex-col hover:border-primary/50 transition-all dark:hover:shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />

                            <h3 className="text-2xl font-bold mb-3 relative z-10">{project.title}</h3>
                            <p className="text-muted-foreground flex-1 mb-8 relative z-10">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto relative z-10">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                                        <Github className="w-4 h-4" /> Source Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
