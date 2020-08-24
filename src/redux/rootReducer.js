const INITIAL_STATE = {
    isLoggedIn: false
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    console.log('from reducer')
    console.log(action.type)
    switch (action.type) {
        case 'LOGIN':
            return state
        default:
            return state
    }
}