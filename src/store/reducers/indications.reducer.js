const INITIAL_STATE = {
    indicationsList: [],
    currentPage: 1,
    lastPage: 1,
    loadingIndications: false
}

export default function indicationsReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_INDICATIONS':
            return {
                ...state,
                loadingIndications: true
            }
        case 'LOAD_INDICATIONS_SUCCESS':
                return {
                    ...state,
                    indicationsList: action.payload.data,
                    currentPage: action.payload.current_page,
                    lastPage: action.payload.last_page,
                    loadingIndications: false
                }
        default:
            return state
    }
}