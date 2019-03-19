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


	//!!
	function styleToggle(modal) {
		if (!overlay.style.display || overlay.style.display === 'none') {
			overlay.style.display = 'block';
			modal.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		} else {
			overlay.style.display = 'none';
			modal.classList.remove('more-splash');
			document.body.style.overflow = '';
		}
	}

	more.forEach(el => {
		el.addEventListener('click', function (event) {
			styleToggle(this);
		});
	});

	
	close.addEventListener('click', function() {
		styleToggle(this);
	});

	// let more2 = Array.from(document.querySelectorAll('.description-btn'));




//Form
// создаем объект с сообщениями
	let message = {
		loading: 'Загрузка',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	// получаем элементы формы
	let form = document.getElementsByClassName('main-form')[0],
		formBottom = document.getElementById('form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	// стилизуем div
	statusMessage.classList.add('status');
function sendForm(elem) {
	// вешаем submit не на кнопку отправки, на всю форму	
	elem.addEventListener('submit', function (e) {
		// отменяем стандартное поведение браузера	
		e.preventDefault();
		// добавляем новый div	
		elem.appendChild(statusMessage);
		// создаем запрос для отправки данных на сервер	
		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		// обычная отправка формы
		// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		//отправка формы через json
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		// получить данные из инпутов. создаем переменную и конструктор	
		let formData = new FormData(elem);
		// промежуточный объект. 
		let obj = {};
		// передаем данные в объект из formData
		formData.forEach(function (value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		// request.send(formData);
		request.send(json);

		// используем readystatechange для наблюдений за состояниями нашего запроса
		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		}
	
		// очищаем инпуты после отправки формы
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
		
	});
}
	sendForm(form);
	sendForm(formBottom);
	

});












