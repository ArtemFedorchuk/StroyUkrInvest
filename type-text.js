

$(document).ready(function(){
  	let typed = new Typed(".header__text", {
	  strings: ["Привет друзья", "Мы будем рады помочь Вам!","Если будут вопросы обращайтесь!"],
	  startDelay: 3500, //старт удаления через..
	  typeSpeed: 80,    //скорость печати
	  backSpeed: 30,    //скорость удаления
	  loop: true,       //бесконечность
	  backDelay: 2500,   //время до возврата
	  smartBackspace: true // Default value
	});
});