import ApiCall from '../ApiCall/index'

export const signUp = (user) => dispatch => {
    const response = await ApiCall('/signup', 'POST', user)

    return dispatch({ type: 'SIGNUP_USER', payload: response.data })
}
export const signIn = (user) => dispatch => {
    const response = await ApiCall('/signin', 'POST', user)
    return dispatch({ type: 'SIGNIN_USER', payload: response.data })
}