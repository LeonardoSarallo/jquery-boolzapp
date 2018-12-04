$(document).ready(function() {

  $('#invio').click(function() {

   var text = $('#textval').val();
   var messaggioClonato = $('.template .chat').clone();
   messaggioClonato.text(text);
   $('.textdisplay').append(messaggioClonato);
   $('.chat').show();
   $('#textval').val('');

   var rispostaClonata = $('.template .answer').clone();
   rispostaClonata.text('ok');
   $('.textdisplay').append(rispostaClonata);

   setTimeout(function() {
   $('.answer').show();
   },1000);

   // $('.answer').delay(1000).show();

   // if (text == 0) {
   //   $('.chat').hide();
   //   console.log(chat);
   //
   // }
   // else {
   //   $('.chat').show();
   // }


  });






});
