import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.personInformations = this.personInformations.bind(this);
  }

  personInformations = () => {
    const {
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      addressType,
      experience,
      role,
      roleDescription,
    } = this.props.data;

    const divRoot = document.querySelector('#root');
    const personData = document.createElement('div');
    const personName = document.createElement('h2');
    const personEmail = document.createElement('p');
    const personCpf = document.createElement('p');
    const personAddress = document.createElement('p');
    const personCity = document.createElement('p');
    const personCountryState = document.createElement('p');
    const personAddressType = document.createElement('p');
    const personExperience = document.createElement('p');
    const personRole = document.createElement('p');
    const personRoleDescription = document.createElement('p');
    
    personName.innerText = name;
    personEmail.innerText = email;
    personCpf.innerText = cpf;
    personAddress.innerText = address;
    personCity.innerText = city;
    personCountryState.innerText = `${countryState}`;
    personAddressType.innerText = addressType;
    personExperience.innerText = experience;
    personRole.innerText = role;
    personCountryState.roleDescription = roleDescription;

    divRoot.appendChild(personData);
    personData.appendChild(personName);
    personData.appendChild(personEmail);
    personData.appendChild(personCpf);
    personData.appendChild(personAddress);
    personData.appendChild(personCity);
    personData.appendChild(personCountryState);
    personData.appendChild(personAddressType);
    personData.appendChild(personRole);
    personData.appendChild(personRoleDescription);
  }

  render() {
    return (
      <button onClick={this.personInformations}>Ok</button>
    )
  }
}
