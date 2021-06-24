$(document).ready(function () {
	const contactBtn = document.querySelector('.contact-us-button')
	const contactForm = document.querySelector('.contact-form-inputs-wrapper')
	const burgerToggleBtn = document.querySelector('.burger-toggle-btn')
	const menuItems = document.querySelector('.menu-items')
	const closeMenu = document.querySelector('.close-menu')
	closeMenu.addEventListener('click', () => {
		menuItems.style.transform = 'translateY(-100%)'
	})
	burgerToggleBtn.addEventListener('click', () => {
		menuItems.style.transform = 'translateY(0)'
	})
	contactBtn.addEventListener('click', () => {
		contactForm.style.display = "block";
	})

	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 1000,
		centerPadding: '40px',
		fade: true,
		cssEase: 'linear',
		dots: true,
		arrows: false,
		fade: true,
	});
});
