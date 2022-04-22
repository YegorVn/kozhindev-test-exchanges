import { combineReducers } from 'redux'
import CurrenciesReducer from './reducers/CurrenciesReducer'

const rootReducer = combineReducers({ currencies: CurrenciesReducer })

export default rootReducer
