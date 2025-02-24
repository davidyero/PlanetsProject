export interface SuperActionButtonProps {
  actionClick: () => void;
  text: string;
  color?: string;
  label?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
}
