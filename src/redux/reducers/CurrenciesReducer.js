import { transformRequestCurrencies } from '../../utils/transformRequestCurrencies'
const initialState = {
  currencies: []
}

export default function CurrenciesReducer (state = initialState, action) {
  switch (action.type) {
    case 'CURRENCIES_INDEX':
      return { ...state, currencies: transformRequestCurrencies(action.payload) }
    default:
      return state
  }
}
