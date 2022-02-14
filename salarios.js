const salarios = [20, 30, 32, 56, 78, 90, 10, 120, 130, 76, 50, 23, 45, 37, 89, 90,340, 23, 80, 34];

const salariosSorted = salarios.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
console.log(salarios);

//Usando splice
var inicioSplice = Math.round(salarios.length * 0.9); // Math.round redondea el resultado al entero mas cercano 
var cantidadSalarios = salarios.length - inicioSplice;
console.log(inicioSplice);
console.log(cantidadSalarios);
var salariosTop10 = salarios.splice(inicioSplice, cantidadSalarios);
console.log(salariosTop10);