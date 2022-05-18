var startNumberRef = document.getElementById("startNumber");
var startNumber = 0;

function increment() {
    startNumber = startNumber +1;
    startNumberRef.innerHTML = startNumber;
    if(startNumber ==0){
        document.getElementById("startNumber").style.color="black";
    }
    if(startNumber >0){
        document.getElementById("startNumber").style.color="blue";
     }
    if(startNumber == 10) {
        document.getElementById("adicionar").disabled = true;
        alert("Valor máximo alcançado.")
    }
}

function decrement() {
    startNumber = startNumber -1;
    startNumberRef.innerHTML = startNumber;
    if(startNumber == 0) {
        document.getElementById("startNumber").style.color="black";
    }
    if(startNumber < 0){
        document.getElementById("startNumber").style.color="#f00";
   }
   if(startNumber == -10) {
       document.getElementById("subtrair").disabled = true;
       alert("Valor mínimo alcançado.")
   }
}

function contador() {
    document.getElementById("atvdDIO").innerHTML = "Contador"
}

document.getElementById("subtrair").addEventListener("click", decrement);
document.getElementById("adicionar").addEventListener("click", increment);
document.getElementById("atvdDIO").addEventListener("mouseover", contador);


// if(startNumber < 0){
//      document.getElementById("startNumber").style.color="#f00";
// }
// if(startNumber >0){
//    document.getElementById("startNumber").style.color="blue";
// }
