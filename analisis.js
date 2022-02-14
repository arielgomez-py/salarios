const cubita = [
    {
        name: "Alberto",
        salary: 190,
    },
    {
        name: "Pepe",
        salary: 190,
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
        name: "Juan",
        salary: 280,
    },
    {
        name: "Juan",
        salary: 280,
    },
    {
        name: "Juan",
        salary: 280,
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

//Mediana del top 10%
const spliceStart = Math.round(salariosCubaSorted.length * 0.9);
const spliceCount = salariosCuba.length - spliceStart;

const salariosCubaTop10 = salariosCubaSorted.splice(spliceStart, spliceCount);

const medianaTop10Cuba = medianaSalarios(salariosCubaTop10);

console.log({
    medianaGeneralCuba,
    salariosCubaTop10,
    medianaTop10Cuba,
});