$(function(){

var atividade =$("#atividade");

var listadeatividades=$("#lista-Atividade")

atividade.on("keyup",function(e){

    keyCode=e.keyCode
    if (keyCode === 13){
    
        //disparar evento...
        listadeatividades.prepend("<li>"+ atividade.val() + "</li>")
        atividade.trigger('enter', atividade.val());
        atividade.val('');
    }
 })



})