"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName;
// firstName = "Max";
//console.log(firstName);

// let familyName;                //<-- Deklaration 
// familyName = "Mustermann";     //<--Wertzuweisung
// console.log(familyName);      //<--Ausgabe 

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;

// firstName = prompt("Bitte Vornamen eingeben");
// familyName = prompt("Bitte Nachnamen eingeben");

// console.log(firstName + " " + familyName);

/* JS ist eine untypisierte Sprache! | untyped */
let test;
test = "Max";
test = 2;
test = false;           //<-- Die letzte Angabe wird übernommen !!!


console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);