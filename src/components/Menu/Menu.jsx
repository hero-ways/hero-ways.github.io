import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import './Menu.css';

function Menu() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.resolvedLanguage === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleNavigateToSection = (e, sectionId) => {
      e.preventDefault();
      setOpen(false);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = ['about', 'background', 'evidence', 'contact'];

  return (
    <nav className="menu">
      <div className="menu-header">
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            if (location.pathname !== '/') {
              navigate('/');
              window.scrollTo(0, 0);
            } else {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }
          }}
        >
          <img className="logo" src="/logo.svg" alt="Logo" />
        </Link>

        <ul className="menu-items desktop-only">
          {sections.map((section) => (
            <li key={section}>
              <Link to={`/${section}`}  onClick={(e) => handleNavigateToSection(e, section)}>
                {t(`menu.${section}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="desktop-only">
          <button className="lang-btn" onClick={toggleLanguage}>
            {i18n.resolvedLanguage === 'en' ? 'DE' : 'EN'}
          </button>
        </div>

        <div className="mobile-only menu-right">
          <button className="lang-btn-mobile" onClick={toggleLanguage}>
            {i18n.resolvedLanguage === 'en' ? 'DE' : 'EN'}
          </button>

          <button className="burger-btn" onClick={() => setOpen(!open)}>
            {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="menu-items mobile-only">
          {sections.map((section) => (
            <li key={section}>
              <Link to={`/${section}`} onClick={(e) => handleNavigateToSection(e, section)}>
                {t(`menu.${section}`)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Menu;