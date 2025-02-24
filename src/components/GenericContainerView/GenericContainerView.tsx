import { SafeAreaView, View } from 'react-native';
import { GenericContainerViewStyles } from './GenericContainerView.styles';
import { GenericContainerViewProps } from '../../views/HomeView/HomeView.type';

export const GenericContainerView = (props: GenericContainerViewProps) => {
  return (
    <SafeAreaView style={GenericContainerViewStyles.container}>
      <View style={GenericContainerViewStyles.containerView}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};
