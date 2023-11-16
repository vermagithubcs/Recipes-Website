// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// const date = getElement('#date')
// const currentYear = new Date().getFullYear()
// date.textContent = currentYear
// console.log("Hello World");

// Write all the Javascript by Vikash.developer
const getElement = (selector) =>{
  const element = document.querySelector(selector);
  if (element) return element
  throw Error(
    `Please double check your class names again try later, there is no ${selector} class`
  )
}

const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListener('click', ()=>{
  links.classList.toggle('show-link');
});

// This code used for the current year 
const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
