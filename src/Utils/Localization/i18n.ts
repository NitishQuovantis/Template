import I18n from 'react-native-i18n';
import en from './en';

I18n.fallbacks = true;

// Not working when I passed using shorthand notation
// I18n.translations = {
//   en,
// };

I18n.translations = {
  en: {...en},
};

function strings(name: string, parameter: object) {
  return I18n.t(name, parameter);
}

export {en, strings};
