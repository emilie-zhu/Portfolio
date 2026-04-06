import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1>{t('contact')}</h1>
            <p>{t('contactIntro')}</p>
            <div className="contact-links">
                <a href="https://github.com/emilie-zhu" target="_blank" >
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/emilie-zhu-2000/" target="_blank" >
                    LinkedIn
                </a>
                <a href="mailto:emiliezhu1@gmail.com">
                    Email
                </a>
            </div>
        </div>
    );
}