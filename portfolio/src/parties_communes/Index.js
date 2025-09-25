import React from "react";
import {Link} from 'react-router-dom';
import photo_clem from '../img/photo_clem.jpg';
import conception_graphique from '../img/conception-graphique.png';
import avis_client from '../img/avis-client.png';
import contenu_web from '../img/contenu-web.png';
import securite_web from '../img/securite-web.png';
import all4basket from '../img/all4basket.jpeg';
import mon_pp from '../img/mon_pp.png';
import './Index.css';
import Header from "./Header";
import Footer from "./Footer";

function Index() {
    return (
        <>
        <Header />
        <article>
            <div className="profil">
                <div className="texte_profil">
                    <h1 className="texte_profil_h1">CLÉMENT DEQUIDT - Développeur web</h1>
                    <h2><strong>Quand votre imagination prend vie sur le web</strong></h2>
                </div>
                <div className="image_profil">
                    <img src={photo_clem} alt="Clément Dequidt" loading="lazy"/>
                </div>
            </div>
            <div id="présentation">
                <p>Étudiant en informatique qui a toujours été passionné par le développement web, j'aime donner vie aux idées en créant des sites modernes, simples à utiliser et agréables à regarder.<br /> Je maîtrise les bases du développement de sites internet et je m’intéresse aussi bien à la partie visible pour l’utilisateur qu’à la partie technique qui assure leur bon fonctionnement et leur sécurité.<br /> Mon objectif principal : créer des projets qui allient le design, la performance et la fiabilité.</p> 
            </div>
            <div id="compétences_clés">
                <h2>Mes compétences clés</h2>
                <ul>
                    <li><img src={conception_graphique} alt="Création de sites modernes" loading="lazy"/>Création de sites modernes</li>
                    <li><img src={avis_client} alt="Expérience et interface utilisateur intuitives" loading="lazy"/>Expérience et interface utilisateur intuitives</li>
                    <li><img src={contenu_web} alt="Développement front-end et back-ends" loading="lazy"/>Développement front-end et back-end</li>
                    <li><img src={securite_web} alt="Sécurité et performance" loading="lazy"/>Sécurité et performance</li>
                </ul>
            </div>
            <div id="projets_recents">
            <h2>Projets récents</h2>
                <ul>
                    <li>
                        <img src={all4basket} alt="All4Basket" loading="lazy"/>
                        <p>All4Basket</p>
                        <p>Dans le cadre d'un projet en équipe de quatre à l'IUT de Calais, création d'une application web sur le basket aux Jeux Olympiques 2024.</p>
                    </li>
                    <li>
                        <img src={mon_pp} alt="Mon Programme Perso" loading="lazy"/>
                        <p>Mon Programme Perso</p>
                        <p>Application web pour gérer des tâches dans un calendrier avec catégories et accès rapide à la prochaine tâche.</p>
                    </li>
                </ul>
                <button><Link to="/work">Voir plus de projets</Link></button>
            </div>
        </article>
        <Footer />
        </>
    );
}

export default Index;