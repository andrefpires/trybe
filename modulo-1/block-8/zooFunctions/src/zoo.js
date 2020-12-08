/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const animalsByIds = (...ids) => {
  let arrReturned = [];
  arrReturned = ids.map(id => data.animals.find(animal => animal.id === id));
  return arrReturned;
};

const animalsOlderThan = (animal, age) => {
  const animalsResidents = data.animals.find(element => element.name === animal).residents;
  return animalsResidents.every(resident => resident.age >= age);
};

const employeeByName = (employeeName) => {
  let obj = {};
  if (typeof employeeName === 'string') {
    const { employees: arr } = data;
    obj = arr.find(({ firstName: a, lastName: b }) => a === employeeName || b === employeeName);
  }
  return obj;
};

const createEmployee = (personalInfo, associatedWith) => {
  const obj = { ...personalInfo, ...associatedWith };
  return obj;
};

function isManager(id) {
  // seu código aqui
}

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(newEmployee);
};

const animalCount = (species) => {
  if (species === undefined) {
    const obj = {};
    data.animals.forEach((animal) => { obj[animal.name] = animal.residents.length; });
    return obj;
  }

  const residents = data.animals.find(animal => animal.name === species).residents.length;
  return residents;
};

const entryCalculator = (entrants) => {
  let sum = 0;

  if (typeof entrants === 'object') {
    const tCategory = Object.keys(entrants);
    const numberOfTickets = Object.values(entrants);

    tCategory.map((category, i) => {
      sum += data.prices[category] * numberOfTickets[i];
      return sum;
    });
  }

  return sum;
};

function animalMap(options) {
  // seu código aqui
}

const schedule = (dayName) => {
  const arrHours = Object.entries(data.hours);
  const weekSchedule = arrHours.reduce((acc, day) => {
    acc[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    return acc;
  }, {});
  weekSchedule.Monday = 'CLOSED';

  if (dayName === undefined) {
    return weekSchedule;
  }

  const daySchedule = {};
  daySchedule[dayName] = weekSchedule[dayName];
  return daySchedule;
};

const oldestFromFirstSpecies = (idEmployee) => {
  const { animals, employees } = data;
  const employeeFound = employees.find(employee => employee.id === idEmployee);
  const specieFound = animals.find(({ id }) => id === employeeFound.responsibleFor[0]);
  const oldestAge = specieFound.residents.reduce((arr, curr) => {
    if (arr < curr.age) {
      arr = curr.age;
    }
    return arr;
  }, 0);
  const animalFound = specieFound.residents.filter(animal => animal.age === oldestAge);
  const valuesAnimalFound = Object.values(animalFound[0]);

  return valuesAnimalFound;
};

const decimalAdjust = (price) => {
  price = price.split('');
  const decimalPartString = price[4] + price[5];
  const decimalPartNumber = parseInt(decimalPartString, 10);
  const decimalNumber = decimalPartNumber / 10;
  const roundedDecimalNumber = Math.ceil(decimalNumber);
  price.pop();
  price.pop();
  let roundedPrice = '';
  price[4] = roundedDecimalNumber;
  price.forEach((number) => {
    roundedPrice += number;
  });

  roundedPrice = parseFloat(roundedPrice);
  return roundedPrice;
};

// A função decimalAdjust foi feita a partir do exemplo de ajuste decimal:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

const increasePrices = (percentage) => {
  const entries = Object.entries(data.prices);
  const multiplier = percentage / 100;
  const newPrices = entries.map((array) => {
    let increasePrice = array[1];
    increasePrice += array[1] * multiplier;
    const fixedIncreasePrice = increasePrice.toFixed(3);
    return fixedIncreasePrice;
  });

  newPrices.forEach((newPrice, i) => {
    data.prices[entries[i][0]] = decimalAdjust(newPrice);
  });
};

const employeesNamesAndAnimals = () => {
  const listAnimals = {};
  const listEmployees = {};
  const { animals, employees } = data;

  animals.forEach(({ name, id }) => {
    listAnimals[name] = id;
  });

  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const employee = `${firstName} ${lastName}`;
    listEmployees[employee] = responsibleFor;
  });

  const entriesAnimals = Object.entries(listAnimals);
  const entriesEmployees = Object.entries(listEmployees);

  const employeesNamesAndAnimalsObject = entriesEmployees.reduce((acc, curr) => {
    const animalsForEmployee = [];
    curr[1].forEach((element) => {
      entriesAnimals.forEach((arrAnimal) => {
        if (arrAnimal[1] === element) {
          animalsForEmployee.push(arrAnimal[0]);
        }
      });
    });
    acc[curr[0]] = animalsForEmployee;

    return acc;
  }, {});

  return employeesNamesAndAnimalsObject;
};

const employeeCoverage = (idOrName) => {
  const finalObject = employeesNamesAndAnimals();
  if (idOrName !== undefined) {
    const a = idOrName;
    const employee = data.employees
      .find(({ id, firstName, lastName }) => id === a || firstName === a || lastName === a);
    const { firstName, lastName } = employee;
    const keyAndValue = `${firstName} ${lastName}`;
    const employeeFound = { [keyAndValue]: finalObject[keyAndValue] };

    return employeeFound;
  }

  return finalObject;
};

// Agradeço a ajuda de @loren-gt, @danwhat, @isaacbatst e @mhamaji que deram muitas dicas e
// mostraram soluções diferentes fazendo com que conseguisse desenvolver a lógica
// da função employeeCoverage

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
