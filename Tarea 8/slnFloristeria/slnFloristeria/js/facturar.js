
var precioProducto = '{"Flor1":"10350","Flor2":"11450","Flor3":"10550","Flor4":"9550","Flor5":"10750","Arreglo1":"19000","Arreglo2":"20000","Arreglo3":"15000","Arreglo4":"18000","Arreglo5":"13500","Caja1":"20000","Caja2":"10125","Caja3":"12250","Caja4":"13250","Caja5":"15500"}';

window.onload = cargaInicial();

//cargo provincias
$(document).ready(function () {
    $.getJSON('https://ubicaciones.paginasweb.cr/provincias.json', function (data) {
        $.each(data, function (id, namee) {
            $("#prov").append($('<option>', {
                value: id,
                text: namee
            }));
        });
    });
});

//funcion para obtener los cantones según el cambio de provincia
function cambioSelectProv() {
    var idProv = $('#prov').val();
    $.getJSON('https://ubicaciones.paginasweb.cr/provincia/' + idProv + '/cantones.json', function (data) {
        $('#can').empty(); // Limpiar opciones previas antes de agregar las nuevas
        
        $.each(data, function (id, namee) {
            $("#can").append($('<option>', {
                value: id,
                text: namee
            }));
        });
    });
}

//funcion para obtener los distritos según el cambio de cantón
function cambioSelectCan() {
    var idProv = $('#prov').val();
    var idCan = $('#can').val();
    $.getJSON('https://ubicaciones.paginasweb.cr/provincia/' + idProv + '/canton/' + idCan + '/distritos.json', function (data) {
        $('#dis').empty(); // Limpiar opciones previas antes de agregar las nuevas
        
        $.each(data, function (id, namee) {
            $("#dis").append($('<option>', {
                value: id,
                text: namee
            }));
        });
    });
}


function cargaInicial()
{

}

function obtenerPrecio(codigo)
{
    var jsonPrecio = JSON.parse(precioProducto);
    for (var i in jsonPrecio) {
        if (jsonPrecio.hasOwnProperty(i) && i === codigo) {
            var precio = jsonPrecio[i];
            return precio;
        }
    }
}

function Limpiar()
{
    var txtTotal = document.getElementById("txtTotal");
    txtTotal.placeholder = "Total a pagar";

    var filasElement = document.getElementById("filas");
    filasElement.parentNode.removeChild(filasElement);
}

function registrarProducto() {
    var op = $('#cantidad').val();
    var idProd = $('#producto').val();
    var size = $('#tamanio').val();
    var Precio = parseFloat(obtenerPrecio(idProd));
    var totalLinea = 0;
    
    if (size == 'Medium') {
        totalLinea = ((Precio * 0.10) + Precio) * op.value;
    } else if (size == 'Large') {
        totalLinea = ((Precio * 0.15) + Precio) * op.value;
    } else {
        totalLinea = Precio * op.value;
    }
    
    var fila = "<tr id='filas'><td>" + op.value + "</td><td>" + idProd + "</td><td>" + size + "</td><td>" + Precio + "</td><td>" + totalLinea + "</td></tr>";
    
    $('#datos').append(fila);
    
    var total_col4 = 0;
    
    // Recorro todos los tr ubicados en el tbody
    $('#datos tr').each(function () {
        total_col4 += parseFloat($(this).find('td').eq(4).text());
    });
    
    $("#txtTotal").attr("placeholder", total_col4);
}
