function form() {
  // //Form
  // // создаем объект с сообщениями
  // 	let message = {
  // 		loading: 'Загрузка',
  // 		success: 'Спасибо! Скоро мы с вами свяжемся!',
  // 		failure: 'Что-то пошло не так...'
  // 	};

  // 	// получаем элементы формы
  // 	let form = document.getElementsByClassName('main-form')[0],
  // 		formBottom = document.getElementById('form'),
  // 		input = document.getElementsByTagName('input'),
  // 		statusMessage = document.createElement('div');
  // 	// стилизуем div
  // 	statusMessage.classList.add('status');
  // function sendForm(elem) {
  // 	// вешаем submit не на кнопку отправки, на всю форму	
  // 	elem.addEventListener('submit', function (e) {
  // 		// отменяем стандартное поведение браузера	
  // 		e.preventDefault();
  // 		// добавляем новый div	
  // 		elem.appendChild(statusMessage);
  // 		// создаем запрос для отправки данных на сервер	
  // 		let request = new XMLHttpRequest();
  // 		request.open('POST', 'server.php');
  // 		// обычная отправка формы
  // 		// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // 		//отправка формы через json
  // 		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  // 		// получить данные из инпутов. создаем переменную и конструктор	
  // 		let formData = new FormData(elem);
  // 		// промежуточный объект. 
  // 		let obj = {};
  // 		// передаем данные в объект из formData
  // 		formData.forEach(function (value, key) {
  // 			obj[key] = value;
  // 		});
  // 		let json = JSON.stringify(obj);

  // 		// request.send(formData);
  // 		request.send(json);

  // 		// используем readystatechange для наблюдений за состояниями нашего запроса
  // 		request.onreadystatechange = function () {
  // 			if (request.readyState < 4) {
  // 				statusMessage.innerHTML = message.loading;
  // 			} else if (request.readyState === 4 && request.status == 200) {
  // 				statusMessage.innerHTML = message.success;
  // 			} else {
  // 				statusMessage.innerHTML = message.failure;
  // 			}
  // 		}

  // 		// очищаем инпуты после отправки формы
  // 		for (let i = 0; i < input.length; i++) {
  // 			input[i].value = '';
  // 		}

  // 	});
  // }
  // 	sendForm(form);
  // 	sendForm(formBottom);








  //Form с promises

  let message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };


  let form = document.getElementsByClassName('main-form')[0],
    formBottom = document.getElementById('form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {

          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');

          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(data);
        });
      }

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }
      postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => {
          statusMessage.innerHTML = message.success;
        })
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput);
    });
  }
  sendForm(form);
  sendForm(formBottom);

}

module.exports = form;