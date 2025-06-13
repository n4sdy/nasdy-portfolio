import { Briefcase, BriefcaseBusiness, Code, DollarSign, User, Workflow } from "lucide-react";


export const FuturePlansSection = () => {
    return (
    <section id="future-plans" className="py-24 px-4 relative">
        <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Future <span className="text-primary"> Plans</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Plans after I graduate
                    </h3>
                    <p className="text-muted-foreground">
                        These are my initial plans if I will graduate on this course.
                    </p>
                    

                    
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Workflow className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Work for money</h4>
                                <p className="text-muted-foreground">After I graduate, I plan to explore on different industries and at the same have a savings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Invest to my self</h4>
                                <p className="text-muted-foreground">Taking care for my self would be my priority first and then gain more knowledge on how will I gain more income.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <DollarSign className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Make money work for me</h4>
                                <p className="text-muted-foreground">Assets + investments = financially free</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
    );
};