var goods = {
	"28292" : {
		"name" : "Банан",
		"cost" : 30,
		"img" : "https://cdn3.iconfinder.com/data/icons/fruits-8/512/banana-128.png",
		"sklad" : "да"
	},
	"28155" : {
		"name" : "Помидор",
		"cost" : 40,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"sklad" : "нет"
	},
	"111335" : {
		"name" : "Клубника",
		"cost" : 60,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",
		"sklad" : "да"
	}
}
console.log(goods)
var out = '';
for (var key in goods){
	out += "Название: " + goods[key].name + "<br>";
	out += "Цена: " + goods[key].cost + "<br>";
	out += "Наличие: " + goods[key].sklad + "<br>";
	out	+= '<img src="'+goods[key].img+'">';
	out	+= "<hr>";
}
document.getElementById("out").innerHTML = out;