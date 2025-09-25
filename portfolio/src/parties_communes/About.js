import React from "react";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import html_css from '../img/html_css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import nodejs from '../img/nodejs.png';
import api from '../img/api.png';
import securite from '../img/securite.png';
import ui_ux from '../img/ui_ux.png';
import './About.css';
import Header from "./Header";
import Footer from "./Footer";

function About() {
    return (
        <>
        <Header />
        <article>
            <h1>À PROPOS DE MOI</h1>
            <div className="about_profil">
                <h2>Qui suis-je ?</h2>
                <p>Je suis passionné par le développement web depuis mes débuts en informatique, même si je n’avais que très peu d’expérience à ce moment-là. Depuis, c’est devenu une évidence : je veux créer des sites web qui répondent aux besoins et aux rêves des clients.</p>
                <p>Je travaille principalement avec <strong>HTML/CSS, JavaScript et React</strong>, mais je suis également à l’aise avec la gestion côté serveur et la sécurité des applications web.</p>
                <p>Mon objectif : créer des projets qui allient design et performance, tout en offrant une expérience utilisateur optimale.</p>
            </div>
            <div className="competences">
                <h2>Mes compétences clés pour vous servir</h2>
                <ul>
                    <li><img src={html_css} alt="HTML/CSS" loading="lazy"/><Link to="/htmlcss">HTML/CSS<br />Création de sites web modernes et responsives, avec des mises en page claires et adaptées à tous les écrans.</Link></li>
                    <li><img src={js} alt="JavaScript" loading="lazy"/><Link to="/javascript">JavaScript<br />Ajout d’interactivité et de fonctionnalités dynamiques pour améliorer l’expérience utilisateur.</Link></li>
                    <li><img src={react} alt="React" loading="lazy"/><Link to="/reactjs">React<br />Développement d’applications web modulaires et performantes grâce à ce framework moderne</Link></li>
                    <li><img src={nodejs} alt="Node.js" loading="lazy"/><Link to="/nodejs">Node.js<br />Gestion côté serveur et création d’API pour rendre les applications complètes.</Link></li>
                    <li><img src={api} alt="API" loading="lazy"/><Link to="/api">API<br />Connexion d’applications à des services externes pour récupérer ou envoyer des données.</Link></li>
                    <li><img src={securite} alt="Sécurité" loading="lazy"/><Link to="/security">Sécurité web<br />Protection des données des utilisateurs et sécurisation des applications contre les vulnérabilités.</Link></li>
                    <li className="derniere_comp"><img src={ui_ux} alt="UI/UX" loading="lazy"/><Link to="/uiux">UI/UX<br />Conception d’interfaces intuitives et expériences utilisateur fluides et agréables.</Link></li>
                </ul>
            </div>

            <div className="cta">
                <h2>Prêt à collaborer ?</h2>
                <p>Si vous cherchez un développeur web passionné et créatif, n’hésitez pas à me contacter.</p>
                <Link to="/contact" className="btn-cta">Contactez-moi</Link>
            </div>
        </article>
        <Footer />
        </>
    );
}

export default About;