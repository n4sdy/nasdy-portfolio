import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com';
import { useRef } from "react";

export const ContactSection = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_z7quc76',       // ✅ Your actual EmailJS service ID
            'template_pn5ddkt',      // ✅ Your actual EmailJS template ID
            formRef.current,
            'kd1rzbS7PYCIjS7l3'      // ✅ Your actual EmailJS public key
        )
        .then(() => {
            alert("Message sent successfully!");
            formRef.current.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to send message. Please try again.");
        });
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12">
                    Feel free to reach me out cuh
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact info</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:jaidecena8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        jaidecena8@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+639097069804" className="text-muted-foreground hover:text-primary transition-colors">
                                        +63 909 706 9804
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors">
                                        Bacoor City, Cavite Philippines
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.facebook.com/nairus.decena.7" target="_blank" rel="noreferrer"><Facebook /></a>
                                <a href="https://www.instagram.com/nas.dyyy/" target="_blank" rel="noreferrer"><Instagram /></a>
                                <a href="#" target="_blank" rel="noreferrer"><Twitter /></a>
                                <a href="#" target="_blank" rel="noreferrer"><Linkedin /></a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Type your message here"
                                />
                            </div>

                            <button type="submit" className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}>
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
