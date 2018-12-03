$(document).ready(function() {

  $('#invio').click(function() {
    var text = $('#textval').val();
    var messaggioClonato = $('.template .chat').clone();
   messaggioClonato.text(text);
   $('.textdisplay').append(messaggioClonato);
   $('.chat').show();
   $('#textval').val('');
   console.log(messaggioClonato);

  });




});
