import React from 'react';
import {Link} from 'react-router-dom';
import linkedinImg from '../img/linkedin.png';
import githubImg from '../img/github.png';
import instaImg from '../img/insta.png';
import './Header.css';

function Header() {
    return (
        <nav>
            <div className="pages" id="nav-links">
                <Link to="/">ACCUEIL</Link>
                <Link to="/work">MES TRAVAUX</Link>
                <Link to="/about">À PROPOS</Link>
            </div>
        
            <div className="réseaux-sociaux">
                <a href="https://www.linkedin.com/in/clément-dequidt/" target="_blank"><img src={linkedinImg} alt="LinkedIn" class="réseaux-sociaux-img" loading="lazy"/></a>
                <a href="https://github.com/ClemTeuf" target="_blank"><img src={githubImg} alt="GitHub" class="réseaux-sociaux-img" loading="lazy"/></a>
                <a target="_blank"><img src={instaImg} alt="Instagram" class="réseaux-sociaux-img" loading="lazy"/></a>
            </div>

            <div className="burger" id="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Header;