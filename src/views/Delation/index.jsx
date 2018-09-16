import React, {Component} from 'react';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';

import Button from '../../components/Button';

//CSS
import './css/style.css';

class Delation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'', rg: '', orgao: '', cpf: '',
      email: '', campus: '', local: '',
      descricao_local: '', crime: '',
      armado: '', tipo_arma: '', item_perdido:'', criminoso: '',
      answer: '',
      isLoadingButton: false
    }

    this.verifyCallback = this.verifyCallback.bind(this);
    this.validator = new SimpleReactValidator();
  }

  verifyCallback() {
    this.setState({ isValidRecaptcha: true });
  };

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ answer: "" });
    this.setState({ isLoadingButton: true });

    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return;
    }

    this.setState({ answer: [<i className="material-icons icons">loop</i>, " Enviando sua mensagem..."] });

    axios.post("https://us-central1-hackathonlagarto-c804b.cloudfunctions.net/enviarEmail", {
      name: this.state.name,
      rg: this.state.rg,
      orgao: this.state.orgao,
      cpf: this.state.cpf,
      email: this.state.email,
      campus: this.state.campus,
      local: this.state.local,
      descricao_local: this.state.descricao_local,
      crime: this.state.crime,
      armado: this.state.armado,
      tipo_arma: this.state.tipo_arma,
      criminoso: this.state.criminoso
    })
      .then((response) => {
        if (!response.data.error) {
          this.setState({ answer: [<i className="material-icons icons">check</i>, " Sua mensagem foi enviada com sucesso!"] });
          this.setState({ isLoadingButton: false });
        }
        else {
          this.setState({ answer: [<i className="material-icons icons">clear</i>, "Ops!"] });
          this.setState({ isLoadingButton: false });
        }
        //console.log(response);
      })
      .catch((error) => {
        this.setState({ answer: [<i className="material-icons icons">clear</i>, "Ops! Ocorreu algum erro ao enviar sua mensagem. Por favor, tente novamente."] });
        this.setState({ isLoadingButton: false });
        //console.log(error);
      });
  }

  render() {
    return(
      <div id="delation">
        <div className="section">
          <div className="columns is-centered">
            <div className="column is-8">
              <h1 className="titulo">
                Formulário de Denúncia
              </h1>
              <p className="texto">
                Este formulário <strong>NÃO É</strong> equivalente a um boletim de ocorrência. Os dados aqui contidos serão utilizados para futuras aplicações. É prescindível que a vítima procure a polícia mais próxima ou acesse o site <a href="http://delegaciavirtual.ssp.se.gov.br/" target="_blank" rel="noopener noreferrer">www.delegaciavirtual.ssp.se.gov.br</a> para registrar a ocorrência.
              </p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-8">
              <form onSubmit={this.handleSubmit}>
                <div className="columns is-centered">
                  <div className="column is-10">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Nome completo:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              name="name"
                              className="input is-rounded"
                              type="text"
                              placeholder="Ex.: João Santos Silva"
                              value={this.state.name}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('name', this.state.name, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns is-centered">
                  <div className="column is-3">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">RG:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              name="rg"
                              className="input is-rounded"
                              type="tex"
                              placeholder="Ex.: 1234567-8"
                              value={this.state.rg}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('rg', this.state.rg, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-3 paddingLeft">
                    <div className="field-label is-normal">
                      <label className="label">Orgão Emissor:</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            name="orgao"
                            className="input is-rounded"
                            type="tex"
                            placeholder="Ex.: SSP/SE"
                            value={this.state.orgao}
                            onChange={this.handleFormChange}
                          />
                          <span>{this.validator.message('orgao', this.state.orgao, 'required', false, { default: "Campo obrigatório" })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4 paddingLeft">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">CPF:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              name="cpf"
                              className="input is-rounded"
                              type="tex"
                              placeholder="Ex.: 000.000.000-00"
                              value={this.state.cpf}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('cpf', this.state.cpf, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns is-centered">
                  <div className="column is-3">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Email:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              name="email"
                              className="input is-rounded"
                              type="email"
                              placeholder="Ex.: joaosilva@gmail.com"
                              value={this.state.email}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('email', this.state.email, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-3">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Campus:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <div className="select is-rounded">
                              <select name="campus" value={this.state.campus} onChange={this.handleFormChange}>
                                <option>Selecione</option>
                                <option>Glória</option>
                                <option>HU Aracaju</option>
                                <option>HU Lagarto</option>
                                <option>Lagarto</option>
                                <option>São Cristóvão</option>
                              </select>
                            </div>
                            <span>{this.validator.message('campus', this.state.campus, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4 paddingLeft">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Local:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              name="local"
                              className="input is-rounded"
                              type="tex"
                              placeholder="Ex.: Didática 1"
                              value={this.state.local}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('local', this.state.local, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns is-centered">
                  <div className="column is-10">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Descrição detalhada do local:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <textarea
                              name="descricao_local"
                              className="textarea"
                              placeholder="Ex.: Próximo a sala 101 da didática 1."
                              value={this.state.descricao_local}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('descricao_local', this.state.descricao_local, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns is-centered">
                  <div className="column is-3">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Crime:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <div className="select is-rounded">
                              <select name="crime" value={this.state.crime} onChange={this.handleFormChange}>
                                <option>Selecione</option>
                                <option>Agressão</option>
                                <option>Furto</option>
                                <option>Roubo</option>
                              </select>
                            </div>
                            <span>{this.validator.message('crime', this.state.crime, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4 paddingLeft">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Mão armada:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <label className="radio">
                              <input type="radio" name="armado" 
                                value={this.state.armado}
                                onChange={this.handleFormChange}
                              />
                              <span className="opcoes">Sim</span>
                            </label>
                            <label className="radio" style={{paddingLeft: '10px'}}>
                              <input type="radio" name="armado" 
                                value={this.state.armado}
                                onChange={this.handleFormChange}
                              />
                              <span className="opcoes">Não</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-3">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Tipo da arma:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <div className="select is-rounded">
                              <select name="tipo_arma" value={this.state.tipo_arma} onChange={this.handleFormChange}>
                                <option>Selecione</option>
                                <option>Arma branca</option>
                                <option>Arma de fogo</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns is-centered">
                  <div className="column is-10">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Item perdido:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              name="item_perdido"
                              className="input is-rounded"
                              type="text"
                              placeholder="Ex.: Foi roubado um celular motorola de modelo Moto G4."
                              value={this.state.item_perdido}
                              onChange={this.handleFormChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns is-centered">
                  <div className="column is-10">
                    <div className="field">
                      <div className="field-label is-normal">
                        <label className="label">Descreva de forma detalhada o criminoso (Informe características como cicatrizes, tatuagens, vestimentas, etc):</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <textarea
                              name="criminoso"
                              className="textarea"
                              placeholder="Ex.: O criminoso estava com uma bermuda verde e de blusa vermelha, com um boné branco. Possuía uma tatuagem de caveira na canela."
                              value={this.state.criminoso}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('criminoso', this.state.criminoso, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <div align="center">
                      <Button type="submit">Enviar</Button>
                    </div>
                  </div>
                </div>
                <p className="answer">{this.state.answer}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delation;