const INITIAL_STATE = {
    isLoggedIn: false
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGISTER':
            return state
        case 'LOGIN':
            console.log('User has logged in from reducer boiyo')
            return {
                ...state,
                isLoggedIn: true
            }
        case 'ERROR':
            return state
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}