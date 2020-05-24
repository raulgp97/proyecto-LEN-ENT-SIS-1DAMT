var respuesta = lectura();

switch (respuesta) {

    case "importar":

        xml = new XMLHttpRequest();

        xml.open('GET', './informacion.xml', true);

        xml.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                window.alert(xml.responseText);
            }
        }

        xml.send();

        break;

    case "exportar":

        //var sentencia = "@ViewData['Exportar']";

        

        

        break;

    case null:

        window.alert("Has salido de la ventana");
}


function lectura() {

    var opcion;

    do {

        opcion = window.prompt("opciones\n" + "1. importar xml.\n" + "2. exportar xml.");

    } while (opcion != "importar" && opcion != "exportar" && opcion != null);

    return opcion;

}



