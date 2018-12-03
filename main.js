$(document).ready(function() {

  $('#invio').click(function() {
    var text = $('#textval').val();
    var messaggioClonato = $('.textdisplay .chat').clone(1);

    messaggioClonato.text(text);

   $('.textdisplay').append(messaggioClonato);
   $('#textval').val('')

  });




});
