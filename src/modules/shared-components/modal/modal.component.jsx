import React from 'react';

import { withTranslation } from 'react-i18next'
// import i18n from '../../../i18n'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './modal.component.sass'

const ModalComponent = (props) => {

    return (   
        <div>
            <div className={`modal-overlay ${props.show ? 'active' : ''}`}  onClick={props.close}></div>
            <div className={`modal-wrapper ${props.show ? 'active' : ''}`}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <FontAwesomeIcon icon={faTimes} onClick={props.close} className="close-modal-btn" />
                </div>
                <div className="modal-body">
                    <p>
                        aaaa
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(ModalComponent)