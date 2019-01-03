$(document).ready(function(){
    $("#redbtn").click(function(){
      let number = [parseFloat($("#r1").val()),
      parseFloat($("#r2").val()),
      parseFloat($("#r3").val()),
      parseFloat($("#r4").val()),
      parseFloat($("#r5").val()),
      parseFloat($("#r6").val()),
      parseFloat($("#r7").val()),
      parseFloat($("#r8").val()),
      parseFloat($("#r9").val()),
      parseFloat($("#r10").val())
      ]
      number.sort((a, b)=> b-a);
      let calf = (number[0] + number[1])/2
      console.log(number)
      document.getElementById("p").innerHTML = `mejor puntaje: ${number[0]} <br> segundo mejor puntaje: ${number[1]} <br> Calificación: ${calf}`
    });
  });