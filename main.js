$(document).ready(function() {

  $('#invio').click(function() {

   var text = $('#textval').val();
   var messaggioClonato = $('.template .chat').clone();
   var clearTemplate = $('.template .clear');
   messaggioClonato.text(text);
   $('.textdisplay').append(messaggioClonato);
   $('.textdisplay').append(clearTemplate);



   $('#textval').val('');

   setTimeout(function() {
     var rispostaClonata = $('.template .answer').clone();
     var space = $('.template .clear');
     rispostaClonata.text('ok');
     $('.textdisplay').append(rispostaClonata);
     $('.textdisplay').append(space);
    },1000);




  });








});
