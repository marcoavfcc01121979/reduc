import {
    GUARDAR_PRODUTO,
    GUARDAR_PRODUTO_ERROR,
    GUARDAR_PRODUTO_EXITO,
    MOSTRAR_PRODUTO,
    MOSTRAR_PRODUTO_EXITO,
    MOSTRAR_PRODUTO_ERROR,
    ELIMINAR_PRODUTO,
    ELIMINAR_PRODUTO_EXITO,
    ELIMINAR_PRODUTO_ERROR,
} from '../types'

// cada reducer tenha seu proprio state
const initialState = {
    produtos: [],
    error: null,
    loading: false,
    eliminarProduto: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case MOSTRAR_PRODUTO:
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
        case MOSTRAR_PRODUTO_ERROR:
        case ELIMINAR_PRODUTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case MOSTRAR_PRODUTO_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                produtos: action.payload
            }
        case ELIMINAR_PRODUTO:
            return {
                ...state,
                eliminarProduto: action.payload
            }
        case ELIMINAR_PRODUTO_EXITO:
            return {
                ...state,
                produtos: state.produtos.filter(produto => produto.id !== state.eliminarProduto),
                eliminarProduto: null
            }
        default: 
            return state;
    }
}