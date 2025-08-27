import { Mail, MapPin, Phone, Linkedin, Instagram, Send } from "lucide-react"; 
// Importing icons from Lucide React (mail, map, phone, social, send)
import { cn } from '@/lib/utils'; 
// Utility function (likely merges conditional class names)
import { useState } from "react";
// React hook to manage component state
import emailjs from "@emailjs/browser";

//const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const ContactSection = () => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({});
    const formInitialDetails = {
    name: "",
    email: "",
    message: "",
   }
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

    // Handle form submission
    const handleSubmit =  async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setStatus({ success: null, message: "" });

        
        try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, { publicKey: PUBLIC_KEY });
            setStatus({ success: true, message: "Message sent successfully." });
            setFormDetails(formInitialDetails);
            e.currentTarget.reset(); 
        } catch (err) {
        setStatus({
            success: false,
            message: result?.status || "Something went wrong, please try again later.",
        });
        } finally {
            setIsSubmitting(false);
        }



        // try {
        // const res = await fetch(`${API_URL}/contact`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formDetails),
        // });

        // const result = await res.json().catch(() => ({}));

        // if (res.ok && result.code === 200) {
        //     setStatus({ success: true, message: "Message sent successfully" });
        //     setFormDetails(formInitialDetails); // reset only on success
        // } else {
        //     setStatus({
        //     success: false,
        //     message: result?.status || "Something went wrong, please try again later.",
        //     });
        // }
        // } catch {
        // setStatus({
        //     success: false,
        //     message: "Network error. Please check your connection and try again.",
        // });
        // } finally {
        // setIsSubmitting(false);
        // }
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
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                        {/* Form */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            
                            {/* Name field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formDetails.name}
                                    onChange={(e) => onFormUpdate('name', e.target.value)}
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="John..."
                                />
                            </div>

                            {/* Email field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formDetails.email}
                                    onChange={(e) => onFormUpdate('email', e.target.value)} 
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
                                    value={formDetails.message}
                                    onChange={(e) => onFormUpdate('message', e.target.value)}
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
                        {/* Feedback message */}
                        {status.message && (
                            <p
                            className={`mt-4 text-sm ${
                                status.success ? "text-green-600" : "text-red-600"
                            }`}
                            >
                            {status.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
