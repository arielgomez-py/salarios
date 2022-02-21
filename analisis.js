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
        name: "Salfuman",
        salary: 560,
    },
    {
        name: "Mojino",
        salary: 806,
    },
    {
        name: "Salfuman",
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
/*const medianaGeneralCuba = medianaSalarios(salariosCubaSorted);*/

//Mediana del top 10%
/*const spliceStart = Math.round(salariosCubaSorted.length * 0.9);
const spliceCount = salariosCuba.length - spliceStart;

const salariosCubaTop10 = salariosCubaSorted.splice(spliceStart, spliceCount);

const medianaTop10Cuba = medianaSalarios(salariosCubaTop10);

console.log({
    medianaGeneralCuba,
    salariosCubaTop10,
    medianaTop10Cuba,
    
});*/
function Onclick_Calcular_Mediana_Button(){
    const medianaGeneralCuba = medianaSalarios(salariosCubaSorted);
    const resultMediana = document.getElementById("ResultadoMediana");
    resultMediana.innerText = "La mediana de los slarios es: " +  medianaGeneralCuba; 
};

function Onclick_Top_10_Salarios_Mas_Altos(){
    const spliceStart = Math.round(salariosCubaSorted.length * 0.9);
    const spliceCount = salariosCuba.length - spliceStart;
    const salariosCubaTop10 = salariosCubaSorted.splice(spliceStart, spliceCount);
    const result_Salarios_Mas_Altos = document.getElementById("Top_10_Salarios_Altos");
    result_Salarios_Mas_Altos.innerText = "El top 10 de los salarios mas altos es: " + salariosCubaTop10;
};

function Onclick_Mediana_Top10(){
    const medianaTop10Cuba = medianaSalarios(salariosCubaTop10);

    const result_Mediana_10_Salarios_Mas_Altos = document.getElementById(Top_10_Salarios_Altos);
   
};