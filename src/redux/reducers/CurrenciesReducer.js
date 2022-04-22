const initialState = {
  currencies: []
}

export default function CurrenciesReducer (state = initialState, action) {
  switch (action.type) {
    case 'CURRENCIES_INDEX':
      return { ...state, currencies: action.payload }
    default:
      return state
  }
}
