const cubita = [];
cubita.push({
    name: "Alberto",
    salary: 190,
});
cubita.push({
    name: "Rodolfo",
    salary: 780,
});
cubita.push({
    name: "Miguel",
    salary: 2000,
});
cubita.push({
    name: "Raul",
    salary: 100,
});
cubita.push({
    name: "Alfonso",
    salary: 1000,
});
cubita.push({
    name: "Jose",
    salary: 450,
});
cubita.push({
    name: "Frank",
    salary: 1450,
});
cubita.push({
    name: "Anducho",
    salary: 10000,
});
cubita.push({
    name: "Ariel",
    salary: 10000,
});
cubita.push({
    name: "Chicho",
    salary: 100020,
});
cubita.push({
    name: "Chicho",
    salary: 100040,
});

//Helpers(funciones que no son parte de la logica del analisis pero es necesario usarlas)
function esPar(numero){
    return (numero % 2 ===0); 
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
const spliceStart = (salariosCubaSorted.length * 90) / 100;
const spliceCount = salariosCubaSorted.length - spliceStart;

const salariosCubaTop10 = salariosCubaSorted.splice(spliceStart, spliceCount);

const medianaTop10Cuba = medianaSalarios(salariosCubaTop10);

console.log({
    medianaGeneralCuba,
    medianaTop10Cuba,
});