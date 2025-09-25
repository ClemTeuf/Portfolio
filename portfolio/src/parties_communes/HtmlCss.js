import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import html_css from "../img/html_css.png";
import "./About.css";

function HtmlCss() {
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
        <h1>HTML & CSS</h1>

        <div className="competence-intro">
          <img src={html_css} alt="HTML/CSS" loading="lazy" />
          <p>
            <strong>HTML</strong> (HyperText Markup Language) permet de
            structurer le contenu d’une page web.
          </p>
          <p>
            <strong>CSS</strong> (Cascading Style Sheets) permet de styliser
            ce contenu : couleurs, mises en page, animations...
          </p>
        </div>

        <section className="competence-details">
          <h2>Applications pratiques</h2>
          <ul>
            <li>Créer des pages web modernes et responsives</li>
            <li>Structurer le contenu avec des balises sémantiques</li>
            <li>Ajouter des styles, transitions et animations</li>
          </ul>

          <h2>Ressources pour débutants</h2>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/fr/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN HTML
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/fr/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN CSS
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3Schools
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

export default HtmlCss;