import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import react from '../img/react.png';
import "./About.css";

function ReactJs() {
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
        <h1>React</h1>

        <div className="competence-intro">
          <img src={react} alt="React" loading="lazy" />
          <p>
            <strong>React</strong> est une librairie JavaScript développée par Facebook qui permet de construire des interfaces utilisateur interactives et modulaires.
          </p>
          <p>
            Elle facilite la création de composants réutilisables et la gestion efficace de l’état et du DOM grâce au Virtual DOM.
          </p>
        </div>

        <section className="competence-details">
          <h2>Applications pratiques</h2>
          <ul>
            <li>Développer des applications web modulaires et performantes</li>
            <li>Gérer l’état de l’application de manière centralisée ou locale</li>
            <li>Créer des interfaces dynamiques et interactives</li>
            <li>Optimiser le rendu grâce au Virtual DOM et aux hooks</li>
          </ul>

          <h2>Ressources pour débutants</h2>
          <ul>
            <li>
              <a
                href="https://fr.reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation officielle React
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/react/"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3Schools React
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cours React complet (Udemy)
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

export default ReactJs;