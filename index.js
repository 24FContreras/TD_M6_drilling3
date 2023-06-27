const _ = require("lodash");
const moment = require("moment");

//Importa el objeto en tu archivo index.js, utilizando la desestructuración de objetos.
const { marca, modelo, color, ram, bateria, fecha } = require("./celular.js");

//Crea una función que muestre por pantalla la descripción de tu celular, utilizando
//template literals, y las variables recogidas del objeto importado desde el archivo
//celular.js.

const mostrarDetalles = () => {
  console.log(
    `El celular ${marca} ${modelo} es de color ${color}, dispone de una memoria de ${ram} y una bateria de ${bateria}.\nEsta consulta fue realizada el ${fecha}`
  );
};

mostrarDetalles();
