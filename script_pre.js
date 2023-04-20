const headerElementOne = document.querySelector('.header__element-one');
const headerElementTwo = document.querySelector('.header__element-two');
const headerElementThree = document.querySelector('.header__element-three');

// one 
const handleAddClass = (element, className) =>{
    element.classList.add(className)
}
const handleAddHoverEffect = () => {
  
  handleAddClass(headerElementTwo, 'hover')

  handleAddClass(headerElementThree, 'hover')
}
const handleAddClassRemove = (element, className) =>{
    element.classList.remove(className)
}
const handleAddHoverEffectRemove = () => {
  
  handleAddClassRemove(headerElementTwo, 'hover')

  handleAddClassRemove(headerElementThree, 'hover')
}
//////////////////////////////////////////////////

// two 
const handleAddClassTwo = (element, className) =>{
    element.classList.add(className)
}
const handleAddHoverEffectTwo = () => {
  
  handleAddClass(headerElementOne, 'hover')

  handleAddClass(headerElementThree, 'hover')

}
const handleAddClassTwoRemove = (element, className) =>{
    element.classList.remove(className)
}
const handleAddHoverEffectTwoRemove = () => {
  
    handleAddClassTwoRemove(headerElementOne, 'hover')

    handleAddClassTwoRemove(headerElementThree, 'hover')

}
/////////////////////////////////////////////////////////


// three
const handleAddClassThree = (element, className) =>{
    element.classList.add(className)
}
const handleAddHoverEffectThree  = () => {
  
    handleAddClassThree(headerElementOne, 'hover')

    handleAddClassThree(headerElementTwo, 'hover')

}
const handleAddClassThreeRemove = (element, className) =>{
    element.classList.remove(className)
}
const handleAddHoverEffectThreeRemove = () => {
  
    handleAddClassThreeRemove(headerElementOne, 'hover')

    handleAddClassThreeRemove(headerElementTwo, 'hover')

}
/////////////////////////////////////////////////////////

headerElementOne.addEventListener('mouseover', (event) => {
    // headerElementTwo.classList.add('hover');
    // headerElementThree.classList.add('hover');
    handleAddHoverEffect()
});

headerElementOne.addEventListener('mouseout', (event) => {
    // headerElementTwo.classList.remove('hover');
    // headerElementThree.classList.remove('hover');
    handleAddHoverEffectRemove()
});

headerElementTwo.addEventListener('mouseover', (event) => {
    // headerElementOne.classList.add('hover');
    // headerElementThree.classList.add('hover');
    handleAddHoverEffectTwo()
});

headerElementTwo.addEventListener('mouseout', (event) => {
    // headerElementOne.classList.remove('hover');
    // headerElementThree.classList.remove('hover');
    handleAddHoverEffectTwoRemove()
});

headerElementThree.addEventListener('mouseover', (event) => {
    // headerElementOne.classList.add('hover');
    // headerElementTwo.classList.add('hover');
    handleAddHoverEffectThree()
});

headerElementThree.addEventListener('mouseout', (event) => {
    // headerElementOne.classList.remove('hover');
    // headerElementTwo.classList.remove('hover');
    handleAddHoverEffectThreeRemove()
});