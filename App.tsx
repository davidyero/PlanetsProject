import React from 'react';
import './src/translate/i18n';
import { ContentView } from './src/views/ContentView/ContentView.tsx';
import { DataContextProvider } from './src/context/DataContext.tsx';

export default function App() {
  return (
    <DataContextProvider>
      <ContentView />
    </DataContextProvider>
  );
}
