/*
let texto_final=" "
//caja de texto


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
  }

  function condicionesIniciales() {
    asignarTextoElemento('h1','Encriptador 2024');
    asignarTextoElemento('p','Su texto debe estar en minusculas y sin acentos');
  }
      
  condicionesIniciales();

  textarea1.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el comportamiento por defecto del Enter (salto de línea)
        encriptar(); // Llamar a la función para encriptar el texto
      }
    });

  function encriptar()   {


    const texto_inicial = document.getElementById("textarea1").value
    console.log('Texto encriptado:', texto_inicial);

    const regla = /[A-ZÁÉÍÓÚÜ]/

    if(regla.test(texto_inicial))   {

        alert("El texto ingresado contiene letras mayúsculas o acentos, por favor vuelva a intentar 🤞 ")
    }


    const tiene_numeros = /\d/.test(texto_inicial)

    if(tiene_numeros)   {

        alert("El texto no debe tener numeros, intente de nuevo 😉")
        return
    }


    let texto_final = texto_inicial

   let texto_encriptado = texto_inicial
  .replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat')

  document.getElementById('textarea2').value = texto_encriptado

  }

  function desencriptar() {
    // Utilizamos la variable global para desencriptar
    const textoOriginal = textoOriginalGlobal;
  
    // Muestra el texto desencriptado en textarea2
    document.getElementById('textarea2').value = textoOriginal;
  
    console.log('Texto original:', textoOriginal);
  
  }


 function copiar_texto()    {

    const texto_desencriptado = document.getElementById('textarea2').value;

    navigator.clipboard.writeText(texto_desencriptado)
    .then(() => { 
      document.getElementById('textarea1').value = '';
      document.getElementById('textarea2').value = '';
      })
 }
 */


 let textoGlobal = '';

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function condicionesIniciales() {
  asignarTextoElemento('h1','Encriptador 2024');
  asignarTextoElemento('p','Su texto debe estar en minusculas y sin acentos');
}
    
condicionesIniciales();

textarea1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar el comportamiento por defecto del Enter (salto de línea)
      encriptar(); // Llamar a la función para encriptar el texto
    }
  });

function encriptar() {

  const texto_inicial = document.getElementById('textarea1').value;
  console.log('Texto encriptado:', texto_inicial);

  const regla = /[A-ZÁÉÍÓÚÜ]/

  if(regla.test(texto_inicial))   {

    alert("El texto ingresado contiene letras mayúsculas o acentos, por favor vuelva a intentar 🤞 ")
}

const tiene_numeros = /\d/.test(texto_inicial)

    if(tiene_numeros)   {

        alert("El texto no debe tener numeros, intente de nuevo 😉")
        return
    }

  textoGlobal = texto_inicial;

  const texto_encriptado = texto_inicial
  .replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');
      
  document.getElementById('textarea2').value = texto_encriptado;

}

function desencriptar() {
  // Utilizamos la variable global para desencriptar
  const textoDesencriptado = document.getElementById("textarea1").value
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

  document.getElementById('textarea2').value = textoDesencriptado;

}


function copiar() {
  const texto_desencriptado = document.getElementById('textarea2').value;

  // Copiar al portapapeles
  navigator.clipboard.writeText(texto_desencriptado)
  .then(() => {
    // Limpiar textareas
    document.getElementById('textarea1').value = '';
    document.getElementById('textarea2').value = '';
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err);
  });
  // document.querySelector('#copia').setAttribute('disabled','true');
  // document.getElementById('desencripta').removeAttribute('disabled');
}

   function borrarTodo()  {

    document.getElementById('textarea1').value = ''; 
    document.getElementById('textarea2').value = ''

   }


