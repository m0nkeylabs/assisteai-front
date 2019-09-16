import { combineReducers } from 'redux'
import mainStatusReducer from './main-status.reducer'
import indicationsReducer from './indications.reducer'

const rootReducer = combineReducers({
    mainStatus: mainStatusReducer,
    indications: indicationsReducer
})

export default rootReducer