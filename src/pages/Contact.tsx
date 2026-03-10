import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("submitting")

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "53dc8722-79f6-4763-b584-8d380ad8a6d7");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                toast.success("Message sent successfully!", { description: "I will get back to you soon." });
                e.currentTarget.reset();
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                console.error("Error submitting form", data);
                toast.error("Failed to send message.", { description: "Please try again later." });
                setStatus("idle");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            toast.error("Failed to send message.", { description: "Please check your connection and try again." });
            setStatus("idle");
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 xl:mt-0 max-w-2xl"
        >
            <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Contact Me</h2>
                <p className="text-muted-foreground text-lg max-w-[500px]">
                    Got a question or proposal, or just want to say hello? Go ahead.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Your Name</label>
                        <Input id="name" name="name" required placeholder="John Doe" className="bg-secondary/30 border-border/50 h-14 rounded-2xl px-6 focus-visible:ring-primary/20 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                        <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-secondary/30 border-border/50 h-14 rounded-2xl px-6 focus-visible:ring-primary/20 transition-all font-medium" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                    <Input id="subject" name="subject" required placeholder="Project Inquiry" className="bg-secondary/30 border-border/50 h-14 rounded-2xl px-6 focus-visible:ring-primary/20 transition-all font-medium" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                    <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Hi Loc, I'd like to discuss..."
                        className="bg-secondary/30 border-border/50 min-h-[200px] rounded-3xl p-6 focus-visible:ring-primary/20 transition-all resize-none font-medium"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={status !== "idle"}
                    className="h-14 px-8 rounded-full font-bold uppercase tracking-wider w-full md:w-auto overflow-hidden relative group"
                >
                    <span className={`flex items-center gap-2 transition-transform duration-300 ${status === "submitting" ? "translate-y-[-150%]" : "translate-y-0"}`}>
                        {status === "success" ? (
                            <><CheckCircle2 className="w-5 h-5" /> Message Sent</>
                        ) : (
                            <><Send className="w-4 h-4" /> Send Message</>
                        )}
                    </span>
                    {status === "submitting" && (
                        <span className="absolute inset-0 flex items-center justify-center translate-y-0 text-primary-foreground">
                            Sending...
                        </span>
                    )}
                </Button>
            </form>
        </motion.div>
    )
}
