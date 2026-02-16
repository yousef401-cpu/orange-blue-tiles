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

          <div className="bg-card rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <Phone className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-3xl text-card-foreground mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Call for a Free Estimate
            </h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Speak directly with us about your project. We'll provide a free, no-obligation estimate.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+19058700038">
                Call (905) 870-0038
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
