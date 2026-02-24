
import impressumMD from './impressum.md?raw'
import privacyPolicyMD from './privacyPolicy.md?raw'
import aboutMD from './about.md?raw';
import backgroundMD from './background.md?raw';
import projectsJS from './projects.js';
import evidenceMD from './evidence.md?raw';

const en = {
  menu: {
    about: "About Hero Ways",
    background: "Background",
    evidence: "Evidence",
    benefits: "Benefits",
    nextSteps: "Next Steps",
    contact: "Contact"
  },
  about: {
    slogan: "Hero Ways: Helping patients navigate their way through clinical care pathways.",
    keywords: "To inform is to empower.",
    desc: aboutMD,
    screenshots: [
      {
        img: "/about-images/1-screen.jpg",
        text: "Care pathway visualization"
      },
      {
        img: "/about-images/2-screen.jpg",
        text: "Exploring individual stages"
      },
      {
        img: "/about-images/3-screen.jpg",
        text: "Information cards"
      },
      {
        img: "/about-images/4-screen.jpg",
        text: "Videos (e.g., patient testimonials)"
      }
    ]
  },
  background: { desc: backgroundMD, lead: 'Project Lead', support: 'Supported by', funded: "Funded as part of" },
  evidence: { desc: evidenceMD, projects: projectsJS, publications: "Publication(s):" },
  contact: {
    heading: "Contact",
    description: "If you have any questions or comments, or would like to receive more information about **aktiv**plan, please feel free to contact us at any time.",
    subheading: "Ludwig Boltzmann Institute for Digital Health and Prevention",
    address: "Lindhofstr. 22, 5020 Salzburg, Austria",
    phone: "Phone",
    email: "Email",
    github: "Find the source-available implementation on",
  },
  impressum: impressumMD,
  privacyPolicy: privacyPolicyMD,
  footer: {
    impressum: "Impressum",
    privacy: "Privacy Policy"
  }
};

export default en;