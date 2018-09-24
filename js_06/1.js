function out(){
    var p;
    p = document.getElementById('out');
    //p.innerHTML = p.innerHTML + ' Hello';
    //p.innerHTML += ' <b>Hello</b>'
    //p.insertAdjacentHTML('beforeBegin','HI')
    // before begin - перед открывающимся тегом
    //p.insertAdjacentHTML('afterBegin','HI')
    // before begin - после открывающися тега но перед основным текстом
    //p.insertAdjacentHTML('beforeEnd','HI')
    // before end - перед закрывающим тегом
    //p.insertAdjacentHTML('afterEnd','HI')
    // after end - после закрывающего тега
    p.outerHTML = '<div class = "one">hello</div>'
    //заменяет полностью тег на новый
}