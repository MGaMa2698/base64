

function cifrar(elemento){
    let palabra = document.getElementsByTagName("textarea")[0].value;
    let palabraCifrada = btoa(palabra);
    document.getElementById("cifrado").innerHTML = palabraCifrada;
}

function decifrar(elemento){
    let palabra = document.getElementsByTagName("textarea")[1].value;
    let palabraDecifrada = atob(palabra);
    document.getElementById("decifrado").innerHTML = palabraDecifrada;
}