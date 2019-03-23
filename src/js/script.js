window.addEventListener('DOMContentLoaded', function () {
			'use strict';
			let calc = recuired('./parts/calc.js'),
					form = recuired('./parts/form.js'),
					slider = recuired('./parts/slider.js'),
					tabs = recuired('./parts/tabs.js'),
					timer = recuired('./parts/timer.js'),
					modal = recuired('./parts/modal.js');
		
	calc();
	form();
	slider();
	tabs();
	timer();
	modal();
});	
