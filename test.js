let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
	tg.MainButton.setText("Вы нег!");
	item = "1";
	tg.MainButton.show();
})

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
})

//let tg = window.Telegram.WebApp;
//
//tg.expand();
//
//tg.MainButton.textColor = "#FFFFF";
//tg.MainButton.color = "#2cab37";
//
//let item = "";
//
//let btn_nigger = document.getElementByID("btn_nigger");
//
//btn_nigger.addEventListener("click", function() {
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Негр пашет круче всех");
//		item = "nigger";
//		tg.MainButton.show();
//	}
//})//