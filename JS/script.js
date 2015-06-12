$( "#content-box" ).load( "inserts/woman.html" );



// menu clicks
// add loading animation?
$("#man-link").click(function() {
    
    $( "#content-box" ).load( "inserts/man.html" );
    
    return false;
});

$("#woman-link").click(function() {
    
    $( "#content-box" ).load( "inserts/woman.html" );
         
    return false;
});

$("#storelocator-link").click(function() {
    
    $( "#content-box" ).load( "inserts/storelocator.html" );
    
    return false;
});