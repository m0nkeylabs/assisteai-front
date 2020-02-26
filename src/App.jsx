import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import './i18n';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import './App.sass';
import { connect } from 'react-redux';

import Routes from './core/routes';

import { updateSnackbarStatus } from './store/actions/main-status.action';

import HeaderComponent from './modules/components/header';
import FullMenuComponent from './modules/components/full-menu';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = ({ snack, updateSnackbarStatus }) => {
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
export default connect(mapStateToProps, { updateSnackbarStatus })(withTranslation()(App));
