
// Formación bosonit ejercicios JavaScript


// Ejercicio 1 => Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ];

  let findArray = arrNames.find( obj => obj.id === 3 );


// Ejercicio 2 => Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos);

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

let arrTruthy = arrDirty.filter( elem => !!elem );


// Ejercicio 3 Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ];

let otherCities = arrCities.filter( city => city.country === "Spain" && !city.capital );



// Ejercicio 4 => Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const ar1 = [1,2,3];
const ar2 = [1,2,3,4,5];
const ar3 = [1,4,7,2];

function interSeccionTresArrays( ar1,ar2,ar3 ){
    return [...new Set([ ...ar1,...ar2,...ar3 ])];
}

let joinedArr = interSeccionTresArrays(ar1,ar2,ar3);


// Ejercicio 5 =>  Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain.
// El valor de isSpain será un booleano indicando si es una ciudad de España. Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
];


let anotherCity = arrCities2.filter( city => !city.capital).map( city => {
    let mappedObject = {
        city: city["city"],
        isSpain: city["capital"]
    }; return mappedObject;
});
console.log(anotherCity);

// Ejercicio 6 => 

/* 
    Ejercicio 6
Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed()
Ejemplo de uso de la función:

*/

const roundedResult = roundTo(2.123, 2); // 2.12
 
const roundedResult2 = roundTo(1.123456789, 6); // 1.123457


function roundTo( valorInicial, decimales ) {
    return Number( Math.round( valorInicial + 'e' + decimales ) + 'e-' + decimales );
}


//Ejercicio 7 =>

/* 
Ejercicio 7
Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
Ejemplo de uso de la función:
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result); // {a: 1, c: 3}
*/

// Forma optimizada

function returnFalsyValues(obj,arg){
    let filtro = Object.values(obj).filter(arg); 
        return Object.fromEntries(Object.entries(obj).filter( arg => !filtro.includes(arg[1])));
}
        
    let object5 = { a: 1, b: '2', c: 3 };
    console.log(returnFalsyValues(obj5,x => typeof x === 'number'));

// Forma menos optimizada pero válida

function returnFalsyValues2 ( obj,arg ){
    let assignedObject = {};
    let filteredValues =  Object.values(obj).filter(arg); // resultado => ['2']
    for( const key in obj ){
      if( !filteredValues.includes(obj[key]) ){
        Object.assign( assignedObject, {[key] : obj[key]} )
      }; 
    }; return assignedObject; 
}; 

let filteredObject = returnFalsyValues2( { a: 1, b: '2', c: 3 }, x => typeof x === 'string' );  // {a: 1, c: 3}
let filteredObject2 = returnFalsyValues2( { a: 1, b: '2', c: 3 }, x => typeof x === 'number' ); // {b: '2'}


// Ejercicio 8 => 

/* 
Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado 
(esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:
*/

// Con else y else if

function fromBytesToFormattedSizeUnits( number, param = 3 ){
   
    let precissionResult = number.toPrecision( param );

    if( Math.abs( number ) < Math.pow( 10,3 ) ){
        precissionResult = precissionResult / Math.pow( 10,0 ) + "B";
    } else if( Math.abs( number ) < Math.pow( 10,6 ) ){
        precissionResult = precissionResult / Math.pow( 10,3 ) + "KB";
    } else if( Math.abs( number ) < Math.pow( 10,9 ) ){
        precissionResult = precissionResult / Math.pow( 10,6 ) + "MB";
    } else if( Math.abs( number ) < Math.pow( 10,12 ) ){
        precissionResult = precissionResult / Math.pow( 10,9 ) + "GB";
    } else if( Math.abs( number ) < Math.pow( 10,15 ) ){
        precissionResult = precissionResult / Math.pow( 10,12 ) + "TB";
    } else if( Math.abs( number ) < Math.pow( 10,18 ) ){
        precissionResult = precissionResult / Math.pow( 10,15 ) + "PB";
    } else if( Math.abs( number ) < Math.pow( 10,21 ) ){
        precissionResult = precissionResult / Math.pow( 10,18 ) + "EB";
    } else if( Math.abs( number ) < Math.pow( 10,24 ) ){
        precissionResult = precissionResult / Math.pow( 10,21 ) + "ZB";
    } else {
        precissionResult += "YB"
    }

    return precissionResult;
}



const resultBytes1 = fromBytesToFormattedSizeUnits(1000);  // 1KB

const resultBytes2 = fromBytesToFormattedSizeUnits(623324);  // 623KB

const resultBytes3 = fromBytesToFormattedSizeUnits(123456789);  // 123MB

const resultBytes4 = fromBytesToFormattedSizeUnits(-12145489451.5932);  // -12.1GB


// Con switch case

function fromBytesToFormattedSizeUnits2(number, param=3){
    let valoresPow = [3,6,9,12,15,18,21,24];
    let precission = number.toPrecision(param);
    for (let i = 0; i < valoresPow.length; i++) {
        switch(valoresPow[i]){
            case 3: 
            if(Math.abs(number) < Math.pow(10,3)){
                precission = precission / Math.pow(10,0) + "B"
            }
            break;

            case 6: 
            if(Math.abs(number) < Math.pow(10,6)){
                precission = precission / Math.pow(10,3) + "KB"
            }
            break;

            case 9: 
            if(Math.abs(number) < Math.pow(10,9)){
                precission = precission / Math.pow(10,6) + "MB"
            }
            break;

            case 12: 
            if(Math.abs(number) < Math.pow(10,12)){
                precission = precission / Math.pow(10,9) + "GB"
            }
            break;

            case 15: 
            if(Math.abs(number) < Math.pow(10,15)){
                precission = precission / Math.pow(10,12) + "TB"
            }
            break;

            case 18: 
            if(Math.abs(number) < Math.pow(10,18)){
                precission = precission / Math.pow(10,15) + "PB"
            }
            break;

            case 21: 
            if(Math.abs(number) < Math.pow(10,21)){
                precission = precission / Math.pow(10,18) + "EB"
            }
            break;

            case 25: 
            if(Math.abs(number) < Math.pow(10,24)){
                precission = precission / Math.pow(10,21) + "ZB"
            }
            break;

            default:
                precissionResult += "YB"
            break;
        }
    }
}

const resultBytes11 = fromBytesToFormattedSizeUnits2(1000,3);  // 1KB

const resultBytes21 = fromBytesToFormattedSizeUnits2(623324,3);  // 623KB

const resultBytes31 = fromBytesToFormattedSizeUnits2(123456789,3);  // 123MB

const resultBytes41 = fromBytesToFormattedSizeUnits2(-12145489451.5932,3);  // -12.1GB

console.log(resultBytes11);
console.log(resultBytes21);
console.log(resultBytes31);
console.log(resultBytes41);



// Ejercicio 9 => 

/*
    Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
    La función debe tener un objeto como único parámetro.
    Ejemplo de uso de la función:
    const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
    const myObjLowercase = toLowercaseKeys(myObject);
    console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }
 */

// Forma menos optimizada

let copiaObj = { NamE: 'Charles', ADDress: 'Home Street' };

function arreglarMAyus( obj ){
   let lowerObject = {};
     for ( const key in obj ){
        Object.assign( lowerObject, {[key.toLowerCase()] : obj[key]} )
     } return lowerObject;
};
     
// Usando reduce

function arr2obj(arr) {
   return Object.entries(arr).reduce(
      (acc, curr) => {
           acc[curr[0].toLowerCase()] = curr[1];
      return acc;
   },{}
  );
}
          
    console.log(arr2obj(copiaObj));

// Ejercicio 10

/*
    Crea una función que elimine las etiquetas html o xml de un string.
    La función debe tener un string como único parámetro.
    Ejemplo de uso de la función:
    const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
    console.log(result); // lorem ipsum
*/

// Menos optimizada usando split() y join()
let etiquetaHTML = "<div><span>lorem</span><strong>ipsum</strong></div>";

function removeHTMLTags( etiqueta ){
    return etiqueta
        .split("\<div>").join('').split("\</div>").join('') //Aquí quitamos las etiquetas div
        .split("\<span>").join('').split("\</span>").join('') //Aquí quitamos las etiquestas span
        .split("\</strong>").join('').split("\<strong>").join(''); //Aquí quitamos las etiquetas strong;
        // Aquí podemos añadir más etiquetas
};

let stringRecortado2 = removeHTMLTags(etiquetaHTML);
console.log(stringRecortado2);

// Usando patrones Regex (más correcta)

const removeHTMLTags2 = (code) => {  
    const regEx = /<[^>]*>?/g;
    return code.replace(regEx, "");
};
  

// Ejemplo de uso de la función:
  console.log(removeHTMLTags2("<div><span>lorem</span> <strong>ipsum</strong></div>")); // lorem ipsum

// Ejercicio 11

function splitArrayIntoChunks( arr, number ){
    let slicedArray = [];
    for( let i = 0; i < arr.length; i += number ){
        slicedArray.push( arr.slice(i,i + number) ); 
    } return slicedArray;
};

let result = [1, 2, 3, 4, 5, 6, 7];
console.log(splitArrayIntoChunks(result, 3));







