const cubita = [
    {
        name: "Alberto",
        salary: 190,
    },
    {
        name: "Pepe",
        salary: 1956,
    },
    {
        name: "Alfonso",
        salary: 160,
    },
    {
        name: "Anducho",
        salary: 500,
    },
    {
        name: "Juan",
        salary: 280,
    },
    {
        name: "Joan",
        salary: 2880,
    },
    {
        name: "Casuelo",
        salary: 480,
    },
    {
        name: "Murillo",
        salary: 2000,
    },
    {
        name: "Salfuman",
        salary: 1280,
    },
    {
        name: "Kiko",
        salary: 1220,
    },
    {
        name: "Salao",
        salary: 560,
    },
    {
        name: "Mojino",
        salary: 806,
    },
    {
        name: "Fruta",
        salary: 1780,
    },

];

//Helpers(funciones que no son parte de la logica del analisis pero es necesario usarlas)
function esPar(numero){
    return (numero % 2 === 0); 
}
function calcularMediaAritmetica(lista){
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana general
const salariosCuba = cubita.map(
function (persona){
        return persona.salary;
    }
);

//Ordenar los salarios
const salariosCubaSorted = salariosCuba.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
const medianaGeneralCuba = medianaSalarios(salariosCubaSorted);

//Media aritmetica
var salarioPromedio = calcularMediaAritmetica(salariosCuba);

//Mediana del top 10% salarios mas altos
const spliceStart = Math.round(salariosCubaSorted.length * 0.9);
const spliceCount = salariosCuba.length - spliceStart;

const salariosCubaTop10 = salariosCubaSorted.splice(spliceStart, spliceCount);

const medianaTop10Cuba = medianaSalarios(salariosCubaTop10);

//Creando de nuevo la lista de salarios, debido a que el metodo splice lo modifica
var salariosCubaDeNuevo = cubita.map(
    function (persona){
            return persona.salary;
        }
    );
//Ordenar lalista de salarios
var salariosCubaDeNuevo = salariosCubaDeNuevo.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);
    
//Top 10% de salararios mas bajos
const spliceSalariosCubaDeNuevo_Count = Math.round(salariosCubaDeNuevo.length * 0.1);

const top_10_Salarios_Bajos = salariosCubaDeNuevo.splice(0,spliceSalariosCubaDeNuevo_Count);

console.log("El 10 porciento de los salarios mas altos es: " + salariosCubaTop10);
console.log("El salario promedio es: " + Math.round(salarioPromedio) );
console.log("El 10 porciento de los salarios mas bajos es: " + top_10_Salarios_Bajos);
