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

//Determinar si el arreglo tiene una catidad par o impar de elementos(salarios)
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

const medianaGeneralCuba = medianaSalarios(salariosCubaSorted);

console.log({
    medianaGeneralCuba,
    medianaTop10Cuba,
});