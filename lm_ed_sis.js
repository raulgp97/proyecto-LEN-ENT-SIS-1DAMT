
var enlace=document.URL;

var array = enlace.split("/",9);
/*
* Descripción función home: Vuelve a la página de inicio.
*
*
*
*/
function home(){

   location.assign("./prueba.html");
    
}
/*
* Descripción función back: Vuelve a la página anterior.
* @TODO: Implementar un metodo que ya hace esta función.
*
*
*/
function back(array,enlace){
   
    location.assign("./"+array[8]);
 
}



