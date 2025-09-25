import React from "react";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './About.css';
import Header from "./Header";
import Footer from "./Footer";

function About() {
    return (
        <>
        <Header />
        <article className="competence-page">
            <h1>Politique de confidentialité</h1>

            <section>
                <h2>Collecte des données personnelles</h2>
                <p>
                    Nous collectons uniquement les informations que vous nous fournissez
                    volontairement via le formulaire de contact (nom, email, message). Aucune autre
                    donnée personnelle n’est collectée automatiquement.
                </p>
            </section>

            <section>
                <h2>Utilisation des données</h2>
                <p>
                    Les données recueillies sont utilisées exclusivement pour répondre à
                    vos demandes ou vous fournir les informations sollicitées. Elles ne
                    sont en aucun cas transmises à des tiers à des fins commerciales.
                </p>
            </section>

            <section>
                <h2>Sécurité des données</h2>
                <p>
                    Nous mettons en place des mesures techniques et organisationnelles
                    pour protéger vos informations personnelles contre tout accès non
                    autorisé, divulgation ou modification.
                </p>
            </section>

            <section>
                <h2>Droits des utilisateurs</h2>
                <p>Conformément à la réglementation sur la protection des données, vous avez le droit de :</p>
                <ul>
                    <li>Accéder à vos données personnelles</li>
                    <li>Les rectifier si elles sont inexactes</li>
                    <li>Demander leur suppression</li>
                    <li>Vous opposer à leur traitement pour des raisons légitimes</li>
                </ul>
            </section>

            <section>
                <h2>Cookies</h2>
                <p>
                    Ce site n’utilise pas de cookies pour collecter des informations
                    personnelles. Les cookies éventuels servent uniquement à des fins
                    techniques et de performance (ex : mémoriser vos préférences
                    d’affichage).
                </p>
            </section>
        </article>
        <Footer />
        </>
    );
}

export default About;