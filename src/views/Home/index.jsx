import React, {Component} from 'react';

//Images
import UFS from './image/logo_ufs.png';

class Home extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <img src={UFS} alt=""/>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-8">
              <p>
                O site é dedicado a denuncias de criminalidades ocorridas nos Campus UFS. Todos os dados informados são de total responsabilidade do usuário no qual, caso seja necessário, poderá ser chamado para comprovação dos fatos informados.
              </p>
              <button>Denuncie</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;