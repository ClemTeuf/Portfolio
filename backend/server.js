require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Autoriser React
app.use(bodyParser.json());

// CAPTCHA dynamique
app.get('/captcha', (req, res) => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    res.json({ question: `Combien font ${a} + ${b} ?`, answer: a + b });
});

// Route formulaire contact
app.post('/contact', async (req, res) => {
    const { name, email, message, captcha, captchaQuestion } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });
    }

    // Vérification captcha
    const match = captchaQuestion.match(/(\d+)\s*\+\s*(\d+)/);
    if (!match) return res.status(400).json({ success: false, message: 'Captcha question invalide.' });

    const expected = parseInt(match[1], 10) + parseInt(match[2], 10);
    if (parseInt(captcha, 10) !== expected) return res.status(400).json({ success: false, message: 'Captcha incorrect.' });

    // Config Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    const mailOptions = {
        from: email,
        to: process.env.MY_EMAIL || 'ton.email@gmail.com', // ton email pour recevoir les messages
        replyTo: email,
        subject: `Nouveau message de ${name} <${email}>`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        console.error('Erreur envoi mail:', error);
        res.status(500).json({ success: false, message: 'Erreur serveur.' });
    }
});

app.listen(PORT, () => console.log(`Backend démarré sur le port ${PORT}`));