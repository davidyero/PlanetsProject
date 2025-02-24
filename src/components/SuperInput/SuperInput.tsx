import { Text, TextInput, View } from 'react-native';
import { SuperInputStyles } from './SuperInput.styles';
import { useState } from 'react';
import { Colors } from '../../shared/styles/Colors';

export interface SuperInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value?: string;
  label: string;
  secureTextEntry?: boolean;
}

export const SuperInput = (props: SuperInputProps) => {
  const [text, setText] = useState(props.value || '');

  const handleChange = (text: string) => {
    setText(text);
    props.onChangeText(text);
  };

  return (
    <View style={SuperInputStyles.container}>
      <Text style={SuperInputStyles.label}>{props.label}</Text>
      <View style={SuperInputStyles.containerInput}>
        <TextInput
          style={SuperInputStyles.input}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.disabled}
          onChangeText={handleChange}
          value={text}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};
