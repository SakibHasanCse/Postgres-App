import ApiCall from '../ApiCall/index'

export const signUp = (user) => async dispatch => {

    const response = await ApiCall('auth/signup', 'POST', user)
    console.log(response.data)
    return dispatch({ type: 'SIGNUP_USER', payload: response.data })
}
export const signInApi = async(user) => async dispatch => {
    console.log(user)
    const response = await ApiCall('auth/signin', 'POST', user)
    console.log(response.data)
    return dispatch({ type: 'SIGNIN_USER', payload: response.data })
}