import React, {Component} from 'react';

import './css/style.css';

class Contact extends Component {
  render() {
    return(
      <div id="contact">
        <div className="section">
          <div className="container">
            <div className="columns align">
              <div className="column is-4">
                <p className="campus">Campus São Cristóvão</p>
                <p className="endereco">
                  Cidade Univ. Prof. José Aloísio de Campos
                  <br/>
                  Av. Marechal Rondon, s/n, Jd. Rosa Elze
                  <br/>
                  São Cristóvão/SE
                  <br/>
                  CEP 49100-000
                  <br/>
                  Contato +55 79 3194-6600
                </p>
              </div>
              <div className="column is-4">
                <p className="campus">Campus Aracaju</p>
                <p className="endereco">
                  Campus Prof. João Cardoso Nascimento
                  <br/>
                  Rua Cláudio Batista, s/n, Cidade Nova
                  <br/>
                  Aracaju/SE
                  <br/>
                  CEP 49060-108
                  <br/>
                  Contato +55 79 2105-1700
                </p>
              </div>
              <div className="column is-4">
                <p className="campus">Campus Itabaiana</p>
                <p className="endereco">
                  Campus Prof. Alberto Carvalho
                  <br/>
                  Av. Vereador Olímpio Grande, s/n
                  <br/>
                  Itabaiana/SE
                  <br/>
                  CEP 49506-036
                  <br/>
                  Contato +55 79 3432-8200
                </p>
              </div>
            </div>

            <div className="columns align">
              <div className="column is-4">
                <p className="campus">Campus Laranjeiras</p>
                <p className="endereco">
                  Praça Samuel de Oliveira, s/n, Centro
                  <br/>
                  Laranjeiras/SE
                  <br/>
                  CEP 49170-000
                  <br/>
                  Contato +55 79 3281-2939
                </p>
              </div>
              <div className="column is-4">
                <p className="campus">Campus Lagarto</p>
                <p className="endereco">
                  Campus Prof. Antônio Garcia Filho
                  <br/>
                  Av. Governador Marcelo Déda, 13, Centro
                  <br/>
                  Lagarto/SE
                  <br/>
                  CEP 49400-000
                  <br/>
                  Contato +55 79 3632-2072
                </p>
              </div>
              <div className="column is-4">
                <p className="campus">Campus Nossa Senhora da Glória</p>
                <p className="endereco">
                  Campus do Sertão
                  <br/>
                  Rodovia Engenheiro Jorge Neto, km 3, Silos
                  <br/>
                  Nossa Senhora da Glória/SE
                  <br/>
                  CEP 49680-000
                  <br/>
                  Contato +55 79 98107-7646
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;