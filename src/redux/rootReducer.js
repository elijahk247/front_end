const INITIAL_STATE = {
    ailments: []
    ,
    isLoggedIn: false,
    isLoading: false
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'LOGIN':
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
        case 'FETCH_AILMENTS':
            return {
                ...state,
                ailments: action.payload
            }
        case 'POST_AILMENT':
            return {
                ...state,
                ailments: [...state.ailments, action.payload]
            }
        case 'UPDATE_AILMENT':

            return state
        case 'DELETE_AILMENT':
            const id = action.payload
            let ailments = [...state.ailments]
            ailments.forEach((ail, idx) => {
                if (ail._id == id) {
                    ailments.splice(idx, 1)
                    return
                }
            })
            return {
                ...state,
                ailments
            }
        default:
            return state
    }
}