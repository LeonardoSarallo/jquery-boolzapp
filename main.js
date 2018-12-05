$(document).ready(function() {

  //Gestisco il click

  $('#invio').click(function() {

   var text = $('#textval').val();
   var messaggioClonato = $('.template .chat').clone();
   var clearTemplate = $('.template .clear1').clone();
   messaggioClonato.children('.textmessage').text(text);
   $('.textdisplay').append(messaggioClonato);
   $('.textdisplay').append(clearTemplate);
   $('#textval').val('');

   setTimeout(function() {
     var rispostaClonata = $('.template .answer').clone();
     var clearTemplate = $('.template .clear1').clone();
     rispostaClonata.children('.textmessage').text('ok');
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
      messaggioClonato.children('.textmessage').text(text);
      $('.textdisplay').append(messaggioClonato);
      $('.textdisplay').append(clearTemplate);
      $('#textval').val('');

      setTimeout(function() {
        var rispostaClonata = $('.template .answer').clone();
        var clearTemplate = $('.template .clear1').clone();
        rispostaClonata.children('.textmessage').text('ok');
        $('.textdisplay').append(rispostaClonata);
        $('.textdisplay').append(clearTemplate);

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


  // Gestione dropdown messaggi chat principale

  // $('').click(function() {
  //   alert('ciao')
  //   var dropMenuChat = $(this).siblings('.chatdropdown');
  //
  //
  //
  //   if (dropMenuChat.hasClass('open')) {
  //     dropMenuChat.removeClass('open');
  //   }
  //   else {
  //     $('.chatdropdown').removeClass('open');
  //     dropMenuChat.addClass('open');
  //
  //   }
  //
  //
  //
  // });







});
