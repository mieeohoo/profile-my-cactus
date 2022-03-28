'use strict';

$(function(){
  $('.menu-btn').on('click', function(){
    if($('header').hasClass('open')){
      $('header').removeClass('open');
    } else {
      $('header').addClass('open');
    }
  });

  $('#mask').on('click', function(){
    $('header').removeClass('open');
  });

  $('.global-nav').on('click', function(){
    $('header').removeClass('open');
  });

});