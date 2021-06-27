import { Link } from "react-router-dom"

const Produto = ({ produto }) => {
    const { nombre, precio, id } = produto
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
                >
                    Remover
                </button>
            </td>
        </tr>
    )
}

export default Produto;