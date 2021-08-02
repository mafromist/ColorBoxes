const rect1 = document.querySelector('#rect1');
const rect2 = document.querySelector('#rect2');
const rect3 = document.querySelector('#rect3');

const colorTone1 = document.querySelector('.colorTone1');
const colorTone2 = document.querySelector('.colorTone2');
const colorTone3 = document.querySelector('.colorTone3');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const getRandomNum = () => { return Math.floor(Math.random() * 255)};

const changeBgColor1 = () => { 
  let firstNum = getRandomNum();
  let secondNum = getRandomNum();
  let thirdNum = getRandomNum();

  const changeColorName = (rect1) => {
    colorTone1.textContent = `rgb(${firstNum},${secondNum},${thirdNum})`;
  }

  rect1.style.backgroundColor = `rgb(${firstNum},${secondNum},${thirdNum})`;
  changeColorName(rect1);
};

const changeBgColor2 = () => { 
  let firstNum = getRandomNum();
  let secondNum = getRandomNum();
  let thirdNum = getRandomNum();

  const changeColorName = (rect2) => {
    colorTone2.textContent = `rgb(${firstNum},${secondNum},${thirdNum})`;
  }

  rect2.style.backgroundColor = `rgb(${firstNum},${secondNum},${thirdNum})`;
  changeColorName(rect2);
};

const changeBgColor3 = () => { 
  let firstNum = getRandomNum();
  let secondNum = getRandomNum();
  let thirdNum = getRandomNum();

  const changeColorName = (rect3) => {
    colorTone3.textContent = `rgb(${firstNum},${secondNum},${thirdNum})`;
  }

  rect3.style.backgroundColor = `rgb(${firstNum},${secondNum},${thirdNum})`;
  changeColorName(rect3);
};

btn1.addEventListener('click',changeBgColor1);
btn2.addEventListener('click',changeBgColor2);
btn3.addEventListener('click',changeBgColor3);

