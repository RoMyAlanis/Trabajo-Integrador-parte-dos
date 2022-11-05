function total_a_pagar()
{       
    var estudiante=40;
    var trainee=100;
    var junior=170;
    var Valor_estandar=200;

    cantidad=document.getElementById("cantidad").value;
    var select= document.getElementById ("categoriaSelect"); 
    var select_activa=select.options[select.selectedIndex].value;
    result=0

    switch(selected_activa=parseInt(select_activa))
    {
    case 1:
        result=(parseInt(cantidad)*parseInt(estudiante));
        break;
    case 2:
        result=(parseInt(cantidad)*parseInt(trainee));
        break;
     case 3:
        result=(parseInt(cantidad)*parseInt(junior));
        break;
    case 4:
        result=(parseInt(cantidad)*parseInt(Valor_estandar));
        break;
    }

document.getElementById("total_a_pagar2").value=result;

}




