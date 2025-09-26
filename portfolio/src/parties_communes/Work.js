import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";
import mon_pp from "../img/mon_pp.png";
import all4basket from "../img/all4basket.jpeg";
import nuit_info from "../img/nuit_info.png";
import jeu_textuel from "../img/jeu_textuel.png";
import "./Work.css";

function Work() {
  // Script burger menu
  useEffect(() => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    const toggleMenu = () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("toggle");
    };

    burger.addEventListener("click", toggleMenu);
    return () => burger.removeEventListener("click", toggleMenu);
  }, []);

  return (
    <>
      <Header />
      <article>
        <h1>MES TRAVAUX</h1>

        <Project
            img={mon_pp}
            title="Mon Programme Perso"
            techno="HTML · CSS · JS"
            description={
                <>
                    Dans le cadre de mon autoformation en développement web fullstack, j’ai créé une application permettant :
                    <br />- d’ajouter des tâches dans un calendrier
                    <br />- d’associer chaque tâche à une catégorie
                    <br />- d’accéder rapidement à la prochaine tâche correspondant à la catégorie sélectionnée
                    <br /><br />
                </>
            }
            technos={
                <>
                    <br />HTML5 · CSS3 · JavaScript (front) · Gestion de la logique côté client
                    <br /><br />
                </>
            }
            competences={
                <>
                    <br />Applications web · Développement front-end · JavaScript
                </>
            }
            github="https://github.com/ClemTeuf/Mon-Programme-Perso"
            site="https://monprogrammeperso.netlify.app/"
        />

        <Project
            img={all4basket}
            title="All4Basket"
            techno="HTML · CSS · JS"
            description={
                <>
                    Dans le cadre d'une situation d'apprentissage et d'évaluation au sein de l'IUT de Calais, j’ai créé une application web sur le basket aux Jeux Olympiques de 2024.
                    <br /><br />
                </>
            }
            technos={
                <>
                    <br />HTML5 · CSS3 · JavaScript (front) · Gestion de la logique côté client
                    <br /><br />
                </>
            }
            competences={
                <>
                    <br />Applications web · Programmation · Feuilles de style en cascade (CSS) · HTML · HTML5
                </>
            }
            github="https://github.com/ClemTeuf/All4Basket"
            site="https://projets.jrcan.dev/all4basket-paris2024/"
        />

        <Project
            img={nuit_info}
            title="Nuit de l'info 2024"
            techno="HTML · CSS · JS"
            description={
                <>
                    Participation à la Nuit de l'info le 5 décembre 2024, une compétition nationale qui réunit les étudiants pour travailler ensemble sur le développement d'une application web.
                    <br /><br />
                </>
            }
            technos={
                <>
                    <br />HTML5 · CSS3 · JavaScript (front) · Gestion de la logique côté client
                    <br /><br />
                </>
            }
            competences={
                <>
                    <br />Applications web · Programmation · JavaScript · CSS
                </>
            }
            github="https://github.com/ClemTeuf/Nuit_de_l_info_2024"
            site="https://les-moins-2-dix-nuit-info.netlify.app/"
        />

        <Project
            img={jeu_textuel}
            title="Jeu textuel"
            techno="C"
            description={
                <>
                    Dans le cadre d'une situation d'apprentissage et d'évaluation, j'ai créé avec un collègue un jeu textuel en langage C.
                    <br /><br />
                </>
            }
            technos={
                <>
                    <br />C (console) · Gestion de la logique côté client
                    <br /><br />
                </>
            }
            competences={
                <>
                    <br />Programmation · Logique algorithmique · Travail en binôme
                </>
            }
            github="https://github.com/ClemTeuf/Jeu_textuel"
        />
      </article>
      <Footer />
    </>
  );
}

export default Work;
