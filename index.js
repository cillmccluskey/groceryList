console.log('mic check, this thing on??')

// const dairy = document.querySelector('.dairy');
// const meat = document.querySelector('.meat');
// const fruits = document.querySelector('.fruits');
// const vegetables = document.querySelector('.vegetables');
// const bulbsAndRoots = document.querySelector('.bulbsAndRoots');
// const boxed = document.querySelector('.boxed');
// const frozen = document.querySelector('.frozen');
// const misc = document.querySelector('.misc');


  let dairyList = ['cream', 'cheese', 'egg', 'milk', 'yogurt', 'butter'];
  let meatList = ['chicken', 'beef', 'turkey', 'pork', 'fish'];
  let fruitsList = ['apple', 'banana', 'clementine', 'lemon', 'lime', 'berries', 'melon', 'avocado', 'tomato'];
  let vegetablesList = ['lettuce', 'spinach', 'cabbage', 'cauliflower', 'brussel sprout', 'broccoli', 'zucchini', 'squash', 'asparagus', 'green bean'];
  let bulbsAndRootsList = ['white onion', 'yellow onion', 'red onion', 'russet potato', 'sweet potato', 'golden potato', 'baby potato', 'scallion', 'shallot', 'garlic'];
  let boxedList = ['broth', 'coconut milk', 'sauce', 'bean'];
  let frozenList = ['pizza', 'fries'];
  let miscList = [''];

const input = document.querySelector('#item')
const addBtn = document.querySelector('#addBtn');
input.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.querySelector('#addBtn').click();
  }
})



const ul = document.querySelectorAll('ul')

addBtn.addEventListener('click', function() {
  const inputValue = input.value;
  const newLi = document.createElement('li')
  newLi.innerText = `${inputValue}`
  
  if (inputValue !== dairyList && inputValue !== meatList && inputValue !== fruitsList && inputValue !== vegetablesList && inputValue !== bulbsAndRootsList && inputValue !== boxedList && inputValue !== frozenList) {
    const ulMisc = document.querySelector('.misc');
    ulMisc.append(newLi);
    input.value = "";
   }
  
  for (let item of dairyList) {
    if (inputValue.includes(item)) {
      const ulDairy = document.querySelector('.dairy');
    ulDairy.append(newLi);
    input.value = "";
    }
  }

  for (let item of meatList) {
    if (inputValue.includes(item)) {
      const ulMeat = document.querySelector('.meat');
      ulMeat.append(newLi);
      input.value = "";
    }
  }

  for (let item of fruitsList) {
    if (inputValue.includes(item)) {
      const ulFruit = document.querySelector('.fruits');
      ulFruit.append(newLi);
      input.value = "";
    }
  }

  for (let item of vegetablesList) {
    if (inputValue.includes(item)) {
      const ulVegetables = document.querySelector('.vegetables');
      ulVegetables.append(newLi);
      input.value = "";
    }
  }

  for (let item of bulbsAndRootsList) {
    if (inputValue.includes(item)) {
      const ulBulbsAndRoots = document.querySelector('.bulbsAndRoots');
      ulBulbsAndRoots.append(newLi);
      input.value = "";
    }
  }

  for (let item of boxedList) {
    if (inputValue.includes(item)) {
      const ulBoxed = document.querySelector('.boxed');
      ulBoxed.append(newLi);
      input.value = "";
    }
  }

  for (let item of frozenList) {
    if (inputValue.includes(item)) {
      const ulFrozen = document.querySelector('.frozen');
      ulFrozen.append(newLi);
      input.value = "";
    }
  }

  // misc item list
  //  if (inputValue.includes(dairyList) && inputValue.includes(meatList) && inputValue.includes(fruitsList) && inputValue.includes(vegetablesList) && inputValue.includes(bulbsAndRootsList) && inputValue.includes(boxedList) && inputValue.includes(frozenList)) {
  //   const ulMisc = document.querySelector('.misc');
  //   ulMisc.append(newLi);
  //   input.value = "";
  //  }

  // if the inputValue is not equal to any of the existing food arrays, add it to miscellanious

    
})





