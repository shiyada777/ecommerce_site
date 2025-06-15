const darkModeButton = document.getElementById('darkModeButton');
const Light = document.getElementById('light');
const dark = document.getElementById('dark');

//Dark mode toggle

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');

// Changing the button icon 

    if (document.body.classList.contains('darkMode')) {
       Light.style.display='inline';
       dark.style.display='none';
    }
    else {
         Light.style.display='none';
       dark.style.display='inline';
    }

});

