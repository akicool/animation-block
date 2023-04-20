const headerElementOne = document.querySelector('.header__element-one');
const headerElementTwo = document.querySelector('.header__element-two');
const headerElementThree = document.querySelector('.header__element-three');

// let oneTextDisplay = document.querySelector('.header__element-one-text-display');
// let twoTextDisplay = document.querySelector('.header__element-two-text-display');
// let threeTextDisplay = document.querySelector('.header__element-three-text-display');

headerElementOne.addEventListener('mouseover', (event) => {
    headerElementTwo.classList.add('hover');
    headerElementThree.classList.add('hover');
});


headerElementOne.addEventListener('mouseout', (event) => {
    headerElementTwo.classList.remove('hover');
    headerElementThree.classList.remove('hover');
});

headerElementTwo.addEventListener('mouseover', (event) => {
    headerElementOne.classList.add('hover');
    headerElementThree.classList.add('hover');
});

headerElementTwo.addEventListener('mouseout', (event) => {
    headerElementOne.classList.remove('hover');
    headerElementThree.classList.remove('hover');
});

headerElementThree.addEventListener('mouseover', (event) => {
    headerElementOne.classList.add('hover');
    headerElementTwo.classList.add('hover');
});

headerElementThree.addEventListener('mouseout', (event) => {
    headerElementOne.classList.remove('hover');
    headerElementTwo.classList.remove('hover');
});