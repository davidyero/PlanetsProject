import { SuperModalProps } from './SuperModal.type';
import { SuperModalStyles } from './SuperModal.styles';
import { View, Text, Modal } from 'react-native';
import CloseIcon from '../../assets/svg/icons/close-circle.svg';
import { Colors } from '../../shared/styles/Colors';
import { ScrollView } from 'react-native-gesture-handler';

export const SuperModal = ({
  title,
  onClose,
  isVisible,
  children,
  description = '',
  size = 'large',
  variant = 'secondary',
}: SuperModalProps) => {
  const modalSize = {
    'extra-extra-small': SuperModalStyles.modalContainerExtraExtraSmall,
    'extra-small': SuperModalStyles.modalContainerExtraSmall,
    small: SuperModalStyles.modalContainerSmall,
    medium: SuperModalStyles.modalContainerMedium,
    large: SuperModalStyles.modalContainerLarge,
  };
  const modalVariant = {
    primary: SuperModalStyles.modalPrimary,
    secondary: SuperModalStyles.modalSecondary,
    tertiary: SuperModalStyles.modalTertiary,
  };
  const iconProperties = {
    width: 24,
    height: 24,
    color: Colors.secondary,
  };
  if (!isVisible) {
    return null;
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      style={{ zIndex: 0 }}
    >
      <View style={[SuperModalStyles.overlay, modalVariant[variant]]} />
      <View style={SuperModalStyles.container}>
        <View
          style={[
            SuperModalStyles.modalContainer,
            modalSize[size],
            modalVariant[variant],
          ]}
        >
          <View style={SuperModalStyles.header}>
            <View style={SuperModalStyles.containerHeader}>
              <Text style={SuperModalStyles.title}>{title}</Text>
              <CloseIcon onPress={onClose} {...iconProperties} />
            </View>
            {description && (
              <Text style={SuperModalStyles.description}>{description}</Text>
            )}
          </View>
          <ScrollView>{children}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};
