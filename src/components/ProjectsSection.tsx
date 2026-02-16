import projectBathroom from "@/assets/project-bathroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectFloor from "@/assets/project-floor.jpg";

const projects = [
  { img: projectBathroom, title: "Modern Bathroom", category: "Bathroom" },
  { img: projectKitchen, title: "Kitchen Backsplash", category: "Kitchen" },
  { img: projectFloor, title: "Living Room Floor", category: "Flooring" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-6xl text-foreground mt-2">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(({ img, title, category }) => (
            <div key={title} className="group relative overflow-hidden rounded-lg cursor-pointer">
              <img
                src={img}
                alt={title}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-section-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs uppercase tracking-widest font-semibold">{category}</span>
                <h3 className="text-section-dark-foreground text-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
