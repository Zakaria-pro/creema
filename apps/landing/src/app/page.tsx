// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="py-6 px-8 flex items-center justify-between border-b border-gray-100">
        <div className="font-medium text-xl">CreaMa</div>
        <div className="hidden md:flex space-x-10">
          <Link
            href="#fonctionnalites"
            className="text-gray-600 hover:text-black"
          >
            Fonctionnalités
          </Link>
          <Link href="#tarifs" className="text-gray-600 hover:text-black">
            Tarifs
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="/commencer"
            className="py-2 px-4 border border-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Commencer
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Créez votre entreprise au Maroc simplement.
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          Notre plateforme simplifie chaque étape de la création d'entreprise.
          Constituez votre société et commencez à opérer, sans tracas
          administratifs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/commencer"
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors text-center"
          >
            Démarrer gratuitement
          </Link>
          <Link
            href="#demo"
            className="px-6 py-3 border border-gray-300 hover:border-gray-500 transition-colors text-center"
          >
            Voir une démo
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Tout ce dont vous avez besoin
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-4 w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Documents automatisés
              </h3>
              <p className="text-gray-600">
                Génération de tous les documents juridiques nécessaires pour
                votre entreprise.
              </p>
            </div>

            <div>
              <div className="mb-4 w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Assistance juridique</h3>
              <p className="text-gray-600">
                Conseils personnalisés par des experts juridiques spécialisés.
              </p>
            </div>

            <div>
              <div className="mb-4 w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Suivi en temps réel</h3>
              <p className="text-gray-600">
                Suivez l'avancement de vos démarches administratives depuis
                votre tableau de bord.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Comment ça marche
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
              1
            </div>
            <h3 className="text-lg font-medium mb-2">Questionnaire</h3>
            <p className="text-gray-600 text-sm">
              Répondez à quelques questions sur votre projet.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
              2
            </div>
            <h3 className="text-lg font-medium mb-2">Dossier</h3>
            <p className="text-gray-600 text-sm">
              Nous préparons tous les documents nécessaires.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
              3
            </div>
            <h3 className="text-lg font-medium mb-2">Dépôt</h3>
            <p className="text-gray-600 text-sm">
              Nous déposons le dossier auprès des administrations.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
              4
            </div>
            <h3 className="text-lg font-medium mb-2">Finalisation</h3>
            <p className="text-gray-600 text-sm">
              Recevez les documents officiels de votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="tarifs" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Tarifs simples
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 bg-white">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Essentiel</h3>
                <p className="text-sm text-gray-600">Auto-entrepreneur</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">1500 DH</span>
              </div>
              <ul className="mb-8 space-y-2 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Documents essentiels
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Assistance par email
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Suivi du dossier
                </li>
              </ul>
              <Link
                href="/commencer"
                className="block w-full py-2 border border-black text-center hover:bg-black hover:text-white transition-colors"
              >
                Choisir
              </Link>
            </div>

            <div className="p-8 border-2 border-black bg-white relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-black text-white text-xs px-2 py-1">
                Populaire
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Professionnel</h3>
                <p className="text-sm text-gray-600">SARL / SARLAU</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">3500 DH</span>
              </div>
              <ul className="mb-8 space-y-2 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tous documents juridiques
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Assistance téléphonique
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Suivi en temps réel
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Conseils fiscaux de base
                </li>
              </ul>
              <Link
                href="/commencer"
                className="block w-full py-2 bg-black text-white text-center hover:bg-gray-800 transition-colors"
              >
                Choisir
              </Link>
            </div>

            <div className="p-8 border border-gray-200 bg-white">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Entreprise</h3>
                <p className="text-sm text-gray-600">Structures complexes</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">7500 DH</span>
              </div>
              <ul className="mb-8 space-y-2 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tout type de société
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Assistance juridique dédiée
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Optimisation fiscale
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Service prioritaire
                </li>
              </ul>
              <Link
                href="/commencer"
                className="block w-full py-2 border border-black text-center hover:bg-black hover:text-white transition-colors"
              >
                Choisir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à créer votre entreprise?
          </h2>
          <p className="text-gray-600 mb-8">
            Rejoignez les entrepreneurs qui ont simplifié leurs démarches
            administratives avec CreaMa.
          </p>
          <Link
            href="/commencer"
            className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Commencer Gratuitement
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Aucune carte de crédit requise
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-medium mb-4">CreaMa</h4>
              <p className="text-sm text-gray-600 mb-4">
                La solution simple pour créer votre entreprise au Maroc.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-black">
                    Création SARL
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Auto-entrepreneur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Domiciliation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Ressources</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-black">
                    Guide d'entreprise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div id="contact">
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>contact@creama.ma</li>
                <li>+212 522 123 456</li>
                <li>Technopark, Casablanca</li>
              </ul>
            </div>
          </div>

          <div className="text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <p>© 2025 CreaMa. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black">
                Conditions
              </a>
              <a href="#" className="hover:text-black">
                Confidentialité
              </a>
              <a href="#" className="hover:text-black">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
