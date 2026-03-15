import type { Lang } from '@i18n/translations';

const currencyByLang: Record<string, string> = {
  de: 'EUR',
  en: 'USD',
};

export function createFeatureJsonLd(options: {
  description: string;
  url: string;
  lang: Lang;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Hustlrr',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS, iPadOS, macOS',
    description: options.description,
    url: options.url,
    ...(options.lang !== 'en' && { inLanguage: options.lang }),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: currencyByLang[options.lang] ?? 'USD',
    },
  };
}
