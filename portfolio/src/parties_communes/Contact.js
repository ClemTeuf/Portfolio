import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import API_BASE_URL from "./config";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", captcha: "" });
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  // Charger le captcha depuis le backend
  useEffect(() => {
    async function loadCaptcha() {
      try {
        const res = await fetch(`${API_BASE_URL}/captcha`);
        const data = await res.json();
        setCaptchaQuestion(data.question);
        setCaptchaAnswer(data.answer);
      } catch (err) {
        console.error("Erreur chargement captcha :", err);
      }
    }
    loadCaptcha();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(formData.captcha, 10) !== captchaAnswer) {
      showToast("Captcha incorrect.");
      return;
    }

    setLoading(true);

    const payload = { ...formData, captchaQuestion };

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (result.success) {
        showToast("Un mail de confirmation a été envoyé. Merci de cliquer sur le lien pour valider votre message.");
        setFormData({ name: "", email: "", message: "", captcha: "" });

        const captchaRes = await fetch(`${API_BASE_URL}/captcha`);
        const captchaData = await captchaRes.json();
        setCaptchaQuestion(captchaData.question);
        setCaptchaAnswer(captchaData.answer);
      } else {
        showToast(result.message || "Erreur lors de l'envoi");
      }
    } catch (err) {
      showToast("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <>
      <Header />
      <article className="contact-page">
        <h1>CONTACTEZ-MOI</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message :</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />

          <label>{captchaQuestion}</label>
          <input type="text" name="captcha" value={formData.captcha} onChange={handleChange} required />

          <button type="submit">
            <span className="btn-text">Envoyer</span>
            {loading && <span className="spinner">⏳</span>}
          </button>
        </form>
      </article>

      <div id="toast" className={`toast ${toast ? "show" : ""}`}>{toast}</div>
      <Footer />
    </>
  );
}

export default Contact;