'use strict';

var myFunc = function(quote, author) {
  $(".quote").text(quote);
  $(".author").html('<i class="tiny material-icons">mode_edit</i>');
  $(".author").append('  ' + author);
}

var generateQuote = function() {
  $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: 'GET',
      data: {},
      datatype: "json",
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-Mashape-Key', config.API_KEY);
      },
      success: function(data) {
        $("#myCard").fadeOut(500, function() {
          myFunc(data.quote, data.author);
          $(this).fadeIn(800);           
        });

        $("#myHref").click(function() {
          $(this).attr('href', 'https://twitter.com/share?text=' + data.quote + ' - ' + data.author);
        });
      },
      error: function(err) {
        console.error(err);
      }
    });
}

$(document).ready(function() {
  $("#btn").on("click", function() {
    generateQuote();
  });
});