import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import api from '../img/api.png';
import "./About.css";

function Api() {
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
        <h1>API</h1>

        <div className="competence-intro">
          <img src={api} alt="API" loading="lazy" />
          <p>
            <strong>Une API</strong> (Application Programming Interface) est un ensemble de règles et de protocoles qui permet à différentes applications de communiquer entre elles.
          </p>
          <p>
            Elles sont essentielles pour connecter des services, échanger des données et intégrer des fonctionnalités externes dans une application.
          </p>
        </div>

        <section className="competence-details">
          <h2>Applications pratiques</h2>
          <ul>
            <li>Consommer des données depuis des services externes (ex. météo, Google Maps, etc.)</li>
            <li>Créer et exposer sa propre API pour ses applications</li>
            <li>Intégration avec des services tiers (paiements, réseaux sociaux...)</li>
            <li>Automatiser des échanges entre différentes plateformes</li>
          </ul>

          <h2>Ressources pour débutants</h2>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction aux API (MDN)
              </a>
            </li>
            <li>
              <a
                href="https://www.postman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Postman (outil pour tester les API)
              </a>
            </li>
            <li>
              <a
                href="https://restfulapi.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide sur les API REST
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

export default Api;