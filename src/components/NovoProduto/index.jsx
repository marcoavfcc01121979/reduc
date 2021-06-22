import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { criarNovoProdutoAction } from "../../actions/produtosActions";

const NovoProduto = () => {
    // state del componente
    const [nombre, guardaNombre] = useState('');
    const [precio, guardaPrecio] = useState(0);

    // ultilizar use dispatch e te criar uma função
    const dispatch = useDispatch();

    // mandar a acao do production Action
    const guardarProduto = produto => dispatch( criarNovoProdutoAction(produto) )

    const submitNovoProduto = e => {
        e.preventDefault();

        // validar formulario
        if(nombre.trim() === '' || precio <= 0) {
            return;
        }

        // si no hay error

        // criar um novo produto
        guardarProduto({
            nombre,
            precio
        })
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
                                    value={nombre}
                                    onChange={e => guardaNombre(e.target.value)}                                   
                                />
                            </div>

                            <div className="form-group">
                                <label>Preço do produto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Preço produto"
                                    name="preço"                                
                                    value={precio}
                                    onChange={e => guardaPrecio(Number(e.target.value))}    
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