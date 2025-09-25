import React from "react";
import { Link } from "react-router-dom";
import linkedinImg from '../img/linkedin.png';
import githubImg from '../img/github.png';
import instaImg from '../img/insta.png';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2025 Clément Dequidt - Développeur web</p>
                <p><Link to="/mentions">Mentions légales</Link> | <Link to="/privacy">Politique de confidentialité</Link></p>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/cl%C3%A9ment-dequidt-404020330/" target="_blank">
                        <img src={linkedinImg} alt="LinkedIn" loading="lazy"/>
                    </a>
                    <a href="https://github.com/ClemTeuf" target="_blank">
                        <img src={githubImg} alt="GitHub" loading="lazy"/>
                    </a>
                    <a href="#">
                        <img src={instaImg} alt="Instagram" loading="lazy"/>
                    </a>
                </div>
                <p>Vous voulez me contacter ? <Link to="/contact">Cliquez ici</Link></p>
            </div>
        </footer>
    );
}

export default Footer;