$( "#content-box" ).load( "woman.html" );


$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    if(wScroll > $('#Mod1').offset().top + 400) {

    $('#content-box div').each(function(i){

      setTimeout(function(){
        $('#content-box div').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }
    
});
