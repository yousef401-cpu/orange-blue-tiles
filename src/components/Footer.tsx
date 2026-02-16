const Footer = () => (
  <footer className="bg-section-dark border-t border-border/10 py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-section-dark-foreground/50 text-sm">
        © 2026 Yousef Tiles Ceramics — Hamilton, Ontario. All rights reserved.
      </span>
      <div className="flex gap-6">
        {["Services", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-section-dark-foreground/40 hover:text-primary transition-colors text-sm"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
