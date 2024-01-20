let listaDeContactos = ["miryam rodriguez", "iniris rodriguez", "sharon porras", "janer puerta"];
let contactoNuevo;
 contactoNuevo= "sheril"


 const cont = {

    id : 1143359902,
    nombres : "yerlis",
    apellidos : "smykle",
    telefonos : 3244962168,
    ubicaciones : {
        cuidad : "cartagena",
        direccion : "Pozon la conquista"
    }
}

console.log(listaDeContactos);

//Nuevo contacto
function nuevoContacto(nombres, telefonos) {
    nombres = cont.nombres;
    telefonos = cont.telefonos;
        listaDeContactos.unshift(nombres, telefonos);    
    

    return listaDeContactos;
}

nuevoContacto();
console.log(listaDeContactos);

let nuevaLista;
//Borrar un contacto
function borrarContacto(){
    let objetoRecorrido;
    for (objetoRecorrido in listaDeContactos) {
        nuevaLista = listaDeContactos.splice(3, 3, objetoRecorrido);    
    }

    return listaDeContactos;
}

borrarContacto()
console.log("Elemento Borrado: " + nuevaLista);

//Imprimir en consola la lista actualizada
function listaActualizada(){
    console.log(listaDeContactos);
}

listaActualizada(cont);