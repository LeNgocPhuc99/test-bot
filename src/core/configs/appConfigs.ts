export const SUPPORT_LANGUAGES = [
  {
    emoji: "🇬🇧",
    label: "English",
    code: "en",
  },
  {
    emoji: "🇷🇺",
    label: "Русский",
    code: "ru",
  },
  {
    emoji: "🇮🇩",
    label: "Bahasa Indo",
    code: "id",
  },
  {
    emoji: "🇵🇭",
    label: "Filipino",
    code: "ph",
  },
];

export function getTelegramSupportLanguagueCode() {
  try {
    // @ts-ignore
    let _defaultTelegramLanguageCode = Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
    switch (_defaultTelegramLanguageCode) {
      case 'en':
      case 'ru':
      case 'id':
        return _defaultTelegramLanguageCode;
    }
  } catch (e) {

  }
  return 'en';
}