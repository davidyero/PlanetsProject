export type Status =
  | 'info'
  | 'danger'
  | 'warning'
  | 'success'
  | 'disabled'
  | 'alternative';

export type SuperToastType = 'success' | 'error' | 'warning' | 'info';

export interface LanguagesType {
  es: string;
  en: string;
}

export type LanguagesActives = 'es' | 'en';

export const LANGUAGES_LIST = [
  {
    es: 'Español',
    en: 'English',
    code: 'es',
  },
  {
    es: 'Inglés',
    en: 'Spanish',
    code: 'en',
  },
];
