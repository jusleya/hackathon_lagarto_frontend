import React, {Component} from 'react';

//Components
import Button from '../../components/Button';

//Images
import UFS from './image/logo_ufs.png';

import './css/style.css';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <img src={UFS} alt=""/>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-8">
                <p className="descricao">
                  O site é dedicado a denuncias de criminalidades ocorridas nos Campus UFS. Todos os dados informados são de total responsabilidade do usuário no qual, caso seja necessário, poderá ser chamado para comprovação dos fatos informados.
                </p>
                <div align="center"><Button type="" link="/denuncie">Denuncie</Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;