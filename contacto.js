let listaDeContactos = ["miryam rodriguez", "iniris rodriguez", "sharon porras", "janer puerta"];

// Añadir un nuevo contacto
function agregar(nombreApellido) {
  listaDeContactos.push(nombreApellido);
}

// Borrar un contacto
function borrar(nombreApellido) {
  const index = listaDeContactos.indexOf(nombreApellido);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
  } else {
    console.log("El contacto no existe en la lista");
  }
}

// Imprimir en consola
function imprimir() {
  if (listaDeContactos.length === 0) {
    console.log("La lista de contactos está vacía.");
  } else {
    console.log("Lista de contactos:");
    listaDeContactos.forEach((contacto) => {
      console.log(contacto);
    });
  }
}