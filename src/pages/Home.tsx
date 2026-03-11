import { motion } from "framer-motion"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
import { ArrowRight, Layers, Layout } from "lucide-react"

export default function Home() {
    return (
        <div className="space-y-32 mt-12 xl:mt-0">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.85] flex flex-col">
                    <span className="text-foreground">Software</span>
                    <span className="text-muted-foreground/20 -mt-1 md:-mt-4">Engineer</span>
                </h1>
                <p className="mt-8 text-sm md:text-base text-muted-foreground max-w-[450px] leading-relaxed">
                    Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-16 max-w-[600px]">
                    <div>
                        <div className="text-5xl md:text-6xl font-black text-foreground">+8</div>
                        <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-2">Years of<br />Experience</div>
                    </div>
                    <div>
                        <div className="text-5xl md:text-6xl font-black text-foreground">AI</div>
                        <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-2">Development<br />Integration</div>
                    </div>
                    <div>
                        <div className="text-5xl md:text-6xl font-black text-foreground">10+</div>
                        <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-2">Technologies<br />Mastered</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-12 max-w-[600px]">
                    <div className="bg-[#f06e38] rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                        <Layers className="w-6 h-6 text-white mb-16" />
                        <h3 className="text-white font-bold text-sm md:text-base leading-tight w-4/5 uppercase">Fullstack Development,<br />System Architecture</h3>
                        <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#f06e38] transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="bg-[#b0f545] rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10" />
                        <Layout className="w-6 h-6 text-black mb-16" />
                        <h3 className="text-black font-bold text-sm md:text-base leading-tight w-4/5 uppercase">React, Next.js,<br />Angular, Node.js</h3>
                        <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-black/30 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#b0f545] transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </motion.section>

            <div id="experience"><Experience /></div>
            <div id="skills"><Skills /></div>
            <div id="projects" className="pb-24"><Projects /></div>
        </div>
    )
}
