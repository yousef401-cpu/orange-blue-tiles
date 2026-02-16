import { Bath, ShowerHead, Layers, Hammer, Home, Wrench } from "lucide-react";

const services = [
  { icon: Bath, title: "Full Bathroom Renovations", desc: "Complete bathroom remodels from start to finish, including plumbing, tiling, and fixtures." },
  { icon: ShowerHead, title: "Shower & Tub Installation", desc: "Professional shower and tub installations with waterproof tiling solutions." },
  { icon: Layers, title: "Ceramic & Porcelain Tiling", desc: "Expert installation of ceramic and porcelain tiles for walls and floors." },
  { icon: Home, title: "Flooring Installation", desc: "Hardwood, vinyl, and tile flooring installed with precision and care." },
  { icon: Hammer, title: "Vanity Installation", desc: "Custom vanity installations to upgrade your bathroom's look and function." },
  { icon: Wrench, title: "General Home Repairs", desc: "Reliable home repair services to keep your space in top shape." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-6xl text-foreground mt-2">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl text-card-foreground mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}>
                {title}
              </h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
