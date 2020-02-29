import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import CloseIcon from '@material-ui/icons/Close';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ListIcon from '@material-ui/icons/List';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { updateMobileMenuActive } from '../../../store/actions/main-status.action';
import { logout } from '../../../store/actions/login.action';

import './header.component.sass';
import { logo } from '../../../assets/img/images';
import { Modal } from '../../shared-components';

import i18n from '../../../i18n';


const HeaderComponent = ({
  status, profile, updateMobileMenuActive, logout,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [typeModal, setTypeModal] = React.useState('signIn');
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);

  // Menu Logged

  const handleToggle = () => {
    setOpenMenu(prevOpen => !prevOpen);
  };

  const handleCloseMenu = (event) => {
    if (event && anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  // Modal

  const handleClickOpen = (type) => {
    setTypeModal(type);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Others

  const handleLogout = () => {
    handleCloseMenu();
    logout();
  };

  const openMenuMobile = () => updateMobileMenuActive(!status);


  const menu = () => (
    <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={`menu-popper ${profile.theme}`}>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCloseMenu}>
              <MenuList autoFocusItem={openMenu} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                <MenuItem onClick={handleCloseMenu}>
                  <PersonOutlineIcon />
                  Meu Perfil
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                  <AccessTimeIcon />
                  Assistir depois
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                  <ListIcon />
                  Minhas indicações
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <CloseIcon />
                  Sair
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  const loginMenu = () => (
    <div className="auth-menu">
      <span className="link" onClick={() => handleClickOpen('signIn')}>{i18n.t('account.sign.in')}</span>
      {i18n.t('global.or')}
      <span className="link" onClick={() => handleClickOpen('signUp')}>{i18n.t('account.sign.up')}</span>
    </div>
  );

  const loggedMenu = () => (
    <div className="logged-menu">
      <span className="name-user">{ profile.name }</span>
      <Avatar
        id="avatar"
        className={`${profile.theme}`}
        ref={anchorRef}
        aria-controls={openMenu ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        alt="User photo"
        src={profile.avatar}
      />
      { menu() }
    </div>
  );

  return (
    <header id="header" className={`${profile?.theme}`}>
      <nav id="header-container">
        <div id="nav-web">
          <div id="logo">
            <Link to="/" className="logo"><img src={logo} alt="logo Assiste ai" /></Link>
          </div>
          <div id="hamburger-menu">
            <FontAwesomeIcon icon={faBars} onClick={openMenuMobile} />
          </div>
          <div id="menu">
            <div className="main-menu">
              <Link to="/">{i18n.t('global.indications')}</Link>
              <Link to="/how-it-works">{i18n.t('global.how.it.works')}</Link>
              <Link to="/contact">{i18n.t('global.contact')}</Link>
            </div>

            {profile ? loggedMenu() : loginMenu() }
          </div>
        </div>
      </nav>
      <Modal open={openModal} onClose={handleCloseModal} typeModal={typeModal} />
    </header>
  );
};

const mapStateToProps = state => ({ status: state.mainStatus.mobileMenuActive, profile: state.profile.profile });
export default compose(
  connect(mapStateToProps, { updateMobileMenuActive, logout })(withTranslation()(HeaderComponent))
);
