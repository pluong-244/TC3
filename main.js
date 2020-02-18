var slideUp2 = {
    distance: '20%',
    origin: 'bottom',
    opacity: 0,
    duration: 1000
};

var slideUp1 = {
    distance: '20%',
    origin: 'bottom',
    opacity: 0,
    duration: 2000
};

ScrollReveal().reveal('#right', slideUp1)
ScrollReveal().reveal('#left', slideUp2)