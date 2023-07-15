const cantidad = document.querySelector('#icantidad');
const precio = document.querySelector('#precio').textContent;
const resultado = document.getElementById('resultado')
const calcular = document.getElementById('calcular')
const circulo = document.querySelector('#circulo') ;
const color = document.querySelector('#color'); //select
let select = document.getElementById('color');

calcular.addEventListener('click', () => 
{
    valor = cantidad.value
    total = valor * precio ; 
    resultado.innerHTML = total;
});

select.addEventListener('change',
function(){
    let selectedOperation = select.options[select.selectedIndex].value;
    console.log(selectedOperation)
    if (selectedOperation === 'blue'){
        circulo.style.backgroundColor = '#0d47c9';
        } 
    else if (selectedOperation === 'grey'){
        circulo.style.backgroundColor = '#9a9aa5';
        } 
    else if (selectedOperation === 'red'){
        circulo.style.backgroundColor = '#ff0018';
        } 
    else {
        circulo.style.backgroundColor = '#9a9aa5';           
        }
    });