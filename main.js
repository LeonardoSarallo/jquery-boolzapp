$(document).ready(function() {

  //Gestisco il click

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

  // Gestisco da tastiera con tasto invio


  $('#textval').keypress(function(e) {
    if (e.which == 13)
    {
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
    }
  });


  $('#search').click(function() {
    var nameSearch = $('#searchinput').val();
    $('li').each(function() {
      var liText = $(this).text();

      if (nameSearch != liText)
      {
        $(this).hide();
      }
      console.log(liText);
      console.log(nameSearch);

    });

  });








});
