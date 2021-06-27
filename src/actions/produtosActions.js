import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

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

// Função mostrar os produtos da base de dados
export function obterProdutosAction() {
    return async (dispatch) => {
        dispatch(mostrarProdutos());

        try {
            /* setTimeout(async () => {
                const resposta = await clienteAxios.get('/productos');
                dispatch(mostrarProdutoExito(resposta.data))
            }, 3000) */
            const resposta = await clienteAxios.get('/productos');
            dispatch(mostrarProdutoExito(resposta.data))
        } catch (error) {
            console.log(error)
            dispatch(mostrarProdutoError())
        }
    }
}

const mostrarProdutos = () => ({
    type: MOSTRAR_PRODUTO,
    payload: true
})

const mostrarProdutoExito = (produtos) => ({
    type: MOSTRAR_PRODUTO_EXITO,
    payload: produtos
}) 

const mostrarProdutoError = () => ({
    type: MOSTRAR_PRODUTO_ERROR,
    payload: true
})

// Seleciona e eliminar produtos
export function apagarProdutoAction(id) {
    return async (dispatch) => {
        dispatch(obterProdutoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProdutoExito())

            // Se sim elimina, mostrar alerta
            Swal.fire(
                'Deletado!',
                'Seu arquivo foi excluído,',
                'Sucesso'
            )
        } catch (error) {
            console.log(error)
            dispatch(eliminarProdutoError())            
        }
    }
}

const obterProdutoEliminar = (id) => ({
    type: ELIMINAR_PRODUTO,
    payload: id
})

const eliminarProdutoExito = () => ({
    type: ELIMINAR_PRODUTO_EXITO
})

const eliminarProdutoError = () => ({
    type: ELIMINAR_PRODUTO_ERROR,
    payload: true
})