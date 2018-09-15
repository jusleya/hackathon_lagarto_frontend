import React, {Component} from 'react';

//CSS
import './css/style.css';

class Delation extends Component {
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
              <form>
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
                              className="input is-rounded"
                              type="text"
                              placeholder="Ex.: João Santos Silva"
                              // onChange={props.onChange}
                              // value={props.value}
                            />
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
                              className="input is-rounded"
                              type="number"
                              placeholder="Ex.: 1234567-8"
                              // onChange={props.onChange}
                              // value={props.value}
                            />
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
                            className="input is-rounded"
                            type="tex"
                            placeholder="Ex.: SSP/SE"
                            // onChange={props.onChange}
                            // value={props.value}
                          />
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
                              className="input is-rounded"
                              type="number"
                              placeholder="Ex.: 000.000.000-00"
                              // onChange={props.onChange}
                              // value={props.value}
                            />
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
                              className="input is-rounded"
                              type="email"
                              placeholder="Ex.: joaosilva@gmail.com"
                              // onChange={props.onChange}
                              // value={props.value}
                            />
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
                              <select>
                                <option>Selecione</option>
                                <option>Glória</option>
                                <option>HU Aracaju</option>
                                <option>HU Lagarto</option>
                                <option>Lagarto</option>
                                <option>São Cristóvão</option>
                              </select>
                            </div>
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
                              className="input is-rounded"
                              type="tex"
                              placeholder="Ex.: Didática 1"
                              // onChange={props.onChange}
                              // value={props.value}
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
                        <label className="label">Descrição detalhada do local:</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <textarea
                              className="textarea"
                              placeholder="Ex.: Próximo a sala 101 da didática 1."
                            />
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
                              <select>
                                <option>Selecione</option>
                                <option>Agressão</option>
                                <option>Furto</option>
                                <option>Roubo</option>
                              </select>
                            </div>
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
                              <input type="radio" name="foobar" />
                              <span className="opcoes">Sim</span>
                            </label>
                            <label className="radio" style={{paddingLeft: '10px'}}>
                              <input type="radio" name="foobar" />
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
                              <select>
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
                              className="input is-rounded"
                              type="text"
                              placeholder="Ex.: Foi roubado um celular motorola de modelo Moto G4."
                              // onChange={props.onChange}
                              // value={props.value}
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
                              className="textarea"
                              placeholder="Ex.: O criminoso estava com uma bermuda verde e de blusa vermelha, com um boné branco. Possuía uma tatuagem de caveira na canela."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delation;