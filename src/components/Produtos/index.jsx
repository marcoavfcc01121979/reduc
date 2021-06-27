import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { obterProdutosAction } from "../../actions/produtosActions";
import Produto from "../Produto";

const Produtos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Consulta a API
        const carregarProdutos = () => dispatch(obterProdutosAction());
        carregarProdutos();
    },[])

    // obter o state
    const productos = useSelector(state => state.produtos.produtos);
    const error = useSelector(state => state.produtos.error);
    const carregando  = useSelector(state => state.produtos.loading);
    return(
        <>
            <h2 className="text-center my-5">Listando produtos</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">
                Há um error
            </p> : null}
            {carregando ? <p className="text-center">Carregando....</p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? 'Não há produtos' : (
                        productos.map(produto => (
                            <Produto 
                                key={produto.id}
                                produto={produto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}

export { Produtos }