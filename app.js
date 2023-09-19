const Enemigo = require("./Enemigo.js");
const PowerRanger = require("./PowerRanger.js");

const powerRangerRosa = new PowerRanger(); 
const powerRangerVerde = new PowerRanger();
const enemigo1 = new Enemigo();

enemigo1.setNombre("Lord Zedd");

enemigo1.setPuntosVida(3);
enemigo1.setPuntosAtaque(1);

powerRangerRosa.setNombre("Pink");
powerRangerVerde.setNombre("Green");
powerRangerVerde.setPuntosAtaque(2);
powerRangerVerde.setPuntosVida(4);

powerRangerVerde.atacaA(enemigo1); // 3-2 = 1
enemigo1.atacaA(powerRangerVerde);
enemigo1.atacaA(powerRangerVerde);
enemigo1.atacaA(powerRangerVerde);
powerRangerVerde.atacaA(enemigo1); // 1 > 0 
powerRangerVerde.atacaA(enemigo1); // -1 








/* console.log( powerRangerRosa.getNombre()); */
/* 
powerRangerRosa.decimeComoTeLlamas();
powerRangerVerde.decimeComoTeLlamas(); */


