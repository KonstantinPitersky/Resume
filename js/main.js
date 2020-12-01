
'use strict'

function start() {
	document.querySelector('.main__row').classList.add('scroll-up');
	document.removeEventListener("click", start);
	new Promise((resolve) => {
		setTimeout(()=> {
		document.querySelector('.main__row').classList.add('resume-reading');
		document.querySelector('.main__label').classList.add('show-bg');
		resolve();
		}, 1000)
	}).then(() => {
		setTimeout(() => {
			document.querySelector('.label__photo').classList.add('scale-item');
			document.querySelector('.contacts__title').classList.add('show-item');
			}, 1000)
	}).then(() => {
		setTimeout(() => {
			document.querySelector('.contacts__ul').classList.add('show-contacts');
		}, 2000)
		
	}).then(() => {
		setTimeout(()=> {
			document.body.classList.remove('no-scroll');
		}, 3000)
	})
}

document.addEventListener("click", start);
