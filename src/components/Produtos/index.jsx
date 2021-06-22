const Produtos = () => {
    return(
        <>
            <h2 className="text-center my-5">Listando produtos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export { Produtos }