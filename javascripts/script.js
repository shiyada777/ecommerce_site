window.addEventListener('DOMContentLoaded', () => {
    left_Arrow.style.visibility = 'hidden';
    right_Arrow.style.visibility = shirt_section.scrollWidth > shirt_section.clientWidth ? 'visible' : 'hidden';
});


const darkModeButton = document.getElementById('darkModeButton');
const Light = document.getElementById('light');
const dark = document.getElementById('dark');
const left_Arrow = document.getElementById('leftArrow');
const right_Arrow = document.getElementById('rightArrow');
const shirt_section = document.getElementById('shirt-section')
const scrollAmount = 14000;
// cart add 
const cart = document.getElementById('cart');
let Itemcounter = document.getElementById('counter');
let addToCart=document.querySelectorAll('.addtocart');
const removeBtn = document.getElementById('remove');
let cartCount = 0;
// add to cart 
addToCart.forEach(button =>{
  button.addEventListener('click', () => {
    Itemcounter.innerText = ++cartCount;
})});




//Dark mode toggle

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');

    // Changing the button icon 

    if (document.body.classList.contains('darkMode')) {
        Light.style.display = 'inline';
        dark.style.display = 'none';
    }
    else {
        Light.style.display = 'none';
        dark.style.display = 'inline';
    }

});

//arrow button functionality

right_Arrow.addEventListener('click', () => {
    shirt_section.scrollBy({ left: scrollAmount, behavior: 'smooth' })

});
left_Arrow.addEventListener('click', () => {
    shirt_section.scrollBy({ left: -scrollAmount, behavior: 'smooth' })

});

//show hide the button on scroll position
shirt_section.addEventListener('scroll', () => {
    left_Arrow.style.visibility = shirt_section.scrollLeft > 1300 ? 'visible' : 'hidden';
});

