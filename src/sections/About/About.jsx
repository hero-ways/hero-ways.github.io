import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './About.css';
import AboutScreenshots from '../../components/Screenshots/Screenshots';

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <section id="about">
            <div className="wrapper">
                <div className='textBlock'>
                    <p>
                        <ReactMarkdown>{t('about.desc')}</ReactMarkdown>
                    </p>
                    <AboutScreenshots />
                </div>
            </div>
        </section>
    );
};

export default About;
