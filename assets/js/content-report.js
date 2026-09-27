(function () {
  const translations = {
    en: {
      title: "Report illegal content",
      intro: "Use this form to prepare a structured notice. Submitting opens your email app with the information addressed to Somewhere; review and send the email to complete the report.",
      name: "Your name",
      email: "Your email address",
      location: "Exact location of the content",
      locationHelp: "Include a trip ID, invitation URL, screenshot reference or other information that lets us locate it.",
      explanation: "Why you believe the content is illegal",
      law: "Relevant law or authority guidance (optional)",
      action: "Requested action (optional)",
      goodFaith: "I confirm in good faith that the information in this notice is accurate and complete.",
      button: "Prepare email report",
      privacy: "The information is used to review the report, communicate the outcome and meet legal recordkeeping duties.",
    },
    fr: {
      title: "Signaler un contenu illicite",
      intro: "Ce formulaire prépare un signalement structuré. Son envoi ouvre votre application de messagerie avec les informations adressées à Somewhere ; vérifiez puis envoyez l’e-mail pour terminer le signalement.",
      name: "Votre nom",
      email: "Votre adresse e-mail",
      location: "Emplacement exact du contenu",
      locationHelp: "Indiquez l’identifiant du voyage, l’URL d’invitation, une référence de capture ou toute information permettant de le localiser.",
      explanation: "Pourquoi estimez-vous ce contenu illicite ?",
      law: "Texte juridique ou indication d’une autorité (facultatif)",
      action: "Mesure demandée (facultatif)",
      goodFaith: "Je confirme de bonne foi que les informations de ce signalement sont exactes et complètes.",
      button: "Préparer l’e-mail",
      privacy: "Ces informations servent à examiner le signalement, communiquer la décision et respecter les obligations légales de conservation.",
    },
    de: {
      title: "Rechtswidrige Inhalte melden",
      intro: "Dieses Formular bereitet eine strukturierte Meldung vor. Beim Absenden öffnet sich Ihre E-Mail-App mit den an Somewhere adressierten Angaben. Prüfen und senden Sie die E-Mail, um die Meldung abzuschließen.",
      name: "Ihr Name",
      email: "Ihre E-Mail-Adresse",
      location: "Genaue Fundstelle des Inhalts",
      locationHelp: "Nennen Sie Reise-ID, Einladungs-URL, Screenshot-Verweis oder andere Angaben, mit denen der Inhalt auffindbar ist.",
      explanation: "Warum halten Sie den Inhalt für rechtswidrig?",
      law: "Rechtsgrundlage oder Behördenhinweis (optional)",
      action: "Gewünschte Maßnahme (optional)",
      goodFaith: "Ich bestätige nach bestem Wissen, dass die Angaben richtig und vollständig sind.",
      button: "E-Mail-Meldung vorbereiten",
      privacy: "Die Angaben werden zur Prüfung, Ergebnismitteilung und gesetzlichen Dokumentation verwendet.",
    },
    es: {
      title: "Denunciar contenido ilegal",
      intro: "Este formulario prepara una denuncia estructurada. Al enviarlo se abre su aplicación de correo con la información dirigida a Somewhere; revísela y envíe el correo para completar la denuncia.",
      name: "Su nombre",
      email: "Su correo electrónico",
      location: "Ubicación exacta del contenido",
      locationHelp: "Incluya el ID del viaje, URL de invitación, referencia de captura u otra información que permita localizarlo.",
      explanation: "Por qué considera que el contenido es ilegal",
      law: "Norma u orientación de una autoridad (opcional)",
      action: "Medida solicitada (opcional)",
      goodFaith: "Confirmo de buena fe que la información de esta denuncia es exacta y completa.",
      button: "Preparar correo de denuncia",
      privacy: "La información se usa para revisar la denuncia, comunicar el resultado y cumplir las obligaciones legales de conservación.",
    },
  };

  function initialize() {
    const form = document.querySelector("[data-content-report]");
    if (!form) return;
    let language = "en";
    try {
      const requested = new URLSearchParams(window.location.search).get("lang");
      if (translations[requested]) language = requested;
    } catch (_) {
      // English remains the fallback for malformed URLs.
    }
    const copy = translations[language];
    document.documentElement.lang = language;
    document.title = `Somewhere — ${copy.title}`;
    document.querySelectorAll("[data-report-i18n]").forEach((element) => {
      const value = copy[element.dataset.reportI18n];
      if (value) element.textContent = value;
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const values = new FormData(form);
      const body = [
        "Structured notice of alleged illegal content",
        "",
        `Reporter: ${values.get("name")}`,
        `Reporter email: ${values.get("email")}`,
        `Content location: ${values.get("location")}`,
        "",
        "Explanation:",
        values.get("explanation"),
        "",
        `Relevant law or guidance: ${values.get("law") || "Not provided"}`,
        `Requested action: ${values.get("action") || "Not provided"}`,
        `Form language: ${language}`,
        "",
        "Good-faith declaration: Confirmed",
      ].join("\n");
      const subject = "Illegal content notice — Somewhere";
      window.location.href = `mailto:contact@npsomewhere.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  document.addEventListener("DOMContentLoaded", initialize);
})();
