/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const weightInput = document.getElementById("search");

function convert(event) {
    event.preventDefault();
    const weight = Number(weightInput.value);
    const style = document.getElementById("output").style;

    document.getElementById("output").textContent = "Your weight: " + weight + "kg = " + weight * 2.2046 + "lb = " + weight * 0.0010000 + "g = " + weight * 35.274 + "oz.";

    style.backgroundColor = "white";
    style.width = "80%";
    style.margin = "auto";
    style.padding = "10px";
}

document.querySelector("form").addEventListener("submit", convert);
