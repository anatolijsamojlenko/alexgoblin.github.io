$(document).ready(function(){$(".search-icon").on("click",function(){$(".header-search").toggleClass("active-search"),$(".header-input[type='text']").focus()}),$(".burger-menu").on("click",function(){$(this).toggleClass("burger-menu-active"),$(".nav-list").toggleClass("nav-list-mobile")}),$(".hero-categories-wrap").slick({centerMode:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,prevArrow:".prev",nextArrow:".next",slide:".hero-categories-item",autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1275,settings:{slidesToShow:2}},{breakpoint:1024,settings:{slidesToShow:1}}]}),mixitup(".where-go-inner-cities-wrap",{animation:{effects:"fade translateZ(-100px)",easing:"cubic-bezier(0.645, 0.045, 0.355, 1)"}}),(new WOW).init()});