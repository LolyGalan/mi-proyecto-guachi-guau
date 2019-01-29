$(document).ready(function(){
  
  const $inputsConFondo = $('#name, #edad, #signos, #correspondido, #veces');
  $inputsConFondo.addClass('focusDisabled');
  
  const $submit = $('input[type="submit"]');
  $submit.attr('disabled','disabled').addClass("disabled");
  
  const $fetch = $('#fetch');
  
  $submit.click(function(e){
    e.preventDefault();
    
    const inputData = {
    name: $('#nombre').val(),
    edad: $('#edad').val(),
    signos: $('#signos').val(),
    correspondido: $('#correspondido').val(),
    veces: $('#veces').val(),
    }

    $.ajax({
        url: 'https://mi-proyecto-guachi-guau-87771.firebaseio.com/.json',
        type: "POST",
        data: JSON.stringify(inputData),
        success: function (data) {
        alert('Su formulario ha sido enviado');
        },
        error: function(error) {
        console.log(error);
        }
    });
})

});
