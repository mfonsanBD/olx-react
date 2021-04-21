const initialState = {
    email : 'mikewebideia@gmail.com'
}

const ReducerUsuario = (state = initialState, action) => {
    
    if(action.type === 'SET_EMAIL'){
        return {...state, email : action.payload.email}
    }

    return state;
}
export default ReducerUsuario;