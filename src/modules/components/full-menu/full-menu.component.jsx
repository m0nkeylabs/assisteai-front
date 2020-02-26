import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMobileMenuActive } from '../../../store/actions/main-status.action'

import { withTranslation } from 'react-i18next'
import i18n from '../../../i18n'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './full-menu.component.sass'

const FullMenuComponent = ({status, updateMobileMenuActive}) => {
  const menu = [
    {
      logged: false,
      group: '',
      links: [
        {
          name: 'global.indications',
          url: '/',
        },
        {
          name: 'global.how.it.works',
          url: '/how-it-works',
        },
        {
          name: 'global.contact',
          url: '/contact',
        }
      ]
    },
    {
      logged: false,
      group: 'account',
      links: [
        {
          name: 'account.sign.up',
          url: '/create-a-account',
        },
        {
          name: 'account.sign.in',
          url: '/sign-in',
        }
      ]
    }
  ]

  const closeMenu = () => updateMobileMenuActive(!status)

  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <div className="group-links" key={index}>
          {item.group ? <span className="title-group">{i18n.t(item.group)}</span> : null}
          {renderLinks(item.links)}
        </div>
      )
    })
  }

  const renderLinks = (links) => {
    return links.map((link, index) => {
      return (
        <Link to={link.url} key={index}>{i18n.t(link.name)}</Link>
      )
    })
  }

  return (
    <div>
      <div id='overlay-full-menu' className={`${status ? 'active' : ''}`} onClick={closeMenu}></div>
      <div id="full-menu" className={`${status ? 'active' : ''}`} >
        <div id="header-full-menu">
          <FontAwesomeIcon icon={faTimes} onClick={closeMenu} /> Menu
        </div>
        <div id="full-menu-container">
          {renderMenu()}              
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({status: state.mainStatus.mobileMenuActive})
const mapDispatchToProps = dispatch => bindActionCreators({ updateMobileMenuActive }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(FullMenuComponent))