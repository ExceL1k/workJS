function plus(){
    document.getElementById('out').innerHTML = parseInt(document.getElementById('n1').value)+parseInt(document.getElementById('n2').value);
}

function minus(){
    document.getElementById('out').innerHTML = parseInt(document.getElementById('n1').value)-parseInt(document.getElementById('n2').value);
}

function multiply(){
    document.getElementById('out').innerHTML = parseInt(document.getElementById('n1').value)*parseInt(document.getElementById('n2').value);
}

function devide(){
    document.getElementById('out').innerHTML = parseFloat(document.getElementById('n1').value)/parseFloat(document.getElementById('n2').value);
}