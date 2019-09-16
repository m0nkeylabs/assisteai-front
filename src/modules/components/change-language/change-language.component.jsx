import React from 'react';
import { changeLanguage } from '../../../i18n'
import './change-language.component.sass';

const ChangeLanguageComponent = () => {
  return (        
    <div>
      <button onClick={() => changeLanguage('en')}>ENG</button>
      <button onClick={() => changeLanguage('pt-BR')}>BR</button>
    </div>
  );
}

export default ChangeLanguageComponent