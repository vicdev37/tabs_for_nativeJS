function modal() {
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


  	close.addEventListener('click', function () {
  	  styleToggle(this);
  	});

  	// let more2 = Array.from(document.querySelectorAll('.description-btn'));

}

module.exports = modal;