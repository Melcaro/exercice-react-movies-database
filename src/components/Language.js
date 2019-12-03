import React from 'react';

export const Language = props => {
  const { languageValue, changeLanguage } = props;

  const changeLang = ({ target: { value } }) => {
    changeLanguage(value);
  };

  return (
    <select onChange={changeLang} value={languageValue}>
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  );
};
