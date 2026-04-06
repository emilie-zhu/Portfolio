import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('intro')}</p>
        </div>
    );
}