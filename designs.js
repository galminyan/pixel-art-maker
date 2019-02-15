
// Select size input
var submitBotton = document.querySelector('#inputSubmit');
submitBotton.addEventListener('click',function (event){
    event.preventDefault();
    //apply the values of heigth and width inputs
    var theHeight = $('#inputHeight').val(); 
    var theWidth = $('#inputWidth').val();
    //call the makegrid function
    makeGrid(theHeight, theWidth);

})
// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {
    //remove the prev-grids
    $('tr').remove();
    //create squere on x axis
    for (var i=1; i<=x; i++){
        var newTable = document.querySelector('#pixelCanvas');
        newTable.insertAdjacentHTML('afterbegin',('<tr id=row' +i +'></tr>'));
        //create squere on y axis
        for (var j=1; j<=y; j++){
            var currentRow = document.querySelector('#row'+i);
            currentRow.insertAdjacentHTML('afterbegin',('<td class=squre id=data'+ j+'></td>'))
        }
    }
    //paints the cell with color
    $('td').click(function addColor(){
        // apply the value of the color input
        var theColor = $('#colorPicker').val();
        //remove prev-style and add background color to selected td
        if ($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).attr('style', 'background-color:' +theColor);
        }
    })
}

