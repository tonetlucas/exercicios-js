alert("Vamos conferir os números de 0 a 9")
var nmr = "";
for(var i = 0; i<10; i++){
    if(i==9){
        nmr += i;
    }
    else{
        nmr += i + ",";
    }
}
alert(nmr);