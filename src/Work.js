import React from "react";
import vente from './images/Gestion de vente des pièces de véhicules.png'
import archive from './images/React App.png'

const projects = [
  {
    src: vente,
    alt: "Gestion de ventes des pièces de véhicule",
    title: "Gestion de ventes des pièces de véhicule",
    description:
      "Ce projet consiste en une application web pour la gestion des ventes de pièces de véhicules. Elle permet aux administrateurs de consulter les stocks, d'enregistrer des commandes. L'interface est conçue pour être intuitive et facile à utiliser, même pour les non-techniciens.",
    badges: ["React", "Bootstrap", "Node.js", "Express.js", "Mysql"],
  },
  {
    src: archive,
    alt: "Gestion des archives",
    title: "Gestion des archives",
    description:
      "Cette application permet de gérer efficacement leurs archives. Les utilisateurs peuvent numériser, stocker et rechercher des documents dans une base de données sécurisée. Des fonctionnalités avancées comme les permissions d'accès différenciées sont également intégrées.",
    badges: ["React", "Bootstrap", "PHP", "Mysql"],
  },
];

function Work() {
  return (
    <div className="container mx-auto px-4 sm:px-10">
      <div className="flex justify-center mt-10 sm:mt-32">
        <h1 className="nom m-3 sm:m-5 text-xl sm:text-3xl font-medium border-b border-pink-500">
          Projets
        </h1>
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-around items-center mt-5 sm:mt-10"
        >
          <img
            src={project.src}
            alt={project.alt}
            className="w-full h-64 sm:w-1/2 mb-4 sm:mb-0 sm:mr-10"
          />
          <div className="pl-4 sm:pl-12">
            <h2 className="text-lg sm:text-2xl font-bold">{project.title}</h2>
            <p
              className="text-base sm:text-md mt-1 sm:mt-2"
              style={{ opacity: 0.5, cursor: "default" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
            >
              {project.description}
            </p>
            <div className="flex mt-2 sm:mt-3">
              {project.badges.map((badge, badgeIndex) => (
                <span key={badgeIndex} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
