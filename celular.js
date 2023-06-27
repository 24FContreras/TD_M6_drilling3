const moment = require("moment");
require("moment/locale/es");
moment.locale("es");

//Crea un nuevo archivo llamado celular.js, que contenga y exporte un objeto. El objeto
//debe tener como contenido pares llave - valor de, por lo menos, cinco características de
//tu celular, más un sexto ítem que contenga una fecha generada por moment.

const celular = {
  marca: "Xiaomi",
  modelo: "Redmi Note 8",
  color: "verdeazul",
  ram: "4gb",
  bateria: "4000 mAh",
  fecha: moment().format("LL"),
};

//Crea una copia del objeto en celular.js, y actualiza dos de sus propiedades utilizando el
//spread operator.

const celularActualizado = { ...celular, color: "rojo", ram: "8gb" };

//Escribe un ejemplo de función de callback (puedes utilizar las revisadas en el primer y
//segundo CUE), pero esta vez utilizando la sintaxis de función de flecha.

const obtenerColor = (elemento) => {
  return `El color es: ${elemento.color}`;
};

const reportarInformacion = (elemento, callback) => {
  console.log(callback(elemento));
};

reportarInformacion(celularActualizado, obtenerColor);

module.exports = celular;
