//0
const btn = document.getElementById('btnMain')

btn.onclick = () => {
    alert('New offers comming soon!')
}
//1
const div = document.getElementById('numero')
const btnPlus = document.getElementById('btnPlus')
const btnMinus = document.getElementById('btnMinus')

let suma = 0

btnPlus.onclick = () => {
    suma++
    div.innerHTML = suma
}
btnMinus.onclick = () => {suma--; div.innerHTML = suma}

//2
const btna = document.getElementById('a')
const btnb = document.getElementById('b')
const btnc = document.getElementById('c')

btna.onclick = () => console.log('click')
btna.onmousemove = () => console.log('Moviendo')

btnb.onmousedown = () => console.log('Se preciono el click')
btnb.onmouseup = () => console.log("Se solto el click")

btnc.onmouseover = () => console.log('Entra')
btnc.onmouseout = () => console.log('Sale')

//3

const inputNombre = document.getElementById("nombre")
const inputEdad = document.getElementById("edad")

inputNombre.onkeyup = () => {console.log('KEY UP')}
inputEdad.onkeydown = () => {console.log('KEY DOWN')}

inputNombre.onchange = () => {console.log('Se actualizo el valor')}
inputEdad.addEventListener('input', () => {
    console.log(inputEdad.value)
})

//4
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(formulario.children[0].value); 
    console.log(formulario.children[1].value);  
}

//5
localStorage.setItem('bienvenida', '¡Hola!');

localStorage.setItem('unNumero', 20);

let mensaje =  localStorage.getItem('bienvenida');

let numero  =  localStorage.getItem('unNumero');
console.log(mensaje);
console.log(numero);

//6
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');

//7
let lista   =  sessionStorage.getItem('seleccionados').split(",");
let bandera = (sessionStorage.getItem('esValido') == 'true');
let email   =  sessionStorage.getItem('email');

console.log(typeof lista);   
console.log(typeof bandera);
console.log(typeof email);

localStorage.numeroPrueba = 5;


console.log( localStorage.numeroPrueba ); // 5

let clave = 'toString';		
localStorage[clave] = "6";

//8
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}


//9
localStorage.setItem('bienvenida', '¡Hola!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear()    
sessionStorage.clear()

//10

const producto1 = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON);
console.log(typeof producto1); 
console.log(typeof enJSON);    

localStorage.setItem("producto1", enJSON)

const productos1 = [{ id: 1,  producto: "googles", precio: 125 },
                  {  id: 2,  producto: "googles2", precio: 70 },
                  {  id: 3,  producto: "googles3"  , precio: 50},
                  {  id: 4,  producto: "googles4" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


for (const producto of productos1) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(productos1));

class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {        this.precio = this.precio * 1.21;
    }
}


const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];

for (const objeto of almacenados)
    productos.push(new Producto(objeto));

for (const producto of productos)
    producto.sumaIva();