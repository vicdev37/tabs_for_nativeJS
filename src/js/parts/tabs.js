function tabs() {
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

}

module.exports = tabs;