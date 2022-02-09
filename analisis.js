const salariosCuba = cuba.map(
    function (persona){
        return persona.salary;
    }
);

//Ordenar los salarios
const salriosCubaSorted = salariosCuba.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Determinar si el arreglo tiene una catidad par o impar de elementos(salarios)
function esPar(numero){
    return (numero % 2 ===0); 
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}