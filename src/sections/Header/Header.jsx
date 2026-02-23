import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="hero-wrapper">
            <div className="hero" role="img" aria-label={t('about.headerAlt') || 'Header image'}>
                <img src="/header.jpg" alt="" className="hero-img" aria-hidden="true" />
                <div className="hero-overlay" aria-hidden="true" />
                <div className="hero-content-wrapper">
                    <div className="hero-content">
                        <h1 className="hero-slogan">{t('about.slogan')}</h1>
                        <h2 className="hero-keywords">{t('about.keywords')}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
