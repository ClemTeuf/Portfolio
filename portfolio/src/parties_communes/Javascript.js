import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import js from '../img/js.png';
import "./About.css";

function Javascript() {
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
        <h1>JavaScript</h1>

        <div className="competence-intro">
          <img src={js} alt="JavaScript" loading="lazy" />
          <p>
            <strong>JavaScript</strong> est un langage de programmation qui permet d’ajouter de l’interactivité aux pages web.
          </p>
          <p>
            Il est utilisé pour créer des fonctionnalités dynamiques, manipuler le DOM, gérer les événements, et communiquer avec des API.
          </p>
        </div>

        <section className="competence-details">
          <h2>Applications pratiques</h2>
          <ul>
            <li>Créer des animations et interactions sur les pages web</li>
            <li>Valider des formulaires côté client</li>
            <li>Manipuler le DOM pour modifier le contenu en temps réel</li>
            <li>Communiquer avec des serveurs via AJAX ou Fetch API</li>
          </ul>

          <h2>Ressources pour débutants</h2>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3Schools JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://javascript.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Modern JavaScript Tutorial
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

export default Javascript;