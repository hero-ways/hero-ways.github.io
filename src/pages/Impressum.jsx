import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

const Impressum = () => {

    const { t, i18n } = useTranslation();

    return (
        <section id="impressum" className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>
                    {t('impressum')}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default Impressum;