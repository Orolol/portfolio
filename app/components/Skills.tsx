import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Science",
      skills: [
        { name: "Python", level: "Avancé" },
        { name: "SQL", level: "Avancé" },
        { name: "Pandas", level: "Avancé" },
        { name: "PyTorch", level: "Intermédiaire" },
        { name: "TensorFlow", level: "Intermédiaire" },
        { name: "Machine Learning", level: "Avancé" },
      ]
    },
    {
      title: "Software Development",
      skills: [
        { name: "JavaScript", level: "Avancé" },
        { name: "TypeScript", level: "Avancé" },
        { name: "GoLang", level: "Intermédiaire" },
        { name: "VueJS", level: "Avancé" },
        { name: "ReactJS", level: "Avancé" },
        { name: "CSS/SCSS", level: "Avancé" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "GitHub", level: "Avancé" },
        { name: "Docker", level: "Avancé" },
        { name: "GCP", level: "Intermédiaire" },
        { name: "Jenkins", level: "Avancé" },
        { name: "Kaggle", level: "Intermédiaire" },
        { name: "Google Colab", level: "Avancé" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mes Compétences
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              className="space-y-6"
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                    style={{ transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        skill.level === "Avancé"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}