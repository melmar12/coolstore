$( "#content-box" ).load( "inserts/woman.html" );



// menu clicks
// add loading animation?
$("#woman-link").click(function() {
    
    $( "#content-box" ).load( "inserts/woman.html" );
    
    return false;
});

$("#man-link").click(function() {
    
    $( "#content-box" ).load( "inserts/man.html" );

    return false;
});

$("#storelocator-link").click(function() {
    
    $( "#content-box" ).load( "inserts/storelocator.html" );
    
    return false;
});