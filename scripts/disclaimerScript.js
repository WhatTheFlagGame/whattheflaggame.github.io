const popupLink = document.getElementById('popup-link');
const popupOverlay = document.querySelector('.popup-overlay');
const closePopup = document.querySelector('.close-popup');

popupLink.addEventListener('click', () => {
	popupOverlay.style.display = 'flex';
	popupOverlay.style.animation = 'fadeIn 0.5s forwards';
});

closePopup.addEventListener('click', () => {
	popupOverlay.style.animation = 'fadeOut 0.5s forwards';

	setTimeout(() => {
		popupOverlay.style.display = 'none';
	}, 500);
});
