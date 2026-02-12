import { Briefcase, Code, User } from "lucide-react";
import { Smartphone, BrainCircuit, ServerCog } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Software Engineer at Audible & NYU Tandon Researcher
            </h3>

            <p className="text-muted-foreground">
            I am a Computer Engineering Graduate Student at New York University with a focus on building scalable, 
            intelligent systems. My professional background is rooted in creating high-impact software, 
            most recently as a Software Development Intern at Audible (an Amazon company). 
            During my time there, I led the migration of legacy Android UI to Jetpack Compose, modernizing 
            key app experiences and improving rendering efficiency by 20% for millions of global listeners
            </p>

            <p className="text-muted-foreground">
            I’m the kind of developer who actually enjoys the challenge of a stubborn bug or a messy data pipeline—turning technical chaos into something elegant and, more importantly, useful. Whether I’m modernizing apps for millions of users or experimenting with the latest in AI, my goal is always the same: building smart, scalable tech that doesn't just work, but feels right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Rohan,Subramaniam-resume-updated.pdf"
                target="_blank"                      // Opens in a new tab
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mobile Engineering</h4>
                  <p className="text-muted-foreground">
                  Modernizing Android architectures with Jetpack Compose and improving 
          UI efficiency for millions of users at Audible.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                  Fine-tuning LLMs for network analysis and building robust MLOps 
          pipelines for multilingual recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ServerCog className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Architecture</h4>
                  <p className="text-muted-foreground">
                  Developing secure Java backends and managing cloud infrastructure 
          across AWS, GCP, and Azure platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
