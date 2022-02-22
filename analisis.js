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

//Crear lista de salarios
const salariosCuba = cubita.map(
function (persona){
        return persona.salary;
    }
);

//Ordenar la lista de los salarios
const salariosCubaSorted = salariosCuba.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Mediana de salarios
function Onclick_Mediana(){
    const medianaGeneralCuba = medianaSalarios(salariosCubaSorted);
    const resultMediana = document.getElementById("Mediana");
    resultMediana.innerText = "La mediana es: " + medianaGeneralCuba;
}
//Media aritmetica
function Onclick_Promedio(){
    var salarioPromedio = Math.round(calcularMediaAritmetica(salariosCuba)) ;
    const resultPromedio = document.getElementById("Promedio");
    resultPromedio.innerText = "El promedio es: " + salarioPromedio;
}

//Top 10 de salarios mas altos
function Onclick_Top_10_Salarios_Altos(){
    const spliceStart = Math.round(salariosCubaSorted.length * 0.9);
    const spliceCount = salariosCuba.length - spliceStart;
    const salariosCubaTop10 = salariosCubaSorted.splice(spliceStart, spliceCount);
    const resultTop10SalariosAltos = document.getElementById("Result_Top10_Altos");
    resultTop10SalariosAltos.innerText = "El top 10 de los salarios mas altos es: " + salariosCubaTop10;
}

//Top 10 de salararios mas bajos
function Onclick_Calcular_Top10_Bajos(){
    //Creando de nuevo la lista de salarios, debido a que el metodo splice lo modifica
    var salariosCubaDeNuevo = cubita.map(
        function (persona){
            return persona.salary;
        }
    );
    //Ordenar la lista de salarios
    var salariosCubaDeNuevo = salariosCubaDeNuevo.sort(
        function(salaryA, salaryB){
            return salaryA - salaryB;
        }
    );
    const spliceSalariosCubaDeNuevo_Count = Math.round(salariosCubaDeNuevo.length * 0.1);
    const top_10_Salarios_Bajos = salariosCubaDeNuevo.splice(-salariosCubaDeNuevo.length, spliceSalariosCubaDeNuevo_Count);//se coloco
    //el signo menos delante del elemento de icio para empezar desde el primer elemento del arreglo
    const resultTop10Bajos = document.getElementById("Result_Top10_Bajos");
    resultTop10Bajos.innerText = "El top 10 de los salarios mas bajos es: " + top_10_Salarios_Bajos; 
};