import { Mail, MapPin, Phone, Linkedin, Instagram, Send } from "lucide-react"; 
// Importing icons from Lucide React (mail, map, phone, social, send)

import { cn } from '@/lib/utils'; 
// Utility function (likely merges conditional class names)

import { useState } from "react";
// React hook to manage component state


// ==========================
// Contact Section Component
// ==========================
export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // --------------------------
    // Handle form submission
    // --------------------------
    const handleSubmit = (e) => {
        e.preventDefault();          // Prevents page reload
        setIsSubmitting(true);       // Shows "sending..." state
        
        // Simulated async action (like sending to server)
        setTimeout(() => {
            console.log("Envia");    // Logs a message in console
            setIsSubmitting(false);  // Resets submit button state
        }, 1500);
    };

    return (
        // ==========================
        // Section Wrapper
        // ==========================
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                {/* Subtitle / Intro Text */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>


                {/* ==========================
                    Grid Layout: Left (contact info) | Right (form)
                ========================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* --------------------------
                        Left Column: Contact Info
                    -------------------------- */}
                    <div className="space-y-8">
                        
                        {/* Email block */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium">mariazapatamontano@gmail.com</h4>
                                <a href="mailto:mariazapatamontano@gmail.com" 
                                   className="text-muted-foreground hover:text-primary transition-colors">
                                    Send an email
                                </a>
                            </div>
                        </div>

                        {/* Phone block */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium">+1 (656) 212-9497</h4>
                                <a href="tel:+16562129497" 
                                   className="text-muted-foreground hover:text-primary transition-colors">
                                   Text
                                </a>
                            </div>
                        </div>
                
                        {/* Location block */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    United States
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/mariazapatam/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/mariaz_vlog/" target="_blank">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* --------------------------
                        Right Column: Contact Form
                    -------------------------- */}
                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                        {/* Form */}
                        <form className="space-y-6">
                            
                            {/* Name field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Maria Zapata..."
                                />
                            </div>

                            {/* Email field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="john@gmail.com"
                                />
                            </div>

                            {/* Message field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            {/* Submit button */}
                            <button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/> 
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
