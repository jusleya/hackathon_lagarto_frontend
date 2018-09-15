import React from 'react';
import {Columns, Column} from 'bloomer';

//CSS
import './css/style.css';

const Footer = () => (
  <div id="footer">
    <div className="section padding">
      <div className="container">
        <Columns isCentered className="final-footer">
          <Column isSize="3/4">
            <p>© Copyright Hackathon Lagarto UFS 2018 | Todos os direitos reservados | Design e desenvolvimento por alunos.</p>
          </Column>
        </Columns>
      </div>
    </div>
  </div>
);

export default Footer;