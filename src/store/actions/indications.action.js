const LOAD_INDICATIONS = 'LOAD_INDICATIONS'
const LOAD_INDICATIONS_SUCCESS = 'LOAD_INDICATIONS_SUCCESS'

export const indicationsActions = [
    LOAD_INDICATIONS
]

export const loadIndications = (status) => ({
    type: LOAD_INDICATIONS,
    payload: status
}) 

export const loadIndicationsSuccess = (data) => ({
    type: LOAD_INDICATIONS_SUCCESS,
    payload: data
}) 
