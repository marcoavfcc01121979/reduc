const EditarProduto = () => {
    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar produto
                        </h2>

                        <form>
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
                                Salvar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { EditarProduto }