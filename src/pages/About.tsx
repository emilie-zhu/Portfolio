import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

export default function About(): JSX.Element {
    const { t } = useTranslation();

    return <h1>{t('about')}</h1>;
}