import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import securite from '../img/securite.png';
import "./About.css";

function Sécurité() {
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
        <h1>Sécurité Web</h1>

        <div className="competence-intro">
          <img src={securite} alt="Sécurité Web" loading="lazy" />
          <p>
            <strong>La sécurité web</strong> consiste à protéger les applications et les utilisateurs contre les menaces et vulnérabilités en ligne.
          </p>
          <p>
            Elle est indispensable pour garantir la confidentialité, l’intégrité et la disponibilité des données et des services.
          </p>
        </div>

        <section className="competence-details">
          <h2>Applications pratiques</h2>
          <ul>
            <li>Protéger les données des utilisateurs avec le chiffrement (HTTPS, SSL/TLS)</li>
            <li>Éviter les attaques courantes comme XSS, CSRF ou injections SQL</li>
            <li>Mettre en place une authentification et une gestion des sessions sécurisées</li>
            <li>Analyser et corriger les vulnérabilités grâce à des audits réguliers</li>
          </ul>

          <h2>Ressources pour débutants</h2>
          <ul>
            <li>
              <a
                href="https://owasp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OWASP (Open Web Application Security Project)
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/fr/docs/Web/Security"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide Sécurité (MDN)
              </a>
            </li>
            <li>
              <a
                href="https://portswigger.net/web-security"
                target="_blank"
                rel="noopener noreferrer"
              >
                PortSwigger Web Security Academy
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

export default Sécurité;