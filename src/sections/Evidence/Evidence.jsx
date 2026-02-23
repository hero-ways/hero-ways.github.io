import React from 'react';
import { useTranslation } from 'react-i18next';
import './Evidence.css';
import ReactMarkdown from 'react-markdown';
import Timeline from '../../components/Timeline/Timeline';

const Evidence = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="evidence" className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>{t('evidence.desc')}</ReactMarkdown>
                <Timeline></Timeline>
            </div>
        </section>
    );
};

export default Evidence;