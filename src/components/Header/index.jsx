import React, {Component} from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu
} from 'bloomer';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isActive: false
    };

    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav() {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    return (
      <header>
        <Navbar className="is-fixed-top">
          <Container>
            <NavbarBrand>
              <NavbarItem>
                <NavLink className="navbar-item is-centered" to='/'>
                  <p className="logo">SegUFS</p>
                </NavLink>
              </NavbarItem>
              <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
            </NavbarBrand>
            <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
              <NavbarEnd>
                <NavLink className="navbar-item uppercase" to='/'>Início</NavLink>
                <NavLink className="navbar-item uppercase" to='/denuncie'>Denuncie</NavLink>
                <NavLink className="navbar-item uppercase" to='/informacoes'>Informações</NavLink>
                <NavLink className="navbar-item uppercase" to='/contato'>Contato</NavLink>
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
        <div style={{marginBottom:'52px'}}></div>
      </header>
    );
  }
}

export default Header;