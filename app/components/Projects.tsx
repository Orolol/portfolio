import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const projects = [
    {
      title: "Sat2plan",
      description: "Projet de Deep Learning utilisant une architecture GAN pour générer des plans à partir d'images satellites. Développé avec une architecture U-Net et entraîné sur des paires d'images satellites et de plans provenant de l'API Google Maps.",
      technologies: ["PyTorch", "GAN", "U-Net", "Google Maps API"],
      type: "Machine Learning",
      date: "Le Wagon 2024"
    },
    {
      title: "Projets LLM",
      description: "Développement continu de projets utilisant des modèles de langage, y compris l'utilisation d'embeddings et de fine-tuning pour des cas d'usage spécifiques.",
      technologies: ["LLM", "Embeddings", "Fine-tuning", "Python"],
      type: "Machine Learning",
      date: "2023-2024"
    },
    {
      title: "Projets Kaggle",
      description: "Participation active à des compétitions Kaggle, notamment sur des projets de classification d'images et de traitement du langage naturel.",
      technologies: ["Kaggle", "Python", "TensorFlow", "PyTorch"],
      type: "Machine Learning",
      date: "2023-2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Mes Projets
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Découvrez mes derniers projets en Machine Learning et Intelligence Artificielle
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[80px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}