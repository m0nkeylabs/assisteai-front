import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { updateMobileMenuActive } from '../../../store/actions/main-status.action'

import './header.component.sass';
import { logo } from '../../../assets/img/images'
import { Modal } from '../../shared-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { withTranslation } from 'react-i18next'
import i18n from '../../../i18n'


const HeaderComponent = ({status, updateMobileMenuActive}) => {
  const [modalStatus, setModalStatus] = React.useState(false);

  const openMenuMobile = () => updateMobileMenuActive(!status)  
  const handleModal = () => { setModalStatus(!modalStatus) }
  
  return ( 
    <header id="header">
      <nav id="header-container">
        <div id="nav-web">
          <div id="logo">
            <Link to='/' className="logo"><img src={logo} alt="logo Assiste ai" /></Link>
          </div>
          <div id="hamburger-menu">
            <FontAwesomeIcon icon={faBars} onClick={openMenuMobile} />
          </div>
          <div id="menu">
            <div className="main-menu">
              <Link to='/'>{i18n.t("global.indications")}</Link>
              <Link to='/how-it-works'>{i18n.t("global.how.it.works")}</Link>
              <Link to='/contact'>{i18n.t("global.contact")}</Link>
            </div>
            <div className="auth-menu">
              <span className="link" onClick={handleModal}>{i18n.t("account.create.an.account")}</span>
              {i18n.t("global.or")}
              <span className="link" onClick={handleModal}>{i18n.t("account.sign.in")}</span>
            </div>
          </div>
        </div>
      </nav>

      <Modal show={modalStatus} close={handleModal} size="small" />
    </header>
  );
}

const mapStateToProps = state => ({status: state.mainStatus.mobileMenuActive})
const mapDispatchToProps = dispatch => bindActionCreators({ updateMobileMenuActive }, dispatch)
export default compose(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HeaderComponent)))