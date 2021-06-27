/* eslint-disable no-unused-expressions */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import { apagarProdutoAction } from "../../actions/produtosActions";

const Produto = ({ produto }) => {
    const { nombre, precio, id } = produto;

    const dispatch = useDispatch();

    // Confirmar essa eliminação
    const confirmarEliminacaoProduto = id => {
        // perguntar o usuário
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Você não poderá reverter isso!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deleta isso!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.value) {
                // passando a ação
                dispatch(apagarProdutoAction(id));
            }
        })
    }
    return(
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <Link to={`/produtos/editar/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminacaoProduto(id)}
                >
                    Remover
                </button>
            </td>
        </tr>
    )
}

export default Produto;