$(document).ready(function() {

  $('#invio').click(function() {

   var text = $('#textval').val();
   var messaggioClonato = $('.template .chat').clone();
   messaggioClonato.text(text);
   $('.textdisplay').append(messaggioClonato);
   $('.chat').show();

   $('#textval').val('');

   setTimeout(function() {
       var rispostaClonata = $('.template .answer').clone();
       rispostaClonata.text('ok');
       $('.textdisplay').append(rispostaClonata);
       $('.answer').show();

   },1000);




  });








});
