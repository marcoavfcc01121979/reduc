import {
    GUARDAR_PRODUTO,
    GUARDAR_PRODUTO_ERROR,
    GUARDAR_PRODUTO_EXITO
} from '../types'

// cada reducer tenha seu proprio state
const initialState = {
    produtos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GUARDAR_PRODUTO:
            return {
                ...state,
                loading: action.payload
            }
        case GUARDAR_PRODUTO_EXITO:
            return {
                ...state,
                loading: false,
                produtos: [...state.produtos, action.payload]
            }
        case GUARDAR_PRODUTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}