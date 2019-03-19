let age = document.getElementById('age');


function showUser(surname, name) {
  this.surname = 'Иванов';
  this.name = 'Виктор';
  this.value = 30;
  this.bingo = function () {
   
  };
   alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
}

// let victor = new User('Victor');

// console.log(victor);

// showUser();