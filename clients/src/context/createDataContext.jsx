import React, { useReducer, createContext } from 'react'

export default (reducer, actions, initialState) => {
    const Context = createContext();
    // actions = { singUp: (dispatch) => (user)=>{} }
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)
        const boundAction = {}
        for (let key in actions) {
            // boundAction.singUp = singUp(dispath)
            boundAction[key] = actions[key](dispatch)
        }
        return (
            <Context.Provider value={{ state, ...boundAction }} >
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }

}