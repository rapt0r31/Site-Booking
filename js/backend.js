'use strict';
(function() {

	var URL = 'https://js.dump.academy/keksobooking';

	window.upload = function(data, onSuccess){
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';

		xhr.addEventListener('load', function() {

			onSuccess(xhr.response);
		});

		xhr.open('POST', URL);
		xhr.send(data);
	};
})();

(function() {

	var URL = 'https://js.dump.academy/keksobooking/data';

	window.load = function(onSuccess){
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';

		xhr.addEventListener('load', function() {
			if(xhr.status === 200){
				onSuccess(xhr.response);
			}else {
				onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
			}
		});

		xhr.addEventListener('error', function(){
			onError('Произошла ошибка соединения');
		});

		xhr.addEventListener('timeout', function(){
			onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
		});

		xhr.timeout = 10000;

		xhr.open('GET', URL);
		xhr.send();

	};
})();