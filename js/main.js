
//********************** declarar variables globales - constantes*****************************//

const costo_Lamborghini_SC20 = 180540.00
const costo_BMW_i8 = 150269.00
const costo_Ferrari = 145026.30
const iva = 0.16
let EngancheInicial
let NombreVehiculo
let NumVehiculo
let cantidadmeses
let calculoiva
let CalculoFinal
let CalculoMeses
let ValorEngancheInicial
let Array1 = []

//********************** introducir Stock*****************************//

const Venta = [{id: 1, Vehiculo: "Lamborghini SC20", Precio: 180540.00 },
               {id: 2, Vehiculo: "BMW i8",       Precio: 150269.00 },
               {id: 3, Vehiculo: "Ferrari",      Precio: 145026.30 }
              ];


//************************Seleccionar vehiculo*********************** *//
do{
    
    NumVehiculo = parseInt(prompt("Vehiculo a Cotizar. \n" + "1= Lamborghini SC20\n" + "2 = BMW i8\n" + "3 = Ferrari"));
        

    if (isNaN(NumVehiculo)){
        alert("Seleccione un vehiculo a Cotizar")             
    }
    
    if (NumVehiculo == 0 || NumVehiculo >3 ){
        alert("Seleccione una opcion valida")
    }


} while ((isNaN(NumVehiculo) || NumVehiculo == 0 || NumVehiculo >3 )) 



//********************** introducir dato de meses*****************************//

for ( let index =1; index < 6; index ++)
{
    Array1.push((index *12)+ " meses"+ "\n")
}

do {
    cantidadmeses = parseInt(prompt("Cantidad de meses a cotizar.\n" + Array1))


    if (isNaN(cantidadmeses)){
        alert("Ingrese un valor correcto")

    }
    else if (cantidadmeses != 12 && cantidadmeses != 24 && cantidadmeses != 36 && cantidadmeses != 48 && cantidadmeses != 60 ){
        alert("Seleccione una opcion valida")
    }

 } while (isNaN(cantidadmeses) || ( cantidadmeses != 12 && cantidadmeses != 24 && cantidadmeses != 36 && cantidadmeses != 48 && cantidadmeses != 60))


//************************Introducir Enganche inicial*********************** *//

 do {
    EngancheInicial = parseInt(prompt("Seleccione el porcentaje de Enganche Inicial"))

    if (isNaN(EngancheInicial)){
        alert("Ingrese un valor correcto")
    }
    else if (EngancheInicial>99) {
        alert("Seleccione una opcion valida")
    }

 } while (isNaN(EngancheInicial) || EngancheInicial >99 )

 
//************************Calcular******************************************//
   
Cotizacion()
function Cotizacion(){
    const FiltroVehiculo = Venta.filter((el) => el.id ==  NumVehiculo) 

        NombreVehiculo = FiltroVehiculo[0].Vehiculo
        calculoiva = FiltroVehiculo[0].Precio * iva;
        ValorEngancheInicial = (FiltroVehiculo[0].Precio + calculoiva) * (EngancheInicial * 0.01)
        CalculoFinal =  (FiltroVehiculo[0].Precio + calculoiva) - ValorEngancheInicial
        CalculoMeses = CalculoFinal / cantidadmeses

        alert(
            "                 Cotizacion Vehiculo: "  + NombreVehiculo +
            "\n" +
            "\nEl costo del vehiculo es de :      "+ FiltroVehiculo[0].Precio + 
            "\nEl valor de iva es:                        " + calculoiva + 
            "\nEl Valor del vehiculo + iva :      " + (FiltroVehiculo[0].Precio + calculoiva) +
            "\nEl Enganche del " + EngancheInicial + " % es           " + ValorEngancheInicial +
            "\nEl Credito del Vehiculo es :     " + CalculoFinal +
            "\nEl pago mensual a " + cantidadmeses + " meses es: " + CalculoMeses 
            )
           



}



    



