console.log('mic check, this thing on??')

// const dairy = document.querySelector('.dairy');
// const meat = document.querySelector('.meat');
// const fruits = document.querySelector('.fruits');
// const vegetables = document.querySelector('.vegetables');
// const bulbsAndRoots = document.querySelector('.bulbsAndRoots');
// const boxed = document.querySelector('.boxed');
// const frozen = document.querySelector('.frozen');
// const misc = document.querySelector('.misc');

const input = document.querySelector('#item')
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelectorAll('ul')

addBtn.addEventListener('click', function() {
  const inputValue = input.value;
  const newLi = document.createElement('li')
  newLi.innerText = `${inputValue}`

  //if inputValue is a part of the dairy list query, then grab the dairy ul, append the newLi to the ul, and reset the input value//

  if (ul.classList.contains("dairy")) {
    const ulDairy = document.querySelector('.dairy');
    ulDairy.append(newLi);
    input.value = "";
  }
})


