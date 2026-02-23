import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Footer.css';
import Contact from '../../sections/Contact/Contact';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <section id="contact" className="wrapper">
          <Contact />
          <div className="text-block">
            <Link to="/impressum">{t('footer.impressum')}</Link>
            <span> | </span>
            <Link to="/privacypolicy">{t('footer.privacy')}</Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;