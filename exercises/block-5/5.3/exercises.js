function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercise 1:
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const tagUl = document.querySelector('#days');

function addDays () {
  for (let i = -1; i < dezDaysList.length; i += 1) {
    let tagLi = document.createElement('li');
    tagLi.className = 'day';
    if (i >= 0) {
      if (i === 25 || i === 26 || i === 32) {
        tagLi.className += ' holiday';
      }
      if (i === 5 || i === 12 || i === 19 || i === 26) {
        tagLi.className += ' friday';
      }
      tagLi.innerText = dezDaysList[i];
    } 
    tagUl.appendChild(tagLi);
  }
}

addDays();

// Exercise 2
function holidayButton (string) {
  const tagDivButtonsContainer = document.querySelector('.buttons-container');
  const tagButton = document.createElement('button');
  tagButton.id = 'btn-holiday';
  tagButton.innerText = string;
  tagDivButtonsContainer.appendChild(tagButton);
}

holidayButton('Feriados');

// Exercise 3
function changeColorPropValue () {
  let elementsLi = tagUl.childNodes;
  let holidays = [];

  for (let i = 1; i < elementsLi.length; i += 1) {
    const classToCompare = elementsLi[i].classList[1];
    if (classToCompare !== undefined) {
      if (classToCompare === 'holiday') {
        holidays.push(elementsLi[i]);
      }
    }
  }

  for (i in holidays) {
    if (holidays[i].style.backgroundColor !== 'black') {
      holidays[i].style.backgroundColor = 'black';
      holidays[i].style.color = 'white';
    } else {
      holidays[i].style.backgroundColor = '#eee';
      holidays[i].style.color = '#777';
    }
  }
}

function changeBackgroundColorHolidays () {
  const catchButton = document.querySelector('#btn-holiday');
  catchButton.addEventListener('click', changeColorPropValue);
}

changeBackgroundColorHolidays();