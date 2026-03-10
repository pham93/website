import { motion } from "framer-motion"

const experiences = [
    {
        role: "Freelancer",
        company: "Self-Employed",
        period: "July 2024 - Present",
        description: "Built full-stack web applications using Next.js and Remix for high-performance user experiences. Developed interactive single-page applications using React, OpenLayers, and geospatial map data. Implemented modern database and authentication solutions using Supabase, Drizzle ORM, and Clerk."
    },
    {
        role: "Principal Software Engineer",
        company: "Northrop Grumman",
        period: "July 2022 - July 2024",
        description: "Led frontend technical strategy for critical enterprise applications, influencing architectural decisions that improved application performance. Mentored junior developers, standardizing coding practices across the team to reduce code review times and improve delivery speed. Managed the software development lifecycle for key projects, ensuring all milestones were met on schedule while maintaining system stability."
    },
    {
        role: "Software Engineer",
        company: "Northrop Grumman",
        period: "July 2019 - July 2022",
        description: "Developed full-stack features using Angular and React, successfully modernizing interface components to improve user load times. Deployed microservices using Docker and Kubernetes, increasing system reliability and allowing the team to scale services during peak usage. Automated manual deployment workflows using Ansible and Jenkins, which reduced the frequency of deployment errors and cut manual release time. Designed system architecture and maintained technical documentation, serving as the primary resource for team troubleshooting."
    },
    {
        role: "Associate Software Engineer",
        company: "Northrop Grumman",
        period: "July 2017 - July 2019",
        description: "Worked in an Agile environment using Atlassian tools (Jira/Confluence) to manage sprint planning and track progress. Supported backend services and frontend interfaces, helping to improve the integration process between system components. Maintained Jenkins CI/CD pipelines, which stabilized the development environment and reduced build failures for the team."
    }
]

export default function Experience() {
    return (
        <section className="mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 flex flex-col items-start leading-[0.85]">
                    <span className="text-primary">8 Years Of</span>
                    <span className="text-muted-foreground/30 mt-2">Experience</span>
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted-foreground/20 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:shadow" />
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-colors">
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <div className="text-primary font-medium">{exp.company}</div>
                                    <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-primary/50" />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
