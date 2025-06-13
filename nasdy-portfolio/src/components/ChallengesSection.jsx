import { BookImage, Briefcase, CloudSun, Code, Sprout, User } from "lucide-react";


export const ChallengesSection = () => {
    return (
    <section id="challenges" className="py-24 px-4 relative">
        <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Challenges</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        As a young adult in my 20's
                    </h3>
                    
                    <p className="text-muted-foreground">
                        I have experience challenges in life that made me realize to live in the moment and these are the quotes I live by.                    </p>

                    
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <BookImage className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">William Shakespeare</h4>
                                <p className="text-muted-foreground">"We know what we are, but know not what we may be."</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Sprout className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Eric Butterworth</h4>
                                <p className="text-muted-foreground">"Don't go through life, grow through life."</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <CloudSun className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Nelson Mandela</h4>
                                <p className="text-muted-foreground">"It always seems impossible undtl it's done."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};