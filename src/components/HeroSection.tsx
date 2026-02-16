import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />

      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Hamilton, Ontario — Professional Tiling & Renovation
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-section-dark-foreground leading-[0.95] mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Yousef Tiles
            <br />
            <span className="text-primary">Ceramics</span>
          </h1>

          <p
            className="text-section-dark-foreground/70 text-lg md:text-xl max-w-lg mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Professional tiling, flooring, and full bathroom renovations in Hamilton, Ontario. High-quality, reliable, and clean work — every time.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+19058700038">
                Call (905) 870-0038
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg">
              View Our Work
            </Button>
          </div>

          <div
            className="flex gap-12 mt-16 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { num: "3+", label: "Years Experience" },
              { num: "✓", label: "On Schedule" },
              { num: "5★", label: "HomeStars" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl text-primary font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {num}
                </div>
                <div className="text-section-dark-foreground/50 text-sm uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
