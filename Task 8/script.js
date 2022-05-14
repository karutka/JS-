/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator (a, b) {
    this.a = a;
    this.b = b;

    this.sum = function () {
        console.log(`Sum of numbers ${this.a} and ${this.b} equals ` + (a + b));
    }

    this.subtraction = function () {
        console.log(`Subtraction of numbers ${this.a} and ${this.b} equals ` + (a - b));
    }

    this.multiplication = function () {
        console.log(`Multiplication of numbers ${this.a} and ${this.b} equals ` + (a * b));
    }

    this.division = function () {
        console.log(`Division of numbers ${this.a} and ${this.b} equals ` + (a / b));
    }
}

const values = new Calculator (33, 109);
values.sum();
values.subtraction();
values.multiplication();
values.division();