import { motion } from "framer-motion"

const skillCategories = [
    {
        title: "Development",
        skills: ["JavaScript", "TypeScript", "React", "Angular", "Next.js", "Remix", "Java", "Spring Boot", "Dropwizard"]
    },
    {
        title: "Infrastructure & CI/CD",
        skills: ["Docker", "Kubernetes", "Jenkins CI/CD", "Ansible", "RESTful APIs", "Websocket APIs"]
    },
    {
        title: "Database & Tools",
        skills: ["PostgreSQL", "Drizzle ORM", "Supabase", "Clerk", "Jira", "Confluence"]
    },
    {
        title: "AI & Productivity",
        skills: ["LLM Integration", "Antigravity AI Agents", "Workflow Automation"]
    }
]

export default function Skills() {
    return (
        <section className="mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 flex flex-col items-start leading-[0.85]">
                    <span className="text-foreground">Technical</span>
                    <span className="text-muted-foreground/30 mt-2">Skills</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-secondary/30 rounded-3xl p-8 border border-border/50"
                        >
                            <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
