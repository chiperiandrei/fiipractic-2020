export const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_LOGGED':
            return !state
        default:
            return state
    }
}
