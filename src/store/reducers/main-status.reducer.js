const INITIAL_STATE = {
    mobileMenuActive: false
}

export default function mainStatusReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'UPDATE_MOBILE_MENU_ACTIVE':
            return {
                ...state,
                mobileMenuActive: action.payload
            }
        default:
            return state
    }
}