$(document).ready(function(){
  
    const $button = $('#button');
  const $submit = $('input[type="submit"]');
  //declaramos una variable a la que le asignamos el valor del input que tenemos
  //en el html con su tipo submit
  
  $submit.click(function(e){
      //cuando hacemos click en el boton de submit empieza la función
    e.preventDefault(); 
    //esto no funciona si no tenemos declarado una funcion en el input
    const inputData = {
    //constante a la que le pasamos como a un array los valores que tenemos en cada atributo
    name: $('#nombre').val(),
    edad: parseInt($('#edad').val()),
    signos: $('#signos').val(),
    correspondido: $('#correspondido').val(),
    veces: parseInt($('#veces').val()),
    }
    
    $.ajax({
        //hacemos una llamada ajax para enviar nuestro formulario al servidor
        url: 'https://mi-proyecto-guachi-guau-87771.firebaseio.com/.json',
        type: "POST",
        data: JSON.stringify(inputData),
        //le enviamos los atributos url,type y data(que son los datos pasados a json con stringify)
       
        success: function (respuestaServidor) {
            alert('Su formulario ha sido enviado');
            },
        //si tenemos exito al enviar los datos nos aparecera una alarma con el mensaje
        error: function(error) {
             console.log(error);
        }//si no mostrará un mensaje de error
    });
})
//ahora vamos a calcular la edad media y la vamos a mostrar por pantalla
$button.click(function(e){
    e.preventDefault();
    $('#button').hide();//ocultamos el boton 
    
$.ajax({
    //hacemos una llamada ajax  buscando en nuestra url que le hemos enviado antes
        //para sacar la información que necesitamos
    url: 'https://mi-proyecto-guachi-guau-87771.firebaseio.com/.json',
    type: "GET", //con este tipo cogemos la información
    success: function (data) {
        $('#formulario').hide(); //ocultamos el formulario
        $('#responsesContainer').append('<h1>Calcular edad promedio</h1>');
        //ponemos en el html que teniamos un div vacio un titulo para que nos diga lo que queremos hacer
        var total = 0;
        //inicializamos una variable contador
        const respuestas = Object.values(data);
        //a la variable respuesta le metemos el array que hemos obtenido con la información
        respuestas.forEach(function(element) {
            //para cada posición del array 
            total = total + parseInt(element.edad);
            //le añadimos al contador el valor de la posición
        });
        
        const promedioEdad = total/respuestas.length;
        //en promedioEdad tenemos el resultado de dividir el valor del contador entre
        //la longitud que tenga el array

        $('#responsesContainer').append(`<h2>${promedioEdad} años</h2>`);
        //imprimimos en el sitio vacio del html el resultado de la operacion de calcular
        //la edad promedio
    }
});
     

})

})
