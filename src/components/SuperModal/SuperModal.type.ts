import { ReactNode } from 'react';

export interface SuperModalProps {
  isVisible: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
  size?: 'extra-extra-small' | 'extra-small' | 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
}
