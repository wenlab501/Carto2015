$('#feather1').mouseenter(function(){
  $('#list-content1').show();
});
$('#feather1').mouseleave(function(){
  $('#list-content1').hide();
});

$('#feather2').mouseenter(function(){
  $('#list-content2').show();
});
$('#feather2').mouseleave(function(){
  $('#list-content2').hide();
});

$('#feather3').mouseenter(function(){
  $('#list-content3').show();
});
$('#feather3').mouseleave(function(){
  $('#list-content3').hide();
});

$('#feather4').mouseenter(function(){
  $('#list-content4').show();
});
$('#feather4').mouseleave(function(){
  $('#list-content4').hide();
});

$('#feather5').mouseenter(function(){
  $('#list-content5').show();
});
$('#feather5').mouseleave(function(){
  $('#list-content5').hide();
});

$('#feather6').mouseenter(function(){
  $('#list-content6').show();
});
$('#feather6').mouseleave(function(){
  $('#list-content6').hide();
});

$('#sidebar').affix({
  offset: {
    top: $('header').height()
  }
});
