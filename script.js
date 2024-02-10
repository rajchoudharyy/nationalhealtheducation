
function smoothScroll() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
smoothScroll();



// var manu = document.querySelector('.menu-link');
// var toggleButton = document.querySelector('.menu-btn span');
// var close = document.querySelector('.menu-btn span');
// var page1 = document.querySelector('#page1');
// var main = document.querySelector('#main');

// let isOpen = false;

// toggleButton.addEventListener('click', () => {
//     if (!isOpen) {
//         gsap.to(manu,{
//             x:0,
//             duration:1.2,
//         })
//         close.innerHTML = '<i class="ri-close-fill"></i>';
//         isOpen = true;

//     } else {
//         gsap.to(manu,{
//             x:1700,
//         })
//         close.innerHTML = '<i class="ri-menu-4-line"></i>';
//         isOpen = false;
//     }
// });