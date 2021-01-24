import React, { Component } from 'react';

const countryStates = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

export default class Forms extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
    };
  }

  updateState = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({[name]: value,}));
  }

  verifyNumbers = (event) => {
    let { name, value } = event.target;
    const numbers = value.match(/[0-9]/g);
    if (numbers !== null) value = ''
    this.setState(() => ({[name]: value,}))
  }

  verifyCharacters = (event) => {
    let { value, name } = event.target;
    const validate = value.match(/[^\w\s]/gi); //regExp tirado do gabarito
    if (validate !== null) value = '';
    this.setState(() => ({[name]: value,}));
  };

  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>
          <div className="container">
            Nome:
            <input
              type="name"
              name="name"
              maxLength="40"
              required
              value={this.state.name}
              onBlur={this.verifyNumbers}
              onChange={(event) => {
                const { name, value } = event.target;
                const newValue = value.toUpperCase();
                this.setState(() => ({[name]: newValue,}));
              }}
            />
          </div>
          <div className="container">
            Email:
            <input
              type="email"
              name="email"
              maxLength="50"
              required
              value={this.state.email}
              onChange={this.verifyCharacters}
            />
          </div>
          <div className="container">
            CPF:
            <input
              type="text"
              name="cpf"
              maxLength="11"
              required
              value={this.state.cpf}
              onChange={this.verifyCharacters}
            />
          </div>
          <div className="container">
            Endereço:
            <input
              type="text"
              name="address"
              maxLength="200"
              required
              value={this.state.address}
              onChange={this.verifyCharacters}
            />
          </div>
          <div className="container">
            Cidade:
            <input
              type="text"
              name="city"
              maxLength="28"
              required
              value={this.state.city}
              onBlur={this.verifyNumbers}
              onChange={this.verifyCharacters}
            />
          </div>
          <div className="container">
            Estado:
            <select
              name="countryState"
              required
              value={this.state.countryState}
              onChange={this.updateState}
            >
              {countryStates.map((value, key) =>
                <option key={key}>{value}</option>
                )
              }
            </select>
          </div>
        </fieldset>
      </form>
    );
  }
}
