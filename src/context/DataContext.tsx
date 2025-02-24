import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Planet } from "../shared/interfaces/Planet.ts";

export interface DataContextInterface {
  favoriteList: string[];
  planetList: Planet[];
}
export const DEFAULT_Data_STATE: DataContextInterface = {
  favoriteList: [],
  planetList: [],
};
export interface DataContextProps {
  children: React.ReactNode;
}

const DataContext = createContext({
  data: DEFAULT_Data_STATE,
  setData: {} as Dispatch<SetStateAction<DataContextInterface>>,
});

const DataContextProvider = ({ children }: DataContextProps) => {
  const [data, setData] = useState<DataContextInterface>(DEFAULT_Data_STATE);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
