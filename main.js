var slideUp1 = {
    distance: '20%',
    origin: 'bottom',
    opacity: 0,
    duration: 1000
};

var slideUp2 = {
    distance: '20%',
    origin: 'bottom',
    opacity: 0,
    duration: 2000
};

var slideUp3 = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    duration: 3000
};

var slideUp4 = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 2000,
    duration: 3000
};

ScrollReveal().reveal('#right', slideUp2)
ScrollReveal().reveal('#left', slideUp1)
ScrollReveal().reveal('#title-text-a', slideUp3)
ScrollReveal().reveal('#title-text-b', slideUp4)