import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useState, useEffect } from "react"

const projects = [
    {
        title: "TreeCanopy.US",
        description: "Developed an application to explore urban forests and visualize tree canopy changes nationwide. Allows users to interactively analyze geospatial map data.",
        link: "https://treecanopy.us",
        github: null,
        tags: ["React", "Geospatial", "Maps", "Next.js"],
        images: ["/treecanopy_01.png", "/treecanopy_02.png", "/treecanopy_03.png"]
    },
    {
        title: "TraderTrade",
        description: "Trade journal for trader and investors",
        link: "https://tradertrade.pages.dev/",
        github: null,
        tags: ["React", "Tailwind CSS", "Frontend", "Vite"],
        images: ["/tradertrade_01.png", "/tradertrade_02.png", "/tradertrade_03.png"]
    },
    {
        title: "MapWiki",
        description: "Exploring cities with an interactive map",
        link: "https://mapwiki.pages.dev/",
        github: null,
        tags: ["React", "OpenLayers", "MapTiler"],
        images: ["/mapwiki_01.png"]
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

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        if (!project.images || project.images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % project.images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [project.images])

    const targetLink = project.link || project.github || "#"

    return (
        <motion.a
            href={targetLink}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block rounded-[2rem] border border-border bg-card overflow-hidden relative min-h-[400px] md:min-h-[500px] hover:border-primary/50 transition-all dark:hover:shadow-2xl cursor-pointer"
        >
            {/* Background / Image Carousel */}
            {project.images && project.images.length > 0 ? (
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentImage}
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img src={project.images[currentImage]} alt={`${project.title} screenshot ${currentImage + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        {/* Overlay gradient so text is readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
                    </motion.div>
                </AnimatePresence>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
            )}

            {/* Content pinned to bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col">
                <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-white/80 mb-6 max-w-3xl">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/10 text-xs font-medium rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-2">
                    {project.link && (
                        <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                            <ExternalLink className="w-4 h-4" /> Visit Site
                        </span>
                    )}
                    {project.github && (
                        <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                            <Github className="w-4 h-4" /> Source Code
                        </span>
                    )}
                </div>
            </div>
        </motion.a>
    )
}
