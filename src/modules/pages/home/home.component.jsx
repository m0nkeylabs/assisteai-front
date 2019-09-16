import React from 'react';
import ChangeLanguageComponent from '../../components/change-language/'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'

import { Loading } from '../../shared-components'

import { loadIndications } from '../../../store/actions/indications.action'
import { withTranslation } from 'react-i18next'
// import i18n from '../../../i18n'

import './home.component.sass'
const HomeComponent = ({status, loadIndications}) => {
  // const teste = () => {loadIndications('a')}
  let indicationsList = []

  const getImage = (image) => {
    return {
      backgroundImage: 'url(' + image + ')'
    }
  }
  const renderListIndications = () => {
    if (!status.loadingIndications) {
      return status.indicationsList.map((item, index) => {
        return (
          <div key={index} className="card rating-6">
            <div className="poster-container">
              <div className="img-poster" style={{backgroundImage : 'url(' + item.poster_path + ')'}}></div>
              <div className="overlay">
                <div className="poster-detail flex-column">
                  <h3 className="poster-title">{item.original_title} ({item.year})</h3>

                  <span className="poster-chip orange">{item.category}</span>

                  <div className="rating-container flex-column">
                    <span>Avaliação Média</span>
                    <span className="poster-chip rating-6">{item.average_rating}</span>

                    <span>Última avaliação</span>
                    <span className="poster-chip rating-6">{item.last_rating}</span>
                  </div>

                  <div className="poster-actions flex-row">
                      <button type="button" className="watch-later">access_time</button>
                      <button type="button" className="indicate-now">playlist_add</button>
                      <a href="#32" className="more-details">arrow_forward</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return (<Loading />)
    }
  }

  return (
    <main>
      <section className="cards-container flex-row flex-wrap">
        {renderListIndications()}
      </section>
      <ChangeLanguageComponent />
    </main>      
  );
}

const mapStateToProps = state => ({status: state.indications})
const mapDispatchToProps = dispatch => bindActionCreators({ loadIndications }, dispatch(loadIndications()))
export default compose(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomeComponent)))