import CreateDataContext from './createDataContext'
import authReducer from '../reducers/auth'
import { signUp, signIn } from '../actions'

export const initialState = {
    user: null,
    isAuthenticated: false
}
export const { Context, Provider } = CreateDataContext(
    authReducer, { signUp, signIn }, initialState
)