import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Routes from './core/routes';
import { withTranslation } from 'react-i18next';
import './i18n';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import tokenService from './services/token.service';

import { updateSnackbarStatus } from './store/actions/main-status.action';
import { loadProfile } from './store/actions/profile.action';

import HeaderComponent from './modules/components/header';
import FullMenuComponent from './modules/components/full-menu';

import './App.sass';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = ({ snack, updateSnackbarStatus, loadProfile }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    const e = {
      isOpen: false,
      severity: snack.snackbarSeverity,
      message: '',
    };

    updateSnackbarStatus(e);
  };

  const loadProfileUser = () => loadProfile();

  const refreshToken = () => {
    // this.loadedToken$.subscribe(result => {
    //   if (result) {
    //     this.store.dispatch(new fromStore.VerifyToken());
    //     this.validateToken();
    //   }
    // });
  };

  const validateToken = () => {
    const tokenStore = tokenService.getToken();
    const validation = tokenService.validationExpirationDate();
    if (tokenStore) {
      if (validation) loadProfileUser();
      else refreshToken();
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <BrowserRouter>
      <HeaderComponent />
      <FullMenuComponent />
      <Routes />
      <Snackbar
        open={snack.snackbarActive}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={snack.snackbarSeverity}>
          {snack.snackbarMessage}
        </Alert>
      </Snackbar>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({ snack: state.mainStatus });
export default connect(mapStateToProps, { updateSnackbarStatus, loadProfile })(withTranslation()(App));
