import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import nodejs from '../img/nodejs.png';
import "./About.css";

function NodeJs() {
  // Script pour le burger menu
  useEffect(() => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    const toggleMenu = () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("toggle");
    };

    burger.addEventListener("click", toggleMenu);

    return () => {
      burger.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <Header />

      <article className="competence-page">
        <h1>Node.js</h1>

        <div className="competence-intro">
          <img src={nodejs} alt="Node.js" loading="lazy" />
          <p>
            <strong>Node.js</strong> est un environnement d’exécution JavaScript côté serveur basé sur le moteur V8 de Google Chrome.
          </p>
          <p>
            Il permet de créer des applications rapides, évolutives et capables de gérer un grand nombre de connexions simultanées grâce à son modèle non-bloquant et orienté événements.
          </p>
        </div>

        <section className="competence-details">
          <h2>Applications pratiques</h2>
          <ul>
            <li>Développement d’API REST et GraphQL</li>
            <li>Création de serveurs web performants</li>
            <li>Applications temps réel (chat, jeux en ligne, etc.)</li>
            <li>Automatisation de tâches grâce à des scripts</li>
          </ul>

          <h2>Ressources pour débutants</h2>
          <ul>
            <li>
              <a
                href="https://nodejs.org/fr/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation officielle Node.js
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide Node.js + Express (MDN)
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/nodejs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3Schools Node.js
              </a>
            </li>
          </ul>
        </section>

        <Link to="/about" className="btn-back">
          ← Retour aux compétences
        </Link>
      </article>

      <Footer />
    </>
  );
}

export default NodeJs;