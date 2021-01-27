import React, { Component } from 'react';
import Button from './Button';

const countryStates = [
  'Minas Gerais',
  'São Paulo',
  'Ceará',
  'Amapá',
  'Rio de Janeiro',
  'Amazonas',
  'Distrito Federal',
];

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      countryState: "Minas Gerais",
      addressType: "",
      experience: "",
      role: "",
      roleDescription: "",
    };
  }

  updateState = (event) => {
    let { name, value, id } = event.target;
  
    if (value === "on") {
      value = id;
    }
  
    this.setState(({ [name]: value }));
  };

  verifyNumbers = (event) => {
    let { name, value } = event.target;
    const numbers = value.match(/[0-9]/g);
    if (numbers !== null) value = "";
    this.setState(({ [name]: value }));
  };

  verifyCharacters = (event) => {
    let { value, name } = event.target;
    const validate = value.match(/[^\w\s]/gi); //regExp tirado do gabarito
    if (validate !== null) value = "";
    this.setState(({ [name]: value }));
  };

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div>
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
                  this.setState(() => ({ [name]: newValue }));
                }}
              />
            </div>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
              Estado:
              <select
                name="countryState"
                value={this.state.countryState}
                onChange={this.updateState}
                required
              >
                {countryStates.map((value, key) => (
                  <option key={key}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              Resido em:
              <label>
                <input
                  type="radio"
                  name="addressType"
                  id="Casa"
                  className="radio"
                  onClick={this.updateState}
                  required
                />
                Casa
              </label>
              <label>
                <input
                  type="radio"
                  name="addressType"
                  id="Apartamento"
                  className="radio"
                  onClick={this.updateState}
                  required
                />
                Apartamento
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Último emprego</legend>
            <div>
              <label>
                Resumo do currículo:
                <textarea
                  name="experience"
                  maxLength="1000"
                  value={this.state.experience}
                  onChange={this.verifyCharacters}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Cargo:
                <input
                  type="text"
                  name="role"
                  maxLength="40"
                  value={this.state.role}
                  onChange={this.verifyCharacters}
                  onMouseEnter={() => {
                    alert("Preencha com cuidado esta informação");
                  }}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Descrição do cargo:
                <textarea
                  name="roleDescription"
                  maxLength="500"
                  value={this.state.roleDescription}
                  onChange={this.verifyCharacters}
                  required
                />
              </label>
            </div>
          </fieldset>
          <Button data={this.state} />
        </form>
      </div>
    );
  }
}
