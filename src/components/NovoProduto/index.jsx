import { useDispatch, useSelector } from "react-redux";
import { criarNovoProdutoAction } from "../../actions/produtosActions";

const NovoProduto = () => {
    // ultilizar use dispatch e te criar uma função
    const dispatch = useDispatch();

    // mandar a acao do production Action
    const guardarProduto = () => dispatch( criarNovoProdutoAction() )

    const submitNovoProduto = e => {
        e.preventDefault();

        // validar formulario

        // si no hay error

        // criar um novo produto
        guardarProduto()
    }
    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Adicionar produto
                        </h2>

                        <form
                            onSubmit={submitNovoProduto}
                        >
                            <div className="form-group">
                                <label>Nome do produto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome produto"
                                    name="nome"                                    
                                />
                            </div>

                            <div className="form-group">
                                <label>Preço do produto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Preço produto"
                                    name="preço"                                    
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Adicionar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { NovoProduto }