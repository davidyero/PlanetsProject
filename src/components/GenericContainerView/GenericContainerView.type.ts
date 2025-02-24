import { ReactNode } from "react";

export interface GenericContainerViewProps {
  children: ReactNode;
  showHeader?: boolean;
  title?: string;
  goBack?: () => void;
}
