"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profession = "periodista";
adalaber1.showBio = (showBio) =>
  console.log(
    "Mi nombre es " +
      adalaber1.name +
      ", tengo " +
      adalaber1.age +
      " y soy " +
      adalaber1.profession
  );

adalaber1.showBio();

/*const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.profession = "actriz";*/

/*console.log(
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.`
);

console.log(
  `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}.`
);*/
