import { combineReducers } from 'redux'

import login from './login'
import modalLogin from './modalLogin'

export default combineReducers({
    login,
    modalLogin
})