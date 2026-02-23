import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import ReactMarkdown from 'react-markdown';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className='textBlock'>
            <h1>{t('contact.heading')}</h1>
            <p><ReactMarkdown>{t('contact.description')}</ReactMarkdown></p>
            <h3>{t('contact.subheading')}</h3>
            <p>
                {t('contact.address')}
                <br />
                {t('contact.email')}: <a href="mailto:office.dhp@lbg.ac.at">office.dhp@lbg.ac.at</a>
            </p>
                <p>{t('contact.github')}
                    <a
                        href="https://github.com/hero-ways/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/GitHub_Logo_White.png"
                            alt="GitHub Logo"
                            className="githubLogo"
                        />
                    </a>
                </p>
        </div>
    );
};

export default Contact;