function myFunction(x){
    if (x.matches) { // If media query matches
        $(".v-parallax").paroller({
            factor: 0,
            factorXs: 0,          // multiplier for scrolling speed and offset if window width is <576px
            factorSm: 0,          // multiplier for scrolling speed and offset if window width is <=768px
            type: 'background',     // background, foreground
            direction: 'vertical' // vertical, horizontal
        });
        console.log('Chico');
    } else {
        $(".v-parallax").paroller({
            factor: -0.05,
            factorMd: -0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
            factorLg: -0.2,          // multiplier for scrolling speed and offset if window width is <=1200px
            type: 'background',     // background, foreground
            direction: 'vertical', // vertical, horizontal
            transition: 'transform 0.1s ease' // CSS transition, added on elements where type:'foreground'
        });
        console.log('Grande');
    }
}


var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes


// scroll color efects
$(window).scroll(() => {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});