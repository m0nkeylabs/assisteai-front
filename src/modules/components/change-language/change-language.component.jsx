import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import { getLanguage, changeLanguage } from '../../../i18n';
import imgEUA from '../../../assets/img/icons/united-states-of-america.png';
import imgBR from '../../../assets/img/icons/brazil.png';

import './change-language.component.sass';

const ChangeLanguageComponent = () => {
  const [lng, setLng] = React.useState(getLanguage);

  const handleLanguage = (language) => {
    setLng(language);
    changeLanguage(language);
  };

  return (
    <div>
      <IconButton
        type="button"
        onClick={() => handleLanguage('en')}
        className={`flag-btn ${lng === 'en' ? 'active' : 'inactive'}`}
      >
        <img src={imgEUA} alt="Flag EUA" />
      </IconButton>
      <IconButton
        type="button"
        onClick={() => handleLanguage('pt-BR')}
        className={`flag-btn ${lng === 'pt-BR' ? 'active' : 'inactive'}`}
      >
        <img src={imgBR} alt="Flag BR" />
      </IconButton>
    </div>
  );
};

export default ChangeLanguageComponent;
