require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors({ origin: 'https://clement-dequidt-portfolio.netlify.app' }));
app.use(bodyParser.json());

let pendingMessages = {};

app.get('/captcha', (req, res) => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  res.json({ question: `Combien font ${a} + ${b} ?`, answer: a + b });
});

app.post('/contact', async (req, res) => {
  const { name, email, message, captcha, captchaQuestion } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });
  }

  const match = captchaQuestion.match(/(\d+)\s*\+\s*(\d+)/);
  if (!match) return res.status(400).json({ success: false, message: 'Captcha question invalide.' });

  const expected = parseInt(match[1], 10) + parseInt(match[2], 10);
  if (parseInt(captcha, 10) !== expected) {
    return res.status(400).json({ success: false, message: 'Captcha incorrect.' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  pendingMessages[token] = { name, email, message, createdAt: Date.now() };

  const confirmUrl = `https://backend-portfolio-ar9b.onrender.com/confirm?token=${token}`;

  const confirmMail = {
    to: email,
    from: process.env.SENDGRID_VERIFIED_EMAIL,
    subject: "Confirmez votre message",
    text: `Bonjour ${name}, cliquez sur ce lien pour confirmer votre message : ${confirmUrl}`,
    html: `<p>Bonjour ${name},</p>
           <p>Merci d'avoir rempli le formulaire. Cliquez sur ce lien pour confirmer votre message :</p>
           <a href="${confirmUrl}">${confirmUrl}</a>`,
  };

  try {
    await sgMail.send(confirmMail);
    res.json({ success: true, message: "Mail de confirmation envoyé !" });
  } catch (error) {
    console.error('Erreur envoi mail confirmation:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
});

app.get('/confirm', async (req, res) => {
  const { token } = req.query;

  if (!pendingMessages[token]) {
    return res.status(400).send(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Lien invalide</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f8f8f8; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .box { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; }
          h1 { color: #e53935; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>❌ Lien invalide ou expiré</h1>
          <p>Veuillez renvoyer votre message via le formulaire.</p>
          <a href="https://clement-dequidt-portfolio.netlify.app">⬅ Retour au site</a>
        </div>
      </body>
      </html>
    `);
  }


  const { name, email, message, createdAt } = pendingMessages[token];

  if (Date.now() - createdAt > 3600000) {
    delete pendingMessages[token];
    return res.status(400).send(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Lien expiré</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f8f8f8; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .box { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; }
          h1 { color: #ff9800; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>⚠️ Lien expiré</h1>
          <p>Veuillez renvoyer votre message via le formulaire.</p>
          <a href="https://clement-dequidt-portfolio.netlify.app">⬅ Retour au site</a>
        </div>
      </body>
      </html>
    `);
  }

  const finalMail = {
    to: process.env.MY_EMAIL,
    from: process.env.SENDGRID_VERIFIED_EMAIL,
    replyTo: email,
    subject: `Nouveau message confirmé de ${name}`,
    text: message,
  };

  try {
    await sgMail.send(finalMail);
    delete pendingMessages[token];
    res.send(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Confirmation réussie</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f8f8f8; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .box { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; }
          h1 { color: #4caf50; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>✅ Message confirmé et envoyé !</h1>
          <p>Merci d'avoir pris contact, je reviendrai vers vous rapidement.</p>
          <a href="https://clement-dequidt-portfolio.netlify.app">⬅ Retour au site</a>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Erreur envoi mail final:', error);
    res.status(500).send("Erreur serveur lors de l’envoi du message final.");
  }
});

app.listen(PORT, () => console.log(`Backend démarré sur le port ${PORT}`));