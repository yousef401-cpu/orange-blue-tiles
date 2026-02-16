import { Button } from "@/components/ui/button";
import { Phone, MapPin, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl text-section-dark-foreground mt-2 mb-6">
              Ready to Start<br />Your Project?
            </h2>
            <p className="text-section-dark-foreground/60 mb-10 max-w-md">
              Serving Hamilton, Ontario and surrounding areas. Contact us today for a free estimate — reliable, on-schedule service you can count on.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "+1 (905) 870-0038", href: "tel:+19058700038" },
                { icon: Facebook, label: "Find Us on Facebook", href: "https://www.facebook.com/" },
                { icon: MapPin, label: "Hamilton, Ontario, Canada" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href || "#"} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-section-dark-foreground/80 group-hover:text-primary transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg p-8">
            <h3 className="text-2xl text-card-foreground mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Free Estimate
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select Service</option>
                <option>Full Bathroom Renovation</option>
                <option>Shower/Tub Installation</option>
                <option>Ceramic & Porcelain Tiling</option>
                <option>Flooring (Hardwood/Vinyl)</option>
                <option>Vanity Installation</option>
                <option>General Home Repairs</option>
              </select>
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <Button variant="hero" size="lg" className="w-full">
                Request Estimate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
