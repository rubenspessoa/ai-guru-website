import { translations, defaultLang, type Lang, type TranslationKey } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath;
  return `/${lang}${cleanPath}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'de' : 'en';
}

export function getAlternatePath(currentPath: string, currentLang: Lang): string {
  const targetLang = getAlternateLang(currentLang);
  if (currentLang === defaultLang) {
    return `/de${currentPath === '/' ? '' : currentPath}` || '/de';
  }
  const withoutPrefix = currentPath.replace(/^\/de/, '') || '/';
  return targetLang === defaultLang ? withoutPrefix : `/${targetLang}${withoutPrefix}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
