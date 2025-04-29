// src/app/confirmation/page.tsx
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-medium text-xl">
            CreaMa
          </Link>
          <div className="text-sm">
            Besoin d'aide?{" "}
            <a href="tel:+212522123456" className="text-black font-medium">
              +212 522 123 456
            </a>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-3xl mx-auto py-16 px-4 text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-4">
            Votre demande a été reçue!
          </h1>

          <p className="text-gray-600 mb-8">
            Merci d'avoir choisi CreaMa pour la création de votre entreprise au
            Maroc. Notre équipe va étudier votre dossier et vous contactera dans
            les plus brefs délais.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="font-medium mb-4">Prochaines étapes</h2>
            <ol className="text-left space-y-3 text-gray-600">
              <li className="flex">
                <span className="font-medium mr-2">1.</span>
                <span>
                  Vous recevrez un email de confirmation avec un récapitulatif
                  de votre demande.
                </span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">2.</span>
                <span>
                  Un conseiller vous contactera sous 24h pour valider les
                  détails et répondre à vos questions.
                </span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">3.</span>
                <span>
                  Vous pourrez suivre l'avancement de votre dossier depuis votre
                  espace personnel.
                </span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">4.</span>
                <span>
                  Nous vous guiderons tout au long du processus jusqu'à la
                  création complète de votre entreprise.
                </span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Contacter un conseiller
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
