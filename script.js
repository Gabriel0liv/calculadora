
var valores = "";
var texto = "";

function addval(i) {
  var inp = document.getElementById("resultados").value;
  if(inp.includes("+") || inp.includes("-") || inp.includes("/") || inp.includes("*")){
    let  op = "";
    op += i;
    document.getElementById("resultados").value += op;
    //console.log("alo: " + op);
  }else{
    valores += "" + i;
    document.getElementById("resultados").value = valores;
    //console.log(valores);
  }

}

function clearButtonClick() {
  document.getElementById("resultados").value = " ";
  valores = "";
}

function operation (a){
  var alo = document.getElementById("resultados").value;
  
  switch (a){
    case '+':
        texto = "+";
        document.getElementById("resultados").value = valores + texto;
        //console.log(document.getElementById("resultados").value);
        break;
    case '-':
      texto = "-";
      document.getElementById("resultados").value = valores + texto;
      break;
    case '*':
      texto = "*";
      document.getElementById("resultados").value = valores + texto;
      break;
    case '/':
      texto = "/";
      document.getElementById("resultados").value = valores + texto;
      break;
    
  }
  
  
}

function calculate(){
  document.getElementById("resultados").value = eval(document.getElementById("resultados").value);
  valores = document.getElementById("resultados").value;
}

