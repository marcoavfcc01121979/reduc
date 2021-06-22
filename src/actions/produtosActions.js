import {
    GUARDAR_PRODUTO,
    GUARDAR_PRODUTO_ERROR,
    GUARDAR_PRODUTO_EXITO
} from '../types'


//Criar um novo produto
export function criarNovoProdutoAction() {
    return() => {
        console.log('desde action')
    } 
}