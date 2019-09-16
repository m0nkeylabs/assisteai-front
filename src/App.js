import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import './i18n';

import './App.sass';
import Routes from './core/routes'

import HeaderComponent from './modules/components/header'
import FullMenuComponent from './modules/components/full-menu'

function App() {
  return (
    <BrowserRouter> 
      <HeaderComponent />
      <FullMenuComponent />
      <Routes />
    </BrowserRouter> 
  );
}

export default withTranslation()(App);
