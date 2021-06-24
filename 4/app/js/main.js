$(document).ready(function () {
	const navBtn = document.querySelector('.navbar-toggle')
	const navMenu = document.querySelector('.navbar-list')
	const courseAboutItems = document.querySelectorAll('.course-about-item')
	const lenCourseAboutItems = Array.from(courseAboutItems).length
	const navMenuLink = document.querySelector('.navbar-list-item-link')
	navBtn.addEventListener('click', () => {
		navMenu.classList.toggle('navbar-list')
		navMenu.classList.toggle('navbar-menu-toggle')
	})
	$('.slider-items').slick({
		dots: true,
		infinite: true,
		speed: 300,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false
	});
	$('.course-about-slider').slick({
		infinite: true,
		slidesToShow: 3,
		dots: lenCourseAboutItems > 3 ? true : false,
		slidesToScroll: 1,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 850,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 2,
					centerPadding: '0px',
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					dots: true,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			}
		]
	});

})



