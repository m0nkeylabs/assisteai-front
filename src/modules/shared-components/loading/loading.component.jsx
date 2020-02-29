import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './loading.component.sass';

const LoadingComponent = ({ typeClass, loginProfile }) => {
  const [isActive, setIsActive] = React.useState('');

  useEffect(() => {
    if (loginProfile) {
      setIsActive('isActive');
    } else {
      setIsActive('');
    }
  }, [loginProfile, setIsActive]);

  return (
    <div className={`loading ${typeClass} ${isActive}`}>
      <span className="loading-bar bg-yellow" />
      <span className="loading-bar bg-green" />
      <span className="loading-bar bg-pink" />
      <span className="loading-bar bg-red" />
      <span className="loading-bar bg-blue" />
    </div>
  );
};

LoadingComponent.propTypes = {
  typeClass: PropTypes.string,
  loginProfile: PropTypes.bool.isRequired,
};

LoadingComponent.defaultProps = {
  typeClass: null,
};

const mapStateToProps = state => ({ loginProfile: state.profile.isLoading });
export default compose(connect(mapStateToProps)(LoadingComponent));
