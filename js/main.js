const burgerBTN = document.querySelector('.burger-btn');
const navigation = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const show = () => {
	navigation.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	navItems.forEach((element) => {
		element.addEventListener('click', () => {
			navigation.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
burgerBTN.addEventListener('click', show);
window.addEventListener('scroll', handleObserver);
