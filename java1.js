1. Hvað er ECMASCRIPT

Svar
ECMASCRIPT er eiginlega corið sem javascript er byggt uppá, það eru tildæmis fleirri tungumál sem eru bygð á ECMASCRIPT einsog ActionScriðt Jscript og það er allt byggt a sama engine/corei

2. Afhverju virkar eftirfarandi kóði

x();
function x() {
	console.log("x");
}

Svar
Það eru útaf javascript er byggt þannig að ef þú skilgreinir functionið fyrir neðan enn þú kallar það, þá initializar það first alltaf functions þannig það breytir eiginlega ekki hvar þú skrifar functionið

basically eina sem forrtið gerir er að console loga x

3. útskýrðu linu fyrir linu hvað eftirfarandi kóði gerir

(function() {
	alert("Hello world");
}) ();

Svar
Þetta er það sem maður kallar self-executing anonymous function. sem basically callar bara sjalfan sig

(function() { // herna er veriið að declera anonymous function
	alert("Hello world"); //Þetta alertar hello word
}) (); // Þegar þú setur (); fyrir aftan þá breytiru þessu í self-executing anonymous function, þannig að það callar functionið sjalft
// (); þetta keyrir stóra scopinn í kringum functionið ()
basically eina sem forritið gerir er að alerta Hello world

4. Útskýrðu línu fyrir línu hvað eftirfarandi kóði gerir

var originalFunction = function () {
 alert('hello world');
}
var copiedFunction = originalFunction;
var originalFunction = function () {
 alert('goodbye world');
}
copiedFunction()

Svar 
Þetta byrjar á að skilgreina function sem alertar hello world, skilgreinir svo aðra function sem gerir það sama og firsta functionið, og breytir svo firsta functioninu þannig það alertar goodbye world

var originalFunction = function () { //skilgreinir function sem alertar hello world
 alert('hello world'); //alertar hello world
}
var copiedFunction = originalFunction; // Býr til nytt function sem gerir það sama og first functionið
var originalFunction = function () { //Skilgreinir aftur functionið enn, það bara breytir því, ef þetta væri tildæmis c# myndi þetta ekki virkar því þú getur ekki skilgreint function aftur
 alert('goodbye world');//breytir þannig að það alertar goodbye world
}
copiedFunction(); //Callar í functionið copiedFunction sem alertar hello world

5. Hvað eru margar global breytur í kóðanum

var text = "hello scope";
var sum = 0;
for(var i = 0; i < 10; i++) {
	sum += i;
}
console.log(sum);

Svar
Það eru semsagt tvær global breytur sem eru text og sum því þær er eru skilgreindar fyrir utan alla scopa,  reyndar er merkilegt ég prufaði að skilgreina breytur inni í for loopunnu og það er hægt að calla hana fyrir utan þannig tæknilega séð er for loopa ekki scope enn það er ekki hægt að calla i

var text = "hello scope";
var sum = 0;
for(var i = 0; i < 10; i++) {
	sum += i;
}
console.log(sum);
function ok() {
	var benni = "3";
}
console.log(benni);
 
Herna bætti ég við functioni sem skilgreinir inni í sér benni þannig það er ekki global breyta því það er skilgreint inni scopeinum í functioniniu

var text = "hello scope"; // Býr til breytu sem heitir text sem inniheldur textanum Hello scope
var sum = 0; // býr til breytu sem er með 0 í
for(var i = 0; i < 10; i++) { //skrifar for loopu sem keyrir 10 sinnum
	sum += i; //plúsar við i sem hækkar alltaf einu sinnu utaf for loopunni
}
console.log(sum);//skrifar ut sum sem er alltaf búið að bæta við og eru 45

6. Hver er munurinn á A og B þegar kemur að alert(), hvað birtist og útskýrðu hvað "use strict" gerir?

A.
function test() {
	message = "hi";
}
test();
alert(message);

B.
function test() {
"use strict";
	message = "hi";
}
test();
alert(message);

Svar 
Munurinn er að use strict leyfir þér ekki að setja eitthvað á breytur anþéss að skilgreina hana í stuttu máli
semsagt í dæmi b kemur villa útaf þú mátt ekki gera þetta, enn í dæmi a virkar það
Ef þú runnar þetta i chrome virkar bæði og ekki veit eg Afhverju
en ef þú runnar þetta i firefox þá kemur villa í b

7. Afhverju virkar eftirfarandi kóðabutur með óskilgreindi breytunni útskýrðu
var found = true;
var result = (found || someUndeclaredVariable); // óskilgr. breyta
alert(result); // virkar

Svar 
Þetta er mjög fyndið dæmi, var með þetta rett skrifað enn af einhverju ástæðu skilaðist það ekki inn
þannig er að edita a github
það tjekkar alltaf hvort það sjé eithtvað true, ef fyrsta er false tjekkar það næsta til að leita af true og ef það er eitthvað
true þá verður result true, ef allt er false þá verður result false, ef eitthvað er undeclared þá kemur villa.
