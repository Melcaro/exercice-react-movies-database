import React from 'react';

export const ColorTheme = props => {
  console.log(props);
  const { colorTheme, changeColor } = props;

  const changeColorTheme = ({ target: { value } }) => {
    changeColor(value);
  };

  return (
    <div>
      <select onChange={changeColorTheme} value={colorTheme}>
        <option value="dark">Dark Theme</option>
        <option value="light">Light Theme</option>
      </select>
    </div>
  );
};
