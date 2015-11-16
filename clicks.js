'use strict';

$(document).ready(function(){


  var userTemplate = Handlebars.compile($('#user-template').html());

  var showUsers = function(error, data) {
    if (error) {
      console.error(error);
      return;
    }
    var userHTML = userTemplate(data);
    $('#users').html(userHTML);
  };


  // button click
  $('#user-button').click(function(e){
    e.preventDefault();
    listUsers(showUsers);
  });

});
