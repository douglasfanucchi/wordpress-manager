const defaultState = {
    logged: false,
    jwt: null
}

const types = {
    logar: (state, action) => ({...state, logged: true, jwt: action.jwt})
}

export default function login( state = defaultState, action ) {
    
    let func = types[ action.type ]

    if( !func )
        return state

    return func(state, action)
}