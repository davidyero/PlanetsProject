import { Text, TouchableOpacity, View } from "react-native";
import {SuperSwitchStyles} from './superSwitch.styles';
import {SuperSwitchType} from './superSwitch.type';
import { use } from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const SuperSwitch = ({setShowFavorites}: SuperSwitchType) => {
  const {t} = useTranslation();
  const [selected, setSelected] = useState('all');

  const handleSelected = (selected: string) => {
    setSelected(selected);
    setShowFavorites(selected === 'favorites');
  }

  return (
    <View style={SuperSwitchStyles.container}>
      <View style={SuperSwitchStyles.switch}>
        <TouchableOpacity
          style={[
            SuperSwitchStyles.borderRadiusLeft,
            SuperSwitchStyles.containerText,
            selected === 'all' ?
            SuperSwitchStyles.selected : {}
          ]}
          onPress={() => handleSelected('all')}>
          <Text style={[SuperSwitchStyles.text, selected === 'all' ? SuperSwitchStyles.selectedText : {}]}>
            {t('component.switch.all')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            SuperSwitchStyles.borderRadiusRight,
            SuperSwitchStyles.containerText,
            selected === 'favorites' ?
              SuperSwitchStyles.selected : {}
          ]}
          onPress={() => handleSelected('favorites')}>
          <Text style={[SuperSwitchStyles.text, selected === 'favorites' ? SuperSwitchStyles.selectedText : {}]}>
            {t('component.switch.favorites')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
