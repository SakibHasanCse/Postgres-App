import ApiCall from '../ApiCall/index'

export const signUp = (dispatch) => async(user) => {
    try {
        dispatch({ type: 'SIGNUP_USER_LOADDING', })
        const response = await ApiCall('auth/signup', 'POST', user)
        return dispatch({ type: 'SIGNUP_USER_SUCCESS', payload: response.data })
    } catch (err) {
        return dispatch({ type: 'SIGNUP_USER_ERROR', payload: err.response.data })
    }


}
export const signIn = async(user) => async dispatch => {
    try {
        dispatch({ type: 'SIGN_USER_LOADDING', })
        const response = await ApiCall('auth/signin', 'POST', user)
        return dispatch({ type: 'SIGNIN_USER_SUCCESS', payload: response.data })
    } catch (err) {
        return dispatch({ type: 'SIGNIN_USER_ERROR', payload: err.response.data })
    }


}