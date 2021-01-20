import { combineReducers } from 'redux'
import bankReducer from './bankReducer'
import interfaceDisplayReducer from './interfaceDisplayReducer'
import powerReducer from './powerReducer'

const rootReducer = combineReducers({
  power: powerReducer,
  interfaceDisplayText: interfaceDisplayReducer,
  bankState: bankReducer
})

export default rootReducer