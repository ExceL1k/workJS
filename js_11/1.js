var m1 = [99,33,'Hello'];

function masOut(){
	var p = document.getElementById('out');
	var str = '';
	for (var i=0; i<m1.length;i++){
		str += i + ' --- ' + m1[i] + '<br>';
	}
	p.innerHTML = str;
}

masOut();

function p1(){
	var i1 = document.getElementById('i1').value;
	m1.push(i1);
	masOut();
}

function p2(){
	m1.pop();
	masOut();
}