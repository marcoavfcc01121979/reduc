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
        default: 
            return state;
    }
}