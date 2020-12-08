// Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado
// com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em
// caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const maxTemperature = 58;

const getMarsTemperature = () => {
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (onSuccess, onFailure) => {
  const isBusy = Math.random() <= 0.6 ? true : false;

  setTimeout(() => {
    if (isBusy) {
      onFailure('Robot is busy');
    } else {
      onSuccess(getMarsTemperature());
    };
  }, messageDelay());
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);

// Agradeço ao @MurilloWolf pela ajuda no plantão com a lógica presente na variável isBusy usando operadores ternários