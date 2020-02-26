import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import IconButton from '@material-ui/core/IconButton';
import { AccessTime, PlaylistAdd, ArrowForward } from '@material-ui/icons';

import ChangeLanguageComponent from '../../components/change-language';
import i18n from '../../../i18n';

import { Loading } from '../../shared-components';
import { loadIndications } from '../../../store/actions/indications.action';
import { getClassRating, getClassCategory } from '../../../core/class-indications';

import './home.component.sass';

const HomeComponent = ({ state, loadIndications }) => {
  const getImage = image => ({
    backgroundImage: `url(${image})`,
  });

  const renderEmptyListIndications = () => {
    if (!state.loadingIndications) {
      return (
        <div>
          Lista vazia
        </div>
      );
    }
    return null;
  };

  const renderListIndications = () => state.indicationsList.map(item => (
    <div key={`card-${item.id}`} className={`card ${getClassRating(item.average_rating)}`}>
      <div className="poster-container">
        <div className="img-poster" style={getImage(item.poster_path)} />
        <div className="overlay">
          <div className="poster-detail flex-column">
            <h3 className="poster-title">{`${item.original_title} (${item.year})`}</h3>

            <span className={`poster-chip ${getClassCategory(item.category)}`}>
              {i18n.t(`global.${item.category.toLowerCase()}`)}
            </span>

            <div className="rating-container flex-column">
              <span>{i18n.t('global.average.rating')}</span>
              <span className={`poster-chip ${getClassRating(item.average_rating)}`}>{item.average_rating}</span>

              <span>{i18n.t('global.last.rating')}</span>
              <span className={`poster-chip ${getClassRating(item.last_rating)}`}>{item.last_rating}</span>
            </div>

            <div className="poster-actions flex-row">
              <IconButton
                type="button"
                className={`watch-later ${item.watch_later ? 'active' : 'inactive'}`}
              >
                <AccessTime />
              </IconButton>
              <IconButton type="button" className="indicate-now"><PlaylistAdd /></IconButton>
              <a href="#32" className="more-details"><ArrowForward /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const isLoading = () => {
    if (state.loadingIndications) {
      return (<Loading />);
    }
    return '';
  };

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (state.currentPage < state.lastPage) {
      loadIndications(state.currentPage + 1);
    }
  }

  useEffect(() => {
    loadIndications(1);
  }, [loadIndications]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [state]);


  return (
    <main>
      <ChangeLanguageComponent />
      <section className="cards-container flex-row flex-wrap">
        {state.indicationsList.length > 0 ? renderListIndications() : renderEmptyListIndications()}
        {isLoading()}
      </section>
    </main>
  );
};

const mapStateToProps = state => ({ state: state.indications });
export default compose(connect(mapStateToProps, { loadIndications })(withTranslation()(HomeComponent)));
