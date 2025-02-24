import { Text, TouchableOpacity, View } from "react-native";
import {SettingsViewStyles} from './settingsView.styles';
import { GenericContainerView } from "../../components/GenericContainerView/GenericContainerView.tsx";
import { SettingsViewProps } from "../../navigation/router.types.ts";
import { useTranslation } from 'react-i18next';
import { Colors } from "../../shared/styles/Colors.ts";
import { useState } from "react";
import LangIcon from '../../assets/svg/icons/lang.svg';
import ChevronRightIcon from '../../assets/svg/icons/chevron-right.svg';
import { SuperModal } from "../../components/SuperModal/SuperModal.tsx";
import { LanguagesModal } from "../../components/LanguagesModal/LanguagesModal.tsx";

export const SettingsView = ({navigation}: SettingsViewProps) => {
  const { t } = useTranslation();
  const [showLanguagesModal, setShowLanguagesModal] = useState(false);
  const iconProperties = {
    width: 20,
    height: 20,
    color: Colors.secondary,
    marginLeft: 10,
  };

  const personalizationList = [
    {
      title: t('settings.language'),
      onPress: () => setShowLanguagesModal(true),
      Icon: <LangIcon {...iconProperties} />,
    },
  ];

  const handleCloseLanguagesModal = () => {
    setShowLanguagesModal(false);
  };

  return (
    <GenericContainerView
      showHeader={true}
      title={t('settings.title')}
      goBack={() => navigation.goBack()}>
      <View style={SettingsViewStyles.container}>
        <Text style={SettingsViewStyles.titleCard}>{t('settings.personalization')}</Text>
        <View style={SettingsViewStyles.rowGroup}>
          {personalizationList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={SettingsViewStyles.row}
              onPress={item.onPress}
            >
              <View style={SettingsViewStyles.iconContainer}>{item.Icon}</View>
              <View style={SettingsViewStyles.rowText}>
                <Text style={SettingsViewStyles.textCard}>{item.title}</Text>
                <ChevronRightIcon {...iconProperties} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/*Modals*/}
      <SuperModal
        isVisible={showLanguagesModal}
        title={t('settings.chooseLanguage')}
        onClose={() => handleCloseLanguagesModal()}
        size={'extra-small'}
      >
        <LanguagesModal closeModal={handleCloseLanguagesModal} />
      </SuperModal>
    </GenericContainerView>
  );
};
