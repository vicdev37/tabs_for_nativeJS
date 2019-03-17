window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	const tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');


	const hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
				}
	};
	
	hideTabContent(1);


	const showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
			}
	}


	// info.addEventListener('click', function(event) {
	// 	let target = event.target;
	// 	if (target && target.classList.contains('info-header-tab')) {
	// 		for(let i = 0; i < tab.length; i++) {
	// 			if (target == tab[i]) {
	// 				hideTabContent(0);
	// 				showTabContent(i);
	// 				break;
	// 			}
	// 		}
	// 	}
	// });

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			tab.forEach((item, i) => {
				if (target == item) {
					hideTabContent(0);
					showTabContent(i);
				}
			});
		}
	});

	// Timer

	let deadline = '2019-03-13 04:43:07 PM';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)));  


		hours = ("0" + hours).slice(-2);
		minutes = ("0" + minutes).slice(-2);
		seconds = ("0" + seconds).slice(-2);


		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;
			

			

			if (t.total <= 0) {
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
				clearInterval(timeInterval);
				
				
				
			}

		}
		
	}
	setClock('timer', deadline);	 	
	

	//Modal

	const more = document.querySelectorAll('.more, .description-btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	
	// more.addEventListener('click', function() {
	// 	overlay.style.display = 'block';
	// 	this.classList.add('more-splash');
	// 	document.body.style.overflow = 'hidden';
	// });

	more.forEach(el => {
		el.addEventListener('click', function (event) {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
			console.log(this);
		});
	});

	
	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		this.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	// let more2 = Array.from(document.querySelectorAll('.description-btn'));
});


//

