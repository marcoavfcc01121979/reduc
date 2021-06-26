import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

import {
    GUARDAR_PRODUTO,
    GUARDAR_PRODUTO_ERROR,
    GUARDAR_PRODUTO_EXITO
} from '../types'


//Criar um novo produto
export function criarNovoProdutoAction(produto) {
    return async (dispatch) => {
        dispatch(guardarProduto());

        try {
            // inserir a API
            await clienteAxios.post('/productos', produto);

            // se tudo sair bem atualizo o state
            dispatch(guardarProdutoExito(produto))

            // Alerta
            Swal.fire(
                'Correto',
                'O produto foi guardado corretamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            // se tem um erro cambiar el state
            dispatch(guardarProdutoError(true))

            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Há um error',
                text: 'Há um error, tenta de novo'
            })
        }
    } 
}

const guardarProduto = () => ({
    type: GUARDAR_PRODUTO,
    payload: true
});

// o produto é guardado na base de dados
const guardarProdutoExito = produto => ({
    type: GUARDAR_PRODUTO_EXITO,
    payload: produto
})

// teu erro no cadastro do produto
const guardarProdutoError = estado => ({
    type: GUARDAR_PRODUTO_ERROR,
    payload: estado
})