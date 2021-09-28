
/*
I. Al pulsar 4 teclas de nuestra elección, la barra ha de moverse 15 px. arriba, abajo,
derecha o izquierda según la tecla pulsada.



II. De no pulsar la tecla correcta, nos informará mediante un alert de las teclas permitidas al tiempo que nos indica la tecla que hemos pulsado erróneamente.
*/

var runCrono= setInterval(crono, 11);
window.onload =function(){
    setInterval(ejecutar, 5); 
    document.onkeydown = teclas;
}



function generarnumero() {
  var numero =  Math.floor(Math.random()*255+1);
  return numero;
}
 
var control = false;
var x_barra = 0;
var y_barra = 0;

function teclas(event) {
  if (control == false){
 
    control =true;
}
    var codigo = event.key;
    var elemento = document.getElementById("barra");
    
    var atributo = "rgb("
                    + generarnumero()
                    + ","
                    + generarnumero()
                    + ","
                    + generarnumero()
                    + ")"
  if (codigo == "ArrowRight" || codigo == "ArrowLeft" || codigo == "ArrowDown" || codigo == "ArrowUp"){
    
        
    if(codigo == "ArrowRight"){
        x_barra = elemento.offsetLeft + 15;
        elemento.style.left = x_barra + "px"; 
        elemento.style.backgroundColor= atributo;
    }
    
    if(codigo == "ArrowLeft"){
        x_barra = elemento.offsetLeft - 15;
        elemento.style.left = x_barra + "px";
        elemento.style.backgroundColor= atributo;
  
    }
    
    if(codigo == "ArrowDown"){
            y_barra = elemento.offsetTop + 15;
            elemento.style.top = y_barra + "px";
        elemento.style.backgroundColor= atributo;
            
    }
    
    if(codigo == "ArrowUp"){
            y_barra = elemento.offsetTop - 15;
            elemento.style.top = y_barra + "px";
        elemento.style.backgroundColor= atributo;
    }
    
    }

    else{
        alert("Las teclas correctas son " + "\u2190" + "\u2191" + "\u2193"+ "\u2192" + " has pulsado " + codigo);
    }
}
  
  
  
  /*Pelota que rebota*/
  
  
  
     var sumax = 0;
     var sumay = 0;
     var pixelAnt_x = 199;
     var pixelAnt_y = 199;
     var toca = false;


function ejecutar(){
     var elemento = document.getElementById("pelota");
     var x = elemento.offsetLeft;
     var y = elemento.offsetTop;
     var ancho_max = screen.height + 500;
     var altura_max = screen.availHeight -100;
  
  
  
    

    /* CONTROL DEL TAMAÑO DE LAS ESQUINAS*/
    
     if (x < 0 && y < 0){
         
    sumax = x + 3;
    sumay = y + 2;
    pixelAnt_x = x;
    pixelAnt_y = y;
    elemento.style.left = sumax + "px";
    elemento.style.top = sumay + "px";
    console.log("1-1");
       if (toca == true){
         toca = false;
         elemento.style.backgroundColor = red;
         }
         else{
         toca = true;
          elemento.style.backgroundColor = green;
         }
               
     }
   
    
    else if (x > ancho_max && y < 0 ){
     
    sumax = x - 3;
    sumay = y + 2;
    pixelAnt_x = x;
    pixelAnt_y = y;
    elemento.style.left = sumax + "px";
    elemento.style.top = sumay + "px";
      console.log("1-2");
          if (toca == true){
         toca = false;
         elemento.style.backgroundColor = red;
         }
         else{
         toca = true;
           elemento.style.backgroundColor = green;
         }  
     }
    
    else if (x > ancho_max && y > altura_max){
        
     sumax = x - 2;
     sumay = y - 2;
     pixelAnt_x = x;
     pixelAnt_y = y;
      elemento.style.left = sumax + "px";
    elemento.style.top = sumay + "px";
      console.log("1-3");
         if (toca == true){
         toca = false;
         elemento.style.backgroundColor = red;
         }
         else{
         toca = true;
           elemento.style.backgroundColor = green;
         }
     }
    
    
    else if(x < 0 && y > altura_max){
            
     sumax = x + 2;
     sumay = y - 2;
     pixelAnt_x = x;
     pixelAnt_y = y;
     elemento.style.left = sumax + "px";
     elemento.style.top = sumay + "px";
      console.log("1-4");
         if (toca == true){
         toca = false;
         elemento.style.backgroundColor = red;
         }
         else{
         toca = true;
           elemento.style.backgroundColor = green;
         }
        
            }
    
  
    /*CONTROL DEL TAMAÑO DE LAS PAREDES*/
    
    
     else if(x < 0 && y > 0){
    sumax = x + 2;
    sumay = y - 3;
    pixelAnt_x = x;
    pixelAnt_y = y;
    elemento.style.left = sumax + "px";
    elemento.style.top = sumay + "px";
       console.log("2-1");
             if (toca == true){
         toca = false;
         elemento.style.backgroundColor = "red";
         }
         else{
         toca = true;
         elemento.style.backgroundColor = "green";
         }
            }
    else if(x > 0 && y < 0){
    sumax = x + 2;
    sumay = y + 3;
    pixelAnt_x = x;
    pixelAnt_y = y;
    elemento.style.left = sumax + "px";
    elemento.style.top = sumay + "px";
        console.log("2-2");
             if (toca == true){
         toca = false;
         elemento.style.backgroundColor = "red";
         }
         else{
         toca = true;
           elemento.style.backgroundColor = "green";
         }
            }
    
    else if(x > ancho_max && y < altura_max){
    sumax = x - 2;
    sumay = y + 3;
    pixelAnt_x = x;
    pixelAnt_y = y;
    elemento.style.left = sumax + "px";
    elemento.style.top = sumay + "px";
      console.log("2-3");
             if (toca == true){
         toca = false;
         elemento.style.backgroundColor = "red;"
         }
         else{
         toca = true;
           elemento.style.backgroundColor = "green";
         }
    }
    
     else if(x < ancho_max && y > altura_max){
    sumax = x - 2;
    sumay = y - 3;
    pixelAnt_x = x;
    pixelAnt_y = y;
    elemento.style.left = sumax + "px";
    elemento.style.top = sumay + "px";
       console.log("2-4");
             if (toca == true){
         toca = false;
         elemento.style.backgroundColor = "red";
         }
         else{
         toca = true;
           elemento.style.backgroundColor = "green";
         }
            }
    
  
  
  
    /*CONTROL DE LA BARRA*/
       else if(x > x_barra -50 && x < x_barra + 105  && 
              y > y_barra -50 && y < y_barra + 0){
             elemento.style.left = x + "px";
             elemento.style.top = y + "px";
             clearInterval(runCrono);
              }
    
    else{
        
        
        
        /*IDA*/
        
        if(pixelAnt_x > x && pixelAnt_y > y && toca == false){
             sumax = x - 2;
             sumay = y - 3;
             pixelAnt_x= x;
             pixelAnt_y= y;
              console.log("3-1");
             elemento.style.left = sumax + "px";
             elemento.style.top = sumay + "px";
             elemento.style.backgroundColor = "red";
        }
        else if(pixelAnt_x < x && pixelAnt_y < y  && toca == false){
            sumax = x + 2;
            sumay = y + 3;
            pixelAnt_x= x;
            pixelAnt_y= y;
          console.log("3-2");
            elemento.style.left = sumax + "px";
            elemento.style.top = sumay + "px";
           elemento.style.backgroundColor = "red";
     }
        
        else if(pixelAnt_x > x && pixelAnt_y < y && toca == false){
             sumax = x - 2;
             sumay = y - 3;
             pixelAnt_x= x;
             pixelAnt_y= y;
              console.log("3-3");
             elemento.style.left = sumax + "px";
             elemento.style.top = sumay + "px";
           elemento.style.backgroundColor = "red";
                }
        
        else if(pixelAnt_x < x && pixelAnt_y > y && toca == false){
             sumax = x + 2;
             sumay = y + 3;
             pixelAnt_x= x;
             pixelAnt_y= y;
              console.log("3-4");
             elemento.style.left = sumax + "px";
             elemento.style.top = sumay + "px";
           elemento.style.backgroundColor = "red";
                }
        
     
        
        
        
        
       /*Vuelta*/ 
        
        
       else if(pixelAnt_x > x && pixelAnt_y > y && toca == true){
             sumax = x + 2;
             sumay = y - 3;
             pixelAnt_x= x;
             pixelAnt_y= y;
          console.log("4-1");
             elemento.style.left = sumax + "px";
             elemento.style.top = sumay + "px";
            elemento.style.backgroundColor = "green";
        }
        
        else if(pixelAnt_x < x && pixelAnt_y < y  && toca == true){
            
            sumax = x - 2;
            sumay = y + 3;
            pixelAnt_x= x;
            pixelAnt_y= y;
          console.log("4-2");
            elemento.style.left = sumax + "px";
            elemento.style.top = sumay + "px";
          elemento.style.backgroundColor = "green";
            
     }
        
        else if(pixelAnt_x > x && pixelAnt_y < y && toca == true){
            console.log("4-3");
             sumax = x - 2;
             sumay = y + 3;
             pixelAnt_x= x;
             pixelAnt_y= y;
             elemento.style.left = sumax + "px";
             elemento.style.top = sumay + "px";
            elemento.style.backgroundColor = "green";
            
                }
        
        else if(pixelAnt_x < x && pixelAnt_y > y && toca == true){
                sumax = x + 2;
                sumay = y - 3;
             pixelAnt_x= x;
             pixelAnt_y= y;
              console.log("4-4");
             elemento.style.left = sumax + "px";
             elemento.style.top = sumay + "px";
            elemento.style.backgroundColor = "green";
                }
      
        

        }
  
    
}


  var suma_milesima = 0;
  var suma_centesima = 0;
  var suma_decima = 0;
  var suma_segundos = 0;
  var suma_minutos = 0;
  var suma_horas = 0;
  var salida="";

function crono(){
  var elemento = document.getElementById("lcd");
  
  if(suma_milesima > 8){
    suma_milesima = 0;
    suma_centesima = suma_centesima +1;
    
    }
  
  if(suma_centesima > 9){
    suma_centesima = 0;
    suma_decima = suma_decima + 1;
    
     
     }
  
  if(suma_decima > 59){
     suma_decima =0;
     suma_segundos= suma_segundos +1;
     
     }
  
  if(suma_segundos > 59){
     suma_segundos = 0;
     suma_minutos = suma_minutos +1;
     
     }
  
  if(suma_minutos > 59){
    suma_minutos = 0;
    suma_horas = suma_horas +1;
    
     }
  else{
    suma_milesima= suma_milesima +1;
  }
  
  
  salida = suma_minutos; /*horas*/
  salida += ":" + suma_segundos; /*minutos*/
  salida += ":" + suma_decima; /*segundos*/
  salida += "." + suma_centesima; /*segundos*/
  salida += suma_milesima; /*segundos*/
  
  
  
  elemento.innerHTML= salida;
}






