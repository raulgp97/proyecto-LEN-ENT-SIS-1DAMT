function entrada() {

    var xml;

    var documento;

    var descarga = "C:\Users\el-bb\Desktop";

    do {

        var opcion = window.prompt("opciones\n" + "1. importar xml.\n" + "2. exportar xml.");

    } while (opcion != "importar" && opcion != "exportar" && opcion != null);

    if (opcion != null) {

        switch (opcion) {

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

                documento = browser.donwloads.donwload({

                    url: descarga,
                    filename: "hola.txt",
                    conflictAction: 'uniquify'



                });

                window.alert("Has exportado.");
                break;
        }

    } else {

        document.getElementById("importar").innerHTML = "No has hecho nada";

    }
}