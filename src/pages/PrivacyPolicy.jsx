import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

const PrivacyPolicy = () => {

    const { t, i18n } = useTranslation();

    return (
        <section id="impressum" className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>
                    {t('privacyPolicy')}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default PrivacyPolicy;