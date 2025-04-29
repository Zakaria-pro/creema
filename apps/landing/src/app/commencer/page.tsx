// src/app/commencer/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Type pour les données du formulaire
type FormData = {
  // Étape 1: Type d'entreprise
  typeEntreprise: string;
  secteurActivite: string;

  // Étape 2: Informations personnelles
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  nationalite: string;

  // Étape 3: Détails de l'entreprise
  nomEntreprise: string;
  adresseSiege: string;
  ville: string;
  capitalInitial: string;

  // Étape 4: Documents et options
  domiciliation: boolean;
  assistanceComptable: boolean;
  creationSiteWeb: boolean;
};

export default function CommencerPage() {
  const router = useRouter();
  const [etape, setEtape] = useState(1);
  const [progression, setProgression] = useState(25);

  // État initial du formulaire
  const [formData, setFormData] = useState<FormData>({
    typeEntreprise: "",
    secteurActivite: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    nationalite: "marocaine",
    nomEntreprise: "",
    adresseSiege: "",
    ville: "",
    capitalInitial: "",
    domiciliation: false,
    assistanceComptable: false,
    creationSiteWeb: false,
  });

  // Validation des étapes
  const [erreurs, setErreurs] = useState<string[]>([]);

  // Gestion des changements dans les champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Validation avant de passer à l'étape suivante
  const validerEtape = () => {
    const erreurs: string[] = [];

    if (etape === 1) {
      if (!formData.typeEntreprise)
        erreurs.push("Veuillez sélectionner un type d'entreprise");
      if (!formData.secteurActivite)
        erreurs.push("Veuillez sélectionner un secteur d'activité");
    } else if (etape === 2) {
      if (!formData.nom) erreurs.push("Le nom est requis");
      if (!formData.prenom) erreurs.push("Le prénom est requis");
      if (!formData.email) erreurs.push("L'email est requis");
      if (!formData.email.includes("@"))
        erreurs.push("Format d'email invalide");
      if (!formData.telephone) erreurs.push("Le téléphone est requis");
    } else if (etape === 3) {
      if (!formData.nomEntreprise)
        erreurs.push("Le nom de l'entreprise est requis");
      if (!formData.adresseSiege)
        erreurs.push("L'adresse du siège est requise");
      if (!formData.ville) erreurs.push("La ville est requise");
      if (!formData.capitalInitial)
        erreurs.push("Le capital initial est requis");
    }

    setErreurs(erreurs);
    return erreurs.length === 0;
  };

  // Navigation entre les étapes
  const etapeSuivante = () => {
    if (validerEtape()) {
      window.scrollTo(0, 0);
      if (etape < 4) {
        setEtape(etape + 1);
        setProgression((etape + 1) * 25);
      } else {
        // Soumettre le formulaire
        soumettreFormulaire();
      }
    }
  };

  const etapePrecedente = () => {
    if (etape > 1) {
      setEtape(etape - 1);
      setProgression((etape - 1) * 25);
      window.scrollTo(0, 0);
    }
  };

  // Soumission du formulaire
  const soumettreFormulaire = () => {
    // Ici, vous enverriez normalement les données à votre API
    console.log("Données du formulaire:", formData);

    // Redirection vers une page de confirmation
    router.push("/confirmation");
  };

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

      {/* Barre de progression */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Étape {etape} sur 4</span>
            <span className="text-sm text-gray-500">
              {progression}% complété
            </span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-black h-2 rounded-full transition-all duration-500"
              style={{ width: `${progression}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Titre de l'étape */}
          <h1 className="text-2xl font-bold mb-6">
            {etape === 1 && "Type d'entreprise"}
            {etape === 2 && "Vos informations personnelles"}
            {etape === 3 && "Détails de l'entreprise"}
            {etape === 4 && "Services additionnels"}
          </h1>

          {/* Messages d'erreur */}
          {erreurs.length > 0 && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              <p className="font-medium mb-1">
                Veuillez corriger les erreurs suivantes:
              </p>
              <ul className="list-disc pl-5 text-sm">
                {erreurs.map((erreur, index) => (
                  <li key={index}>{erreur}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Formulaire - Étape 1: Type d'entreprise */}
          {etape === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type d'entreprise
                </label>
                <select
                  name="typeEntreprise"
                  value={formData.typeEntreprise}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Sélectionnez un type d'entreprise</option>
                  <option value="auto-entrepreneur">Auto-entrepreneur</option>
                  <option value="sarl">SARL</option>
                  <option value="sarlau">SARL à associé unique (SARLAU)</option>
                  <option value="sa">Société anonyme (SA)</option>
                  <option value="snc">Société en nom collectif (SNC)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secteur d'activité
                </label>
                <select
                  name="secteurActivite"
                  value={formData.secteurActivite}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Sélectionnez un secteur d'activité</option>
                  <option value="commerce">Commerce</option>
                  <option value="services">Services</option>
                  <option value="technologie">Technologie / IT</option>
                  <option value="restauration">
                    Restauration / Hôtellerie
                  </option>
                  <option value="industrie">Industrie / Production</option>
                  <option value="immobilier">Immobilier</option>
                  <option value="transport">Transport / Logistique</option>
                  <option value="btp">BTP / Construction</option>
                  <option value="sante">Santé / Médical</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {formData.typeEntreprise && (
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <h3 className="font-medium mb-2">
                    Information sur{" "}
                    {formData.typeEntreprise === "auto-entrepreneur"
                      ? "l'auto-entrepreneur"
                      : "la " + formData.typeEntreprise}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formData.typeEntreprise === "auto-entrepreneur" &&
                      "Statut idéal pour démarrer une activité individuelle avec un chiffre d'affaires limité. Fiscalité simplifiée et formalités réduites."}
                    {formData.typeEntreprise === "sarl" &&
                      "Société à responsabilité limitée adaptée aux petites et moyennes entreprises. Capital minimum requis de 1 DH."}
                    {formData.typeEntreprise === "sarlau" &&
                      "SARL avec un seul associé, idéale pour l'entrepreneur individuel souhaitant limiter sa responsabilité."}
                    {formData.typeEntreprise === "sa" &&
                      "Structure pour les projets de grande envergure. Minimum 5 actionnaires et capital minimum de 300 000 DH."}
                    {formData.typeEntreprise === "snc" &&
                      "Société où les associés sont responsables indéfiniment et solidairement des dettes sociales."}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Formulaire - Étape 2: Informations personnelles */}
          {etape === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Votre nom de famille"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="+212 6XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationalité
                </label>
                <select
                  name="nationalite"
                  value={formData.nationalite}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="marocaine">Marocaine</option>
                  <option value="etrangere">Étrangère</option>
                </select>
              </div>

              {formData.nationalite === "etrangere" && (
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-600">
                    Des documents supplémentaires seront nécessaires pour les
                    ressortissants étrangers. Nous vous contacterons avec plus
                    de détails après la soumission du formulaire.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Formulaire - Étape 3: Détails de l'entreprise */}
          {etape === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  name="nomEntreprise"
                  value={formData.nomEntreprise}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Nom commercial de votre entreprise"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Nous vérifierons la disponibilité du nom lors du traitement de
                  votre dossier.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse du siège social
                </label>
                <input
                  type="text"
                  name="adresseSiege"
                  value={formData.adresseSiege}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Adresse complète"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ville
                </label>
                <select
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Sélectionnez une ville</option>
                  <option value="casablanca">Casablanca</option>
                  <option value="rabat">Rabat</option>
                  <option value="marrakech">Marrakech</option>
                  <option value="tanger">Tanger</option>
                  <option value="fes">Fès</option>
                  <option value="agadir">Agadir</option>
                  <option value="meknes">Meknès</option>
                  <option value="oujda">Oujda</option>
                  <option value="kenitra">Kénitra</option>
                  <option value="tetouan">Tétouan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capital initial
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="capitalInitial"
                    value={formData.capitalInitial}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="10000"
                  />
                  <span className="absolute left-3 top-2 text-gray-500">
                    DH
                  </span>
                </div>
                {formData.typeEntreprise === "sa" &&
                  formData.capitalInitial &&
                  parseInt(formData.capitalInitial) < 300000 && (
                    <p className="text-xs text-red-600 mt-1">
                      Le capital minimum pour une SA est de 300 000 DH.
                    </p>
                  )}
              </div>
            </div>
          )}

          {/* Formulaire - Étape 4: Documents et options */}
          {etape === 4 && (
            <div className="space-y-6">
              <p className="text-gray-600 mb-6">
                Sélectionnez les services additionnels dont vous souhaitez
                bénéficier pour faciliter votre création d'entreprise.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="domiciliation"
                    name="domiciliation"
                    checked={formData.domiciliation}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="domiciliation" className="font-medium">
                      Service de domiciliation
                    </label>
                    <p className="text-sm text-gray-600">
                      Utilisez notre adresse professionnelle comme siège social
                      de votre entreprise. Comprend la réception et le transfert
                      du courrier.
                    </p>
                    <p className="text-sm font-medium mt-1">+ 2500 DH / an</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="assistanceComptable"
                    name="assistanceComptable"
                    checked={formData.assistanceComptable}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label
                      htmlFor="assistanceComptable"
                      className="font-medium"
                    >
                      Assistance comptable
                    </label>
                    <p className="text-sm text-gray-600">
                      Service comptable pour la première année, incluant la
                      tenue des livres, les déclarations fiscales et les bilans
                      annuels.
                    </p>
                    <p className="text-sm font-medium mt-1">+ 5000 DH / an</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="creationSiteWeb"
                    name="creationSiteWeb"
                    checked={formData.creationSiteWeb}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="creationSiteWeb" className="font-medium">
                      Création de site web professionnel
                    </label>
                    <p className="text-sm text-gray-600">
                      Un site web vitrine pour votre entreprise, avec nom de
                      domaine et hébergement inclus pour la première année.
                    </p>
                    <p className="text-sm font-medium mt-1">+ 3500 DH</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-8">
                <h3 className="font-medium mb-2">Documents à préparer</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Pour accélérer le traitement de votre dossier, veuillez
                  préparer les documents suivants:
                </p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>Copie de votre CIN (carte nationale d'identité)</li>
                  <li>Justificatif de domicile de moins de 3 mois</li>
                  <li>
                    {formData.typeEntreprise === "auto-entrepreneur"
                      ? "Déclaration sur l'honneur de non-assujettissement à la TVA"
                      : "Projet de statuts de la société"}
                  </li>
                  {formData.typeEntreprise !== "auto-entrepreneur" && (
                    <li>Certificat négatif pour le nom commercial</li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Boutons de navigation */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={etapePrecedente}
              className={`px-4 py-2 border border-gray-300 rounded ${etape === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
              disabled={etape === 1}
            >
              Précédent
            </button>

            <button
              type="button"
              onClick={etapeSuivante}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              {etape === 4 ? "Soumettre" : "Suivant"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
