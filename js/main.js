const Encriptar = document.getElementById("encriptar");
const Desencriptar = document.getElementById("desencriptar");
const Mensaje = document.getElementById("areaMensaje");
const SinMensaje = document.getElementById("sinMensaje");
const Parrafos = document.getElementById("parrafo")
const Texto = document.getElementById("areaTexto");
const Copiar = document.getElementById("copiar");
const Borrar = document.getElementById("borrar");

// Funciones

const BorrarElemento = () => {
  Texto.value = "";
  Texto.focus();
  SinMensaje.style.display = "flex";
  Parrafos.children[0].remove();
}

const CrearElemento = (e) =>{
  let nuevo = document.createElement("p");
  nuevo.innerHTML = e;
  Parrafos.appendChild(nuevo)
}

const EncriptarMensaje = () =>{

  SinMensaje.style.display = "none";

  /**
   * 
   * La letra "a" es convertida para "ai"
   * La letra "e" es convertida para "enter"
   * La letra "i" es convertida para "imes"
   * La letra "o" es convertida para "ober"
   * La letra "u" es convertida para "ufat"
   * 
  */

  let mensajeParaEncriptar = Texto.value.toLowerCase();
  let encriptado = mensajeParaEncriptar.replace(/i/gmi,"imes");
  encriptado = encriptado.replace(/e/gmi,"enter")
  encriptado = encriptado.replace(/a/gmi,"ai");
  encriptado = encriptado.replace(/o/gmi,"ober")
  encriptado = encriptado.replace(/u/gmi,"ufat")

  console.log(encriptado)
  return CrearElemento(encriptado)
}

const DesencriptarMensaje = () =>{

  SinMensaje.style.display = "none";

  /**
   * 
   * La palabra "ai" es convertida para "ai"
   * La palabra "enter" es convertida para "e"
   * La palabra "imes" es convertida para "i"
   * La palabra "ober" es convertida para "o"
   * La palabra "ufat" es convertida para "u"
   * 
  */

  let mensajeParaDesencriptar = Texto.value.toLowerCase();
  let desencriptado = mensajeParaDesencriptar.replace(/enter/gmi,"e");
  desencriptado = desencriptado.replace(/ober/gmi,"o")
  desencriptado = desencriptado.replace(/imes/gmi,"i");
  desencriptado = desencriptado.replace(/ai/gmi,"a")
  desencriptado = desencriptado.replace(/ufat/gmi,"u")

  console.log(desencriptado);
  return CrearElemento(desencriptado);
}

// Eventos de Botones

Encriptar.addEventListener("click", () =>{
  EncriptarMensaje();
  Parrafos.children[1].remove();
});

Desencriptar.addEventListener("click", () => {
  DesencriptarMensaje();
  Parrafos.children[1].remove();
});

Borrar.addEventListener("click", () =>{
  BorrarElemento();
  Texto.forEach(Texto.value = "");
});

Copiar.addEventListener("click", async () =>{
  let copiadoAlPortapapeles = Parrafos.children[0].innerHTML;

  await navigator.clipboard.writeText(copiadoAlPortapapeles);
  alert("¡Texto Copiado!, se pegará automaticamente");
  BorrarElemento();

  let pegar = await navigator.clipboard.readText()

  setTimeout(() => {
    Texto.focus();
    Texto.value = pegar;
  }, 1000);

});
