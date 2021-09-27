import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const middleWares = [composeWithDevTools()]
const store = createStore(rootReducer, ...middleWares)
export default store
