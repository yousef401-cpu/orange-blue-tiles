import { Bath, ChefHat, Layers, Hammer, Paintbrush, Ruler } from "lucide-react";

const services = [
  { icon: Bath, title: "Bathroom Tiling", desc: "Complete bathroom renovations with waterproof tile solutions." },
  { icon: ChefHat, title: "Kitchen Backsplash", desc: "Stunning backsplash designs to elevate your kitchen." },
  { icon: Layers, title: "Floor Installation", desc: "Durable and beautiful floor tile for any room." },
  { icon: Hammer, title: "Tile Repair", desc: "Quick and reliable cracked or damaged tile repairs." },
  { icon: Paintbrush, title: "Custom Mosaic", desc: "Unique mosaic designs tailored to your vision." },
  { icon: Ruler, title: "Outdoor Tile", desc: "Weather-resistant tile for patios and outdoor spaces." },
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
