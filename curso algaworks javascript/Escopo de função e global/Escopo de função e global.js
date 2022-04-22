var nome = "alga works";//variavel global
 var capitalizar = function(){
     //nome variavel local À função capitalizar
 var nome ="alga works" .toUpperCase ();
 capitalizar();
 console.log("nome", nome);
 }
 var capitalizar2 = function(){
     nome = "alga works". toUpperCase();
 }
 capitalizar2();
 console.log("nome2", nome);