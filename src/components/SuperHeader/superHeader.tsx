import { Text, TouchableOpacity, View } from "react-native";
import { SuperHeaderStyles } from './superHeader.styles';
import SettingsIcon from '../../assets/svg/icons/settings.svg';
import { Colors } from '../../shared/styles/Colors.ts';
import { SuperHeaderType } from "./superHeader.type.ts";

export const SuperHeader = ({actionClick}: SuperHeaderType) => {
  const iconProperties = {
    width: 24,
    height: 24,
    color: Colors.primary,
  };
  return (
    <>
      <View style={SuperHeaderStyles.container}>
        <Text style={SuperHeaderStyles.textContainer}>
          <Text style={[SuperHeaderStyles.title, SuperHeaderStyles.firstText]}>Planets</Text>
          <Text style={[SuperHeaderStyles.title, SuperHeaderStyles.secondText]}>Project</Text>
        </Text>
        <TouchableOpacity onPress={actionClick}>
          <SettingsIcon {...iconProperties} />
        </TouchableOpacity>
      </View>
    </>
  );
};
