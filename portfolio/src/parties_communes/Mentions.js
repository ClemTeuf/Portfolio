import React from "react";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './About.css';
import Header from "./Header";
import Footer from "./Footer";

function Mentions() {
    return (
        <>
        <Header />
        <article className="competence-page">
            <h1>Mentions légales</h1>

            <section>
                <h2>Éditeur du site</h2>
                <p>
                    Nom : Clément Dequidt<br />
                    Adresse : 27 voie romaine 59380 Crochte<br />
                    Email : <a href="mailto:dequidtclement1@gmail.com">dequidtclement1@gmail.com</a>
                </p>
            </section>

            <section>
                <h2>Hébergement</h2>
                <p>
                    Le site est hébergé par [Nom de l’hébergeur]<br />
                    Adresse : [Adresse de l’hébergeur]<br />
                    Téléphone : [Numéro de l’hébergeur]
                </p>
            </section>

            <section>
                <h2>Propriété intellectuelle</h2>
                <p>
                    Tout contenu présent sur ce site (textes, images, logos, vidéos, etc.) est la propriété de Clément Dequidt ou de ses partenaires et est protégé par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.
                </p>
            </section>

            <section>
                <h2>Responsabilité</h2>
                <p>
                    L’éditeur du site ne peut être tenu responsable des dommages directs ou indirects résultant de l’accès ou de l’utilisation du site, y compris les informations fournies par des tiers.
                </p>
            </section>

            <section>
                <h2>Protection des données personnelles</h2>
                <p>
                    Aucune donnée personnelle n’est collectée via ce site sauf formulaire de contact. Les informations recueillies sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers.
                </p>
            </section>
        </article>
        <Footer />
        </>
    );
}

export default Mentions;