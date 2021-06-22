import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { EditarProduto } from "./components/EditarProduto";
import { Header } from "./components/Header";
import { NovoProduto } from "./components/NovoProduto";
import { Produtos } from "./components/Produtos";

// Redux
import { Provider } from 'react-redux';
import { store } from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Produtos} />
            <Route exact path="/produstos/novos" component={NovoProduto} />
            <Route exact path="/produtos/editar/:id" component={EditarProduto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
