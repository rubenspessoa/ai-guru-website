import { translations, defaultLang, type Lang, type TranslationKey } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL || '/';
  const pathWithoutBase = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const [lang] = pathWithoutBase.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (lang === defaultLang) return `${base}${cleanPath}`;
  return `${base}${lang}/${cleanPath}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'de' : 'en';
}

export function getAlternatePath(currentPath: string, currentLang: Lang): string {
  const base = import.meta.env.BASE_URL || '/';
  const targetLang = getAlternateLang(currentLang);
  // Strip base prefix from current path for clean processing
  const pathWithoutBase = currentPath.startsWith(base) ? currentPath.slice(base.length) : currentPath.replace(/^\//, '');
  if (currentLang === defaultLang) {
    return `${base}de${pathWithoutBase ? `/${pathWithoutBase}` : ''}` || `${base}de`;
  }
  const withoutLangPrefix = pathWithoutBase.replace(/^de\/?/, '') || '';
  return targetLang === defaultLang ? `${base}${withoutLangPrefix}` : `${base}${targetLang}/${withoutLangPrefix}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
