$( document ).ready(function() {    
    $("#btnEditar").on("click", function() {
        editarOn();        
        $("#bntEditar").attr("disable","disable");
    });
    console.log( "ready!" );
});

//Pone el formulario en modo edición
function editarOn(){   
    $("#tablaPerfil tr > td").each(function( index ) {
        if (index % 2 > 0) {  //celdas del lado derecho son editables 
            if($(this).attr('id') === undefined){                                   
                $( this ).html('<input type="input" value="' + $( this ).text()  +'" required>')
            }
            else {  //son combos  
                var tipoInput = $( this ).attr('id').split("_").pop();
                if (tipoInput == "fecha") {
                    cargarFecha($(this));
                }
                if (tipoInput == "cmb") {
                    cargarCombo($(this));
                }
                                          
            } 
        }         
    });
}

function cargarCombo(celda){
    var combo = '<select name="select">';
    combo += '<option value="value1">Value 1</option>';
    combo += '<option value="value2" selected>Value 2</option>';
    combo += '<option value="value3">Value 3</option>';
    combo += '</select>';
    celda.html(combo);    
}

function cargarFecha(celda){
    celda.html('<input type="date" value="' + $( this ).text()  +'" required>');
}



