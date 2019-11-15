import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import {findBestAvailableLanguage} from 'react-native-localize';

import en from '../../assets/locales/en.json';
import de from '../../assets/locales/de.json';

interface IObject<T> {
  [index: string]: T;
}

const translationGetters: IObject<any> = {en, de};

// fallback if no available language fits
const fallback = {languageTag: 'en', isRTL: false};

const {languageTag, isRTL} =
  findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

I18nManager.forceRTL(isRTL);

i18n.translations = {
  [languageTag]: translationGetters[languageTag],
};
i18n.locale = languageTag;

export default i18n;
