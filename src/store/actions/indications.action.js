export const LOAD_INDICATIONS = '[Indications] Load Indications';
export const LOAD_INDICATIONS_SUCCESS = '[Indications] Load Indications Success';
export const LOAD_INDICATIONS_FAIL = '[Indications] Load Indications Fail';

export const loadIndications = status => ({
  type: LOAD_INDICATIONS,
  payload: status,
});

export const loadIndicationsSuccess = response => ({
  type: LOAD_INDICATIONS_SUCCESS,
  payload: response,
});

export const loadIndicationsFail = response => ({
  type: LOAD_INDICATIONS_FAIL,
  payload: response,
});
