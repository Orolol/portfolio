import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bonjour, je suis <span className="text-indigo-600">Gaétan Martin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Software & Machine Learning Engineer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Développeur et lead developer depuis 13 ans, j'ai toujours travaillé en étroite collaboration avec des data scientists. J'ai récemment suivi une formation en AI Development au Wagon et je recherche maintenant une opportunité en tant que Machine Learning Engineer.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
              >
                Voir mes projets
              </a>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/orolol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/gaétan-martin-11a94418a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:gaetan@0r0.fr"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                gaetan@0r0.fr
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
              GM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}