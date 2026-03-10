import { Outlet } from "react-router-dom"
import { Github, Linkedin, Mail, Home, Folder, Briefcase, Wrench, Edit } from "lucide-react"
import { ModeToggle } from "../mode-toggle"

export default function MainLayout() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (window.location.pathname !== '/') {
            window.location.href = `/#${id}`;
        }
    };

    return (
        <div className="min-h-screen text-foreground relative">
            {/* Global background glow effects */}
            <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-60" />
            </div>

            <div className="flex flex-col xl:flex-row p-4 md:p-8 lg:p-12 gap-8 lg:gap-16 w-[90%] max-w-[1400px] mx-auto pt-24 xl:pt-12 relative z-10">
                {/* Floating Navigation Bar */}
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-3 flex gap-6 items-center shadow-lg dark:shadow-none">
                    <button onClick={() => window.location.href = '/'} className="text-muted-foreground hover:text-primary transition-colors">
                        <Home className="w-5 h-5" />
                    </button>
                    <button onClick={() => scrollTo('experience')} className="text-muted-foreground hover:text-primary transition-colors">
                        <Briefcase className="w-5 h-5" />
                    </button>
                    <button onClick={() => scrollTo('skills')} className="text-muted-foreground hover:text-primary transition-colors">
                        <Wrench className="w-5 h-5" />
                    </button>
                    <button onClick={() => scrollTo('projects')} className="text-muted-foreground hover:text-primary transition-colors">
                        <Folder className="w-5 h-5" />
                    </button>
                    <button onClick={() => window.location.href = '/contact'} className="text-muted-foreground hover:text-primary transition-colors">
                        <Edit className="w-5 h-5" />
                    </button>
                </div>

                {/* Sticky Sidebar */}
                <aside className="w-full xl:w-[380px] shrink-0">
                    <div className="xl:sticky xl:top-12 bg-card border border-border/50 rounded-[2rem] p-8 flex flex-col items-center text-center dark:shadow-2xl relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0 pointer-events-none" />

                        <div className="absolute top-8 left-8 z-20">
                            <ModeToggle />
                        </div>

                        <div className="w-48 h-48 rounded-2xl overflow-hidden mb-6 bg-muted relative z-10 border border-border/50 mt-12 md:mt-0 dark:shadow-inner">
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-4xl font-bold text-primary/40">
                                LP
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight relative z-10">Loc Pham</h2>
                        <p className="text-muted-foreground mt-4 text-sm relative z-10 leading-relaxed font-medium">
                            Software engineer with seven years of experience in full-stack development and system architecture.
                        </p>

                        <div className="flex gap-4 mt-8 relative z-10">
                            <a href="mailto:gitloc2016@gmail.com" className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full text-secondary-foreground">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/pham93" target="_blank" rel="noreferrer" className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full text-secondary-foreground">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full text-secondary-foreground">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 pb-24">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
