'use strict'
class Main {
	showResume() {
		document.removeEventListener("click", this.showResume);
		document.querySelector('.main__row').classList.add('scroll-up');
		new Promise((resolve) => {
			setTimeout(()=> {
			document.querySelector('.burger__body').classList.add('show-burger');
			document.querySelector('.main__row').classList.add('resume-reading');
			document.querySelector('.main__label').classList.add('show-bg');
			resolve();
			}, 1000)
		}).then(() => {
			setTimeout(() => {
				document.querySelector('.label__photo').classList.add('scale-item');
				document.querySelector('.contacts__title').classList.add('show-title');
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
	toggleInformation() {
		document.querySelector('.burger__body').classList.toggle('active-burger',);
		document.querySelector('.main__label').classList.toggle('active-menu');
	}

}

let main = new Main;

document.addEventListener("click", main.showResume);
document.querySelector('.burger__body').addEventListener('click', main.toggleInformation);