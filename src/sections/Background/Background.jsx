import React from 'react';
import { useTranslation } from 'react-i18next';
import './Background.css';
import ReactMarkdown from 'react-markdown';

const Background = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="background" className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>{t('background.desc')}</ReactMarkdown>
                <p className='logo-header'>{t('background.lead')}</p>
                <div className="logo-container">
                    <div className="logo-wrapper primary-logo">
                        <a href="https://dhp.lbg.ac.at/?lang=en" target="_blank">
                            <img src="/logos/LBI-DHP.svg" />
                        </a>
                    </div>
                </div>
                <br/>
                <p className='logo-header'>{t('background.support')}</p>
                <div className="logo-container">
                    <div className="logo-wrapper">
                        <a href="https://salk.at/sportmedizin/" target="_blank">
                            <img src="/logos/SALK.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://lbg.ac.at/open-innovation-in-science/" target="_blank">
                            <img src="/logos/LBG-OIS.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://redox-interactive.com/" target="_blank">
                            <img src="/logos/Redox.png" />
                        </a>
                    </div>
                </div>
                <br/>
                <p className='logo-header'>{t('background.funded')}</p>
                <div className="logo-container">
                    <div className="logo-wrapper">
                        <a href="https://prehab2rehab.at/" target="_blank">
                            <img src="/logos/Prehab2Rehab.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Background;
