$(document).ready(function(){
	const popup = document.querySelector('.feedback-popup-back');
	const popupClose = document.querySelector('.close-btn');
	popupClose.addEventListener('click', () => {
		popup.style.opacity = '0'
		setTimeout(() => {
			popup.style.transform = 'scale(0)'
		}, 2000)

	})
	const feedbackOpen = document.querySelector('.contact-btn');
	feedbackOpen.addEventListener('click', () => {
		popup.style.opacity = '1'
		popup.style.transform = 'scale(1)'
	})

	$('.slider-images').slick({
		dots: false,
		infinite: true,
		speed: 500,
		autoplaySpeed: 4000,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		prevArrow: $('.slider-left-button'),
		nextArrow: $('.slider-right-button'),
	});


});
