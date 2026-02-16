import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-section-dark/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>YT</span>
          </div>
          <div>
            <span className="text-section-dark-foreground font-bold text-lg leading-tight block" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
              Yousef Tile
            </span>
            <span className="text-muted-foreground text-xs tracking-widest uppercase">Ceramic Installation</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-section-dark-foreground/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          <Button variant="hero" size="sm">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </nav>

        <button
          className="md:hidden text-section-dark-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-section-dark border-t border-border/20 px-4 pb-4">
          {["Services", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-section-dark-foreground/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mt-2 w-full">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
