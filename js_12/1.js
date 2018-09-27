document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
	var poloska = document.getElementById('polosa');
	left -=  128
	if (left < -256){
		left = 0;
	}
	polosa.style.left = left +'px';
}