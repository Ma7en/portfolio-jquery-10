


/*
==============================================
==============================================
*/

/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

/* end scroll to top */


/*
==============================================
==============================================
*/


/* start header */

let header = document.querySelector(".header");
let menuLinks = document.querySelector(".header .links");
let linksLis = document.querySelectorAll(".header .links li");
let toggleMenu = document.querySelector(".header #toggle");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("fa-times")
    menuLinks.classList.toggle("open");
});
window.addEventListener("scroll", () => {
    if(this.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
window.addEventListener("load", () => {
    if(this.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
linksLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        menuLinks.classList.toggle("open");
        toggleMenu.classList.toggle("fa-times");
    });
});



/* end header */

/*
================================================
================================================
*/

/* === start scroll secticon acrive link === */

// let sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//     let scrollY = window.pageYOffset;
//     sections.forEach(current => {
//         let sectionHeight = current.offsetHeight,
//             sectionTop =current.offsetTop - 100 , // -58
//             sectionId = current.getAttribute("id")
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.header .links a[href*=' + sectionId + ']').classList.add('active');
//         } else {
//             document.querySelector('.header .links a[href*=' + sectionId + ']').classList.remove('active');
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive);
// window.addEventListener("load", scrollActive);


/* === end scroll secticon acrive link === */

/*
==============================================
==============================================
*/

/* === start footer dateYear === */

let dateYear = document.querySelector(".dateYear");
let newDate = new Date();

window.addEventListener("load", ()=> {
    dateYear.innerHTML = newDate.getFullYear();
});

/* === end footer dateYear === */

/*
==============================================
==============================================
*/



$(function () {



// Adjust home Height
    let myhome = $('.home');
    let mySlider = $('.bxslider');
    myhome.height($(window).height());
    $(window).resize(function () {
        myhome.height($(window).height());
        // Adjust Bxslider List Item Center
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    });



// Links Add Active Class
    $('.links li a').click(function (e) {
        // e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    });



// Adjust Bxslider List Item Center
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });




// Trigger The Bx Slider
    mySlider.bxSlider({
        pager: false
    });



// Smooth Scroll To Div section 
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top,
        }, 1000);
    });



/* Start Testimonials Our Auto Slider Code */
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(5000).fadeOut(1500, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(5000).fadeOut(1500, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());





// Trigger MixitUp
    $('#Container').mixItUp();
// Adjust Shuffle Links
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });



// Trigger Nice Scroll
    // $('html').niceScroll({
    //     cursorcolor: '#1abc9c',
    //     cursorwidth: '10px',
    //     cursorborder: '1px solid #1abc9c',
    //     cursorborderradius: 0,
    // });








});