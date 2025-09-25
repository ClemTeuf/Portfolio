import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ui_ux from '../img/ui_ux.png';
import "./About.css";

function UiUx() {
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
        <h1>UI / UX</h1>

        <div className="competence-intro">
          <img src={ui_ux} alt="UI/UX" loading="lazy" />
          <p>
            <strong>L’UI (User Interface)</strong> concerne la conception visuelle d’une interface : couleurs, typographie, boutons, mise en page.
          </p>
          <p>
            <strong>L’UX (User Experience)</strong> se concentre sur l’expérience vécue par l’utilisateur : simplicité, fluidité et intuitivité.
          </p>
        </div>

        <section className="competence-details">
          <h2>Applications pratiques</h2>
          <ul>
            <li>Créer des interfaces visuelles claires, modernes et accessibles</li>
            <li>Améliorer l’expérience utilisateur grâce à des parcours fluides</li>
            <li>Effectuer des tests utilisateurs pour optimiser la navigation</li>
            <li>Allier esthétique et ergonomie pour maximiser l’engagement</li>
          </ul>

          <h2>Ressources pour débutants</h2>
          <ul>
            <li>
              <a
                href="https://www.smashingmagazine.com/category/uxdesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Smashing Magazine UX
              </a>
            </li>
            <li>
              <a
                href="https://uxdesign.cc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UX Collective
              </a>
            </li>
            <li>
              <a
                href="https://www.interaction-design.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interaction Design Foundation
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

export default UiUx;