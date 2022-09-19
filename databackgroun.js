// Data-background js
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})
/*=============================== imgages-gallery ===============================*/

$('.gallery-item-thumb').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});
/*=============================== video-gallery ===============================*/
$('.video-opens').magnificPopup({
    type: 'iframe',
});

// nice-select
$('select').niceSelect();
// product-banner
$('.product-banner .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    animateOut: 'fadeOut',
    dots: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// Footer-current-year
var currntYear = new Date();
document.getElementById("years").innerHTML = currntYear.getFullYear();


//Menu-bar active script
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.primary-menu nav li a')
const menuLength = menuItem.length
for(let i = 0; i<menuItem.length; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = 'active-menu'
    }
}
