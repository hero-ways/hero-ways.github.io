
import impressumMD from './impressum.md?raw'
import privacyPolicyMD from './privacyPolicy.md?raw'
import aboutMD from './about.md?raw';
import backgroundMD from './background.md?raw';
import projectsJS from './projects.js';
import evidenceMD from './evidence.md?raw';

const de = {
  menu: {
    about: "Über Hero Ways",
    background: "Hintergrund",
    evidence: "Evidenz",
    benefits: "Mehrwert",
    nextSteps: "Nächste Schritte",
    contact: "Kontakt"
  },
  about: {
    slogan: "Hero Ways: Orientierung für Patient:innen entlang des Versorgungspfades.",
    keywords: "Information gibt Stärke.",
    desc: aboutMD,
    screenshots: [
      {
        img: "/about-images/1-screen.jpg",
        text: "Visualisierung Versorgungspfad"
      },
      {
        img: "/about-images/2-screen.jpg",
        text: "Erkunden einzelner Stationen"
      },
      {
        img: "/about-images/3-screen.jpg",
        text: "Informationskarten"
      },
      {
        img: "/about-images/4-screen.jpg",
        text: "Videos (z. B. Erfahrungsberichte)"
        }
    ]
  },
  background: { desc: backgroundMD, lead: 'Projektleitung', support: 'Unterstützt durch', funded: "Gefördert im Rahmen von"},
  evidence: { desc: evidenceMD, projects: projectsJS, publications: "Publikation(en):" },
  contact: {
    heading: "Kontakt",
    description: "Wenn Sie Fragen oder Anmerkungen haben oder mehr Informationen über die Verwendung von Hero Ways erhalten möchten, können Sie sich jederzeit gerne an uns wenden.",
    subheading: "Ludwig Boltzmann Institut für Digitale Gesundheit und Prävention",
    address: "Lindhofstr. 22, 5020 Salzburg, Österreich",
    phone: "Telefon",
    email: "E-Mail",
    github: "Finden Sie die quelloffen verfügbare Implementierung auf",
  },
  impressum: impressumMD,
  privacyPolicy: privacyPolicyMD,
  footer: {
    impressum: "Impressum",
    privacy: "Datenschutzerklärung"
  }
};

export default de;
