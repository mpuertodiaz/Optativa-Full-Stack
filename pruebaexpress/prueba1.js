var uno=Number(prompt("Dime un numero"));
var dos=Number(prompt("Dime un segundo numero"));
var tres=Number(prompt("Dime un tercer numero"));
var media = (uno+dos+tres)/3;
media.toFixed(2);
alert(media);
if(media>=5){
    console.log("Estas aprobado");
}
else{
    console.log("Estas suspenso");
}