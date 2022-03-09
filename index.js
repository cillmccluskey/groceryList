console.log('mic check, this thing on??')

// const dairy = document.querySelector('.dairy');
// const meat = document.querySelector('.meat');
// const fruits = document.querySelector('.fruits');
// const vegetables = document.querySelector('.vegetables');
// const bulbsAndRoots = document.querySelector('.bulbsAndRoots');
// const boxed = document.querySelector('.boxed');
// const frozen = document.querySelector('.frozen');
// const misc = document.querySelector('.misc');


  // let dairyList = ['cream', 'cheese', 'egg', 'milk', 'yogurt', 'butter'];
  // let meatList = ['chicken', 'beef', 'turkey', 'pork', 'fish'];
  // let fruitsList = ['apple', 'banana', 'clementine', 'lemon', 'lime', 'berries', 'melon', 'avocado', 'tomato'];
  // let vegetablesList = ['lettuce', 'spinach', 'cabbage', 'cauliflower', 'brussel sprout', 'broccoli', 'zucchini', 'squash', 'asparagus', 'green bean'];
  // let bulbsAndRootsList = ['white onion', 'yellow onion', 'red onion', 'russet potato', 'sweet potato', 'golden potato', 'baby potato', 'scallion', 'shallot', 'garlic'];
  // let boxedList = ['broth', 'coconut milk', 'sauce', 'bean'];
  // let frozenList = ['pizza', 'fries'];
  // let miscList = [''];

  let groceryList = [
    ['cream', 'cheese', 'egg', 'milk', 'yogurt', 'butter'],
    ['chicken', 'beef', 'turkey', 'pork', 'fish'],
    ['apple', 'banana', 'clementine', 'lemon', 'lime', 'berries', 'melon', 'avocado', 'tomato'],
    ['lettuce', 'spinach', 'cabbage', 'cauliflower', 'brussel sprout', 'broccoli', 'zucchini', 'squash', 'asparagus', 'green bean'],
    ['white onion', 'yellow onion', 'red onion', 'russet potato', 'sweet potato', 'golden potato', 'baby potato', 'scallion', 'shallot', 'garlic'],
    ['broth', 'coconut milk', 'sauce', 'bean'],
    ['pizza', 'fries'],
    ['']
  ]

const input = document.querySelector('#item')
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelectorAll('ul')

addBtn.addEventListener('click', function() {
  const inputValue = input.value;
  const newLi = document.createElement('li')
  newLi.innerText = `${inputValue}`

  for (let i = 0; i < groceryList.length; i++) {
    for (let j = 0; j <groceryList[i].length; j++) {
      if (inputValue.includes(groceryList[0][i])) {
          const ulDairy = document.querySelector('.dairy');
          ulDairy.append(newLi);
          input.value = "";
        } else if (inputValue.includes(groceryList[1][i])) {
          const ulMeat = document.querySelector('.meat');
          ulMeat.append(newLi);
          input.value = "";
        } else if (inputValue.includes(groceryList[2][i])) {
          const ulFruit = document.querySelector('.fruits');
          ulFruit.append(newLi);
          input.value = "";
        } else if (inputValue.includes(groceryList[3][i])) {
          const ulVegetables = document.querySelector('.vegetables');
          ulVegetables.append(newLi);
          input.value = "";
        } else if (inputValue.includes(groceryList[4][i])) {
          const ulBulbsAndRoots = document.querySelector('.bulbsAndRoots');
          ulBulbsAndRoots.append(newLi);
          input.value = "";
        } else if (inputValue.includes(groceryList[5][i])) {
          const ulBoxed = document.querySelector('.boxed');
          ulBoxed.append(newLi);
          input.value = "";
        } else if (inputValue.includes(groceryList[6][i])) {
          const ulFrozen = document.querySelector('.frozen');
          ulFrozen.append(newLi);
          input.value = "";
        } else {
          const ulMisc = document.querySelector('.misc');
          ulMisc.append(newLi);
          input.value = "";
        }
    }
  }
})




