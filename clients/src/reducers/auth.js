const initialState = {
    user: null,
    isAuthenticated: false
}
const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER':
            return {...state, user: action.payload, isAuthenticated: true };
        case 'SIGNIN_USER':
            return {...state, user: action.payload, isAuthenticated: true };
        default:
            return state;
    }
}

export default auth;