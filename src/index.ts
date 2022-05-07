let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnCalcular = document.getElementById("calcular");

let esMultiplo = (divisor:number,dividendo:number):boolean => {
  return ((divisor%dividendo) ==0);
}

btnCalcular.addEventListener("click", () => {
  let num1:number= Number(dato1.value);
  let num2:number= Number(dato2.value);
if (esMultiplo (num1,num2)){
  console.log (num1+" es múltiplo de "+num2);
} else {
  console.log (num1+" no es múltiplo de "+num2);
}
}