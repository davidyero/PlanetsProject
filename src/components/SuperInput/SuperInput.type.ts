export interface SuperInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value?: string;
  label: string;
  secureTextEntry?: boolean;
}
