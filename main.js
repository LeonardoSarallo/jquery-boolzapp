$(document).ready(function() {

  //Gestisco il click

  $('#invio').click(function() {

   var text = $('#textval').val();
   var messaggioClonato = $('.template .chat').clone();
   var clearTemplate = $('.template .clear1').clone();
   messaggioClonato.children('.textmessage').text(text);
   $('.textdisplay.open').append(messaggioClonato);
   $('.textdisplay.open').append(clearTemplate);
   $('#textval').val('');

   setTimeout(function() {
     var rispostaClonata = $('.template .answer').clone();
     var clearTemplate = $('.template .clear1').clone();
     rispostaClonata.children('.textmessage').text('ok');
     $('.textdisplay.open').append(rispostaClonata);
     $('.textdisplay.open').append(clearTemplate);

    },1000);

  });

  // Gestisco da tastiera con tasto invio


  $('#textval').keypress(function(e) {
    if (e.which == 13)
    {
      var text = $('#textval').val();
      var messaggioClonato = $('.template .chat').clone();
      var clearTemplate = $('.template .clear1').clone();
      messaggioClonato.children('.textmessage').text(text);
      $('.textdisplay.open').append(messaggioClonato);
      $('.textdisplay.open').append(clearTemplate);
      $('#textval').val('');

      setTimeout(function() {
        var rispostaClonata = $('.template .answer').clone();
        var clearTemplate = $('.template .clear1').clone();
        rispostaClonata.children('.textmessage').text('ok');
        $('.textdisplay.open').append(rispostaClonata);
        $('.textdisplay.open').append(clearTemplate);

       },1000);
    }
  });





  // Gestisco search da tastiera


  $('#searchinput').keyup(function() {
    var valore = $(this).val().toLowerCase();
    console.log(valore);
    $('li').each(function() {
      var name = $(this).find('#name').text().toLowerCase();


      if (name.includes(valore)) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    });

  });

  // Gestione dropdownmenu dei messaggi a sinistra


  $('.idbox').mouseenter(function() {
    var dropItem = $(this).children('.dropdownitem');
    dropItem.addClass('open');
  });

  $('.idbox').mouseleave(function() {
    var dropItem = $(this).children('.dropdownitem');
    dropItem.removeClass('open');
  });


  $('.dropdownitem').click(function() {
    var dropMenu = $(this).siblings('.dropdownmenu');



    if (dropMenu.hasClass('open')) {
      dropMenu.removeClass('open');
    }
    else {
      $('.dropdownmenu').removeClass('open');
      dropMenu.addClass('open');

    }



  });

  //Gestione active onclickrightmenu

  $('ul li').click(function() {

    $('ul li').removeClass('active');

    $(this).addClass('active');

    $('.textdisplay').removeClass('open');

    var contactNumber = $(this).index();
    console.log(contactNumber);

    $('.textdisplay').eq(contactNumber).addClass('open');


  });


  //Gestione dropdown messaggi chat principale


  //Menu ID

  $(document).on('click','.chati', function() {

    var dropChat = $(this).siblings('.chatdropdown');



    if (dropChat.hasClass('open')) {
      dropChat.removeClass('open');
      console.log('sona qua');
    }
    else {
      $('.chatdropdown').removeClass('open');
      dropChat.addClass('open');
      console.log('sono li');
    }

  });

  // Possibilità di eliminare chat ID

  $(document).on('click','.chatdelete', function() {

    var deleteMessage = $(this).parent().parent();
    deleteMessage.hide();



  });

  //Menu risposta

  $(document).on('click','.answeri', function() {

    var dropAnswer = $(this).siblings('.answerdropdown');

    dropAnswer.toggle();

    // if (drop.hasClass('open')) {
    //   drop.removeClass('open');
    // }
    // else {
    //   $('.chatdropdown').removeClass('open');
    //   drop.addClass('open');
    //
    // }

  });

  //Possibilità di eliminare risposta

  $(document).on('click','.answerdelete', function() {

    var deleteMessageAnswer = $(this).parent().parent();
    deleteMessageAnswer.hide();



  });

});
