import { Briefcase, Cake, Code, User } from "lucide-react";
import CV from '../assets/CV (2).pdf';

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        3rd Year Computer Science Student
                    </h3>
                    <p className="text-muted-foreground">
                        I am a 3rd year Computer Science student at Cavite State University Bacoor-Campus, taking a risk in life to try to change my future.
                    </p>
                    

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a href={CV} download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            View My Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Cake className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Info
                                </h4>
                                <p className="text-muted-foreground">I'll be 22 years old on August.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Family</h4>
                                <p className="text-muted-foreground">We are five in the family and I am the youngest among my three siblings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Birthplace</h4>
                                <p className="text-muted-foreground">I was born in San Pablo City, Laguna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};