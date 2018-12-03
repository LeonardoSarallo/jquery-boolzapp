$(document).ready(function() {

  $('#invio').click(function() {
    var chat = $('.chat');
    var text = $('#textval').val();
    var messaggioClonato = $('.template .chat').clone();
   messaggioClonato.text(text);
   $('.textdisplay').append(messaggioClonato);
   $('.chat').show();
   $('#textval').val('');
   console.log(messaggioClonato);



   if (chat.length == 0) {
     chat.hide();
     console.log(messaggioClonato);
   }

  });




});
