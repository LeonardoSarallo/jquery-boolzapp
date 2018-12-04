$(document).ready(function() {

  $('#invio').click(function() {

   var text = $('#textval').val();
   var messaggioClonato = $('.template .chat').clone();
   var clearTemplate = $('.template .clear1').clone();
   messaggioClonato.text(text);
   $('.textdisplay').append(messaggioClonato);
   $('.textdisplay').append(clearTemplate);
   $('#textval').val('');

   setTimeout(function() {
     var rispostaClonata = $('.template .answer').clone();
     var clearTemplate = $('.template .clear1').clone();
     rispostaClonata.text('ok');
     $('.textdisplay').append(rispostaClonata);
     $('.textdisplay').append(clearTemplate);

    },1000);

  });

  $('#search').click(function() {
    var nameSearch = $('#searchinput').val();
    $('li').each(function() {
      var liText = $(this).text();

      if (liText != nameSearch)
      {
        $(this).hide();
      }

    });

  });








});
