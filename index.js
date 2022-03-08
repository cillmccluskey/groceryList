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

// let dairyList = ['cream', 'cheese', 'egg', 'milk', 'yogurt', 'butter'];

const input = document.querySelector('#item')
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelectorAll('ul')

addBtn.addEventListener('click', function() {
  const inputValue = input.value;
  const newLi = document.createElement('li')
  newLi.innerText = `${inputValue}`

  for (let i = 0; i < dairyList.length; i++) {
    if (inputValue.includes(dairyList[i])) {
      const ulDairy = document.querySelector('.dairy');
      ulDairy.append(newLi);
      input.value = "";
    }
    if (inputValue.includes(meatList[i])) {
      const ulMeat = document.querySelector('.meat');
      ulMeat.append(newLi);
      input.value = "";
    }

    if (inputValue.includes(fruitsList[i])) {
      const ulFruit = document.querySelector('.fruits');
      ulFruit.append(newLi);
      input.value = "";
    }

    if (inputValue.includes(vegetablesList[i])) {
      const ulVegetables = document.querySelector('.vegetables');
      ulVegetables.append(newLi);
      input.value = "";
    }

    if (inputValue.includes(bulbsAndRootsList[i])) {
      const ulBulbsAndRoots = document.querySelector('.bulbsAndRoots');
      ulBulbsAndRoots.append(newLi);
      input.value = "";
    }

    if (inputValue.includes(boxedList[i])) {
      const ulBoxed = document.querySelector('.boxed');
      ulBoxed.append(newLi);
      input.value = "";
    }

    if (inputValue.includes(frozenList[i])) {
      const ulFrozen = document.querySelector('.frozen');
      ulFrozen.append(newLi);
      input.value = "";
    }

    else (inputValue) {
      const ulMisc = document.querySelector('.misc');
      ulMisc.append(newLi);
      input.value = "";
    }
  }
  
  //if inputValue is a part of the dairy list query, then grab the dairy ul, append the newLi to the ul, and reset the input value//

  // if (inputValue === 'cream') {
  //   const ulDairy = document.querySelector('.dairy');
  //   ulDairy.append(newLi);
  //   input.value = "";
  // }
  // if (inputValue === 'chicken') {
  //   const ulMeat = document.querySelector('.meat');
  //   ulMeat.append(newLi);
  //   input.value = "";
  // }
})




