// Select color input

// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e){
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();

    //alert('Height: '+height+', width: '+width);
    $('tr').remove();
    e.preventDefault();
    makeGrid(height, width);
});


function makeGrid(height, width) {

// Your code goes here!
for(var i=1; i<=height; i++){
    $('#pixelCanvas').append('<tr></tr>');

    for(var j=1; j<=width; j++){
        $('tr:last').append('<td></td>');
        $('td').attr('class', 'data');
    }
}

$('.data').click(function(eve){
    color = $('#colorPicker').val();
    $(eve.target).css('background-color', color);
});

}

