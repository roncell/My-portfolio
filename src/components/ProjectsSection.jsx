import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "QwenNET: LLM Traffic Analysis",
    description: "Fine-tuned Qwen2.5 to treat network packets as language tokens, achieving 90.4% accuracy in anomaly detection.",
    image: "/projects/project1.png", // Use a screenshot of a terminal or a network graph
    tags: ["Python", "PyTorch", "HuggingFace", "Scapy"],
    githubUrl: "https://github.com/roncell/QwenNet",
  },
  {
    id: 2,
    title: "Multilingual Music Recommender",
    description: "Built an end-to-end MLOps pipeline using LaBSE and MinIO to process and recommend tracks across multiple languages.",
    image: "/projects/project2.png", 
    tags: ["MLOps", "Docker", "PyTorch", "Chameleon Cloud"],
    githubUrl: "https://github.com/roncell/multilingual-music-recommendation-model",
  },
  {
    id: 3,
    title: "Bézier Flow",
    description: "A high-performance visualization tool for interactive N-degree Bézier curves, built to explore computational geometry.",
    image: "/projects/project3.jpg", 
    tags: ["JavaScript", "Canvas API", "Computational Geometry", "Algorithms"],
    githubUrl: "https://github.com/roncell/B-zier-flow",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        A collection of things I’ve built to answer the question "Can we make this 
  faster/smarter?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/roncell"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
