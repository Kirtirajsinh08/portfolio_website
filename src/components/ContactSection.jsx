import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // EmailJS credentials (replace with your actual IDs)
  const SERVICE_ID = "service_qyp4oo9";
  const TEMPLATE_ID = "template_rpdtmsh";
  const PUBLIC_KEY = "3ZvLFnVVlcWmB8mVZ";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      })
      .catch(() => {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I welcome conversations that lead to possibilities— be it a career opportunity or a freelance collaboration, your message is always valued.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div className="space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 w-full max-w-md">
              {/* Email */}
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-3 rounded-full bg-primary/10 mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">
                      Email:{" "}
                      <a
                        href="mailto:kirtirajsinh0804@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors hover:cursor-pointer"
                      >
                        kirtirajsinh0804@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-3 rounded-full bg-primary/10 mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">
                      Location:{" "}
                      <span className="text-muted-foreground hover:text-primary transition-colors hover:cursor-pointer">
                        Surat, Gujarat, India
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-3 rounded-full bg-primary/10 mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">
                      Phone:{" "}
                      <a
                        href="tel:+917043343119"
                        className="text-muted-foreground hover:text-primary transition-colors hover:cursor-pointer"
                      >
                        +91 70433 43119
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-8 justify-center">
                <a
                  href="https://www.linkedin.com/in/kirtirajsinh-parmar-b264a3277/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="hover:text-primary hover:cursor-pointer" />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                  <Instagram className="hover:text-primary hover:cursor-pointer" />
                </a>
                <a
                  href="https://wa.me/917043343119"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="hover:text-primary hover:cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Message Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 hover:cursor-pointer hover:text-primary hover:bg-foreground/20 hover:border-3 hover:border-white"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
