import { Text, TouchableOpacity, View } from 'react-native';
import { LanguagesModalProps } from './LanguagesModal.type';
import {
  LANGUAGES_LIST,
  LanguagesActives,
} from '../../shared/interfaces/transversal';
import EnglishIcon from '../../assets/svg/lang/english.svg';
import SpanishIcon from '../../assets/svg/lang/spanish.svg';
import { LanguagesModalStyles } from './LanguagesModal.styles';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from "../../hooks/useLocalStorage.ts";
import { LOCAL_STORAGE } from "../../shared/constants/LocalStorageConstants.ts";
import { Colors } from "../../shared/styles/Colors.ts";

export const LanguagesModal = ({ closeModal }: LanguagesModalProps) => {
  const { i18n } = useTranslation();
  const {setItem} = useLocalStorage();
  const iconProperties = {
    width: 30,
    height: 30,
  };
  const icons = {
    en: <EnglishIcon {...iconProperties} />,
    es: <SpanishIcon {...iconProperties} />,
  };

  const handleLanguageChange = (language: LanguagesActives) => {
    i18n.changeLanguage(language);
    setItem(LOCAL_STORAGE.LANG, language);
    closeModal();
  };

  return (
    <View style={LanguagesModalStyles.container}>
      {LANGUAGES_LIST.map((language, index) => (
        <TouchableOpacity
          key={index}
          style={[
            LanguagesModalStyles.row,
            i18n.language === language.code
              ? LanguagesModalStyles.rowActive
              : {},
          ]}
          onPress={() =>
            handleLanguageChange(language.code as LanguagesActives)
          }
        >
          {icons[language.code as LanguagesActives]}
          <Text style={LanguagesModalStyles.text}>
            {language[i18n.language as LanguagesActives]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
