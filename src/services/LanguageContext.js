import React from 'react';

const themes = {
  language: 'en',
  toggleLanguage: () => null,
};

export const ThemeContext = React.createContext(themes);
