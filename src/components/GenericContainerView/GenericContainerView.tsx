import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { GenericContainerViewStyles } from './GenericContainerView.styles';
import { GenericContainerViewProps } from "./GenericContainerView.type.ts";
import ChevronLeftIcon from '../../assets/svg/icons/chevron-left.svg';
import { Colors } from "../../shared/styles/Colors.ts";

export const GenericContainerView = (
  {
    children,
    showHeader,
    title,
    goBack
  }: GenericContainerViewProps) => {

  const iconProperties = {
    width: 24,
    height: 24,
    color: Colors.primary,
  };

  return (
    <SafeAreaView style={GenericContainerViewStyles.container}>
      {
        showHeader && (
          <View style={GenericContainerViewStyles.containerHeader}>
            <TouchableOpacity>
              <ChevronLeftIcon {...iconProperties} onPress={goBack} />
            </TouchableOpacity>
            <Text style={GenericContainerViewStyles.text}>{title}</Text>
          </View>
        )
      }
      <View style={GenericContainerViewStyles.containerView}>
        {children}
      </View>
    </SafeAreaView>
  );
};
