
const typed = new Typed('.typed',{
    strings:[
      ' <i class="letra__js"> presencial </i>',
      ' <i class="letra__js"> online </i>',
      ' <i class="letra__js"> a domicilio </i>',    ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
//boton de texto oculto 
let hideText_btn = document.getElementById('hideText_btn') ;

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText (){
	hideText.classList.toggle('show');
}
//boton1
let hideText_btn1 = document.getElementById('hideText_btn1') ;

let hideText1 = document.getElementById('hideText1');

hideText_btn1.addEventListener('click', toggleText1);

function toggleText1 (){
	hideText1.classList.toggle('show');
}
//boton2
let hideText_btn2 = document.getElementById('hideText_btn2') ;

let hideText2 = document.getElementById('hideText2');

hideText_btn2.addEventListener('click', toggleText2);

function toggleText2 (){
	hideText2.classList.toggle('show');
}
//boton3
let hideText_btn3 = document.getElementById('hideText_btn3') ;

let hideText3 = document.getElementById('hideText3');

hideText_btn3.addEventListener('click', toggleText3);

function toggleText3 (){
	hideText3.classList.toggle('show');
}
//boton4
let hideText_btn4 = document.getElementById('hideText_btn4') ;

let hideText4 = document.getElementById('hideText4');

hideText_btn4.addEventListener('click', toggleText4);

function toggleText4 (){
	hideText4.classList.toggle('show');
}
//boton5
let hideText_btn5 = document.getElementById('hideText_btn5') ;

let hideText5 = document.getElementById('hideText5');

hideText_btn5.addEventListener('click', toggleText5);

function toggleText5 (){
	hideText5.classList.toggle('show');
}
//boton6
let hideText_btn6 = document.getElementById('hideText_btn6') ;

let hideText6 = document.getElementById('hideText6');

hideText_btn6.addEventListener('click', toggleText6);

function toggleText6 (){
	hideText6.classList.toggle('show');
}
//boton7
let hideText_btn7 = document.getElementById('hideText_btn7') ;

let hideText7 = document.getElementById('hideText7');

hideText_btn7.addEventListener('click', toggleText7);

function toggleText7 (){
	hideText7.classList.toggle('show');
}
//boton8
let hideText_btn8 = document.getElementById('hideText_btn8') ;

let hideText8 = document.getElementById('hideText8');

hideText_btn8.addEventListener('click', toggleText8);

function toggleText8 (){
	hideText8.classList.toggle('show');
}
//boton9
let hideText_btn9 = document.getElementById('hideText_btn9') ;

let hideText9 = document.getElementById('hideText9');

hideText_btn9.addEventListener('click', toggleText9);

function toggleText9 (){
	hideText9.classList.toggle('show');
}
//boton10
let hideText_btn10 = document.getElementById('hideText_btn10') ;

let hideText10 = document.getElementById('hideText10');

hideText_btn10.addEventListener('click', toggleText10);

function toggleText10 (){
	hideText10.classList.toggle('show');
}
//boton11
let hideText_btn11 = document.getElementById('hideText_btn11') ;

let hideText11 = document.getElementById('hideText11');

hideText_btn11.addEventListener('click', toggleText11);

function toggleText11 (){
	hideText11.classList.toggle('show');
}

