
// function calculadora(){



//     const option = parseInt(prompt("Ingrese una opcion: 1-suma 2-resta 3-producto 4-division"));

//     if(isNaN(option) == false){
        
//     let numero1 = parseInt(prompt("Ingrese un numero"));
//     let numero2 = parseInt(prompt("Ingrese otro numero"));

//     //metodos...

//     //sumar
//     function sumar(){
//         alert(numero1 + numero2);
//         console.log(numero1 + numero2);
//         document.write(numero1 + numero2);
//     }

//     //restar
//     function restar(){
//         alert(numero1 - numero2);
//         console.log(numero1 - numero2);
//         document.write(numero1 - numero2);
//     }

//     //multiplicar

//     function producto(){
//         alert(numero1 * numero2);
//         console.log(numero1 * numero2);
//         document.write(numero1 * numero2);
//     }

//     //division

//     function dividir(){
//         alert(numero1 / numero2);
//         console.log(numero1 / numero2);
//         document.write(numero1 / numero2);
//     }
 

//    if(isNaN(numero1) == false && isNaN(numero2) == false){

     
//     switch(option){
//         case 1:
//             sumar();
//             break;

//         case 2:
//             restar();
//             break;

//         case 3:
//             producto();
//             break;

//         case 4:
//             dividir();
//             break;

//         default:
//             calculadora();
//     }

//    }

//    else {
//     const result = confirm("Introdujo caracteres no validos en los numeros, ¿desea volver empezar?");

//     if(result == true){
//         alert("Abriendo calculadora...");
//         alert("Calculadora abierta correctamente y lista para usar!!");
//         calculadora();
//     }

//     else if(result == false){
//         alert("Cerrando calculadora");
//     }
//    }

//     }

//     else{

//         const result = confirm("Introdujo caracteres no validos en las opciones, ¿desea volver empezar?");

//         if(result == true){
//             alert("Abriendo calculadora...");
//             alert("Calculadora abierta correctamente y lista para usar!!");
//             calculadora();
//         }
    
//         else if(result == false){
//             alert("Cerrando calculadora");
//         }
//     }

//     //Metodos;

//     //Sumar
   
    

// }

// calculadora();


// function meterNumeros(){

//     array = [];

//    while(confirm("¿Desea continuar?")){
    
//     let numero = parseInt(prompt("Ingrese un numero"));

//     array.push(numero);

//    }

//    let matcher = parseInt(prompt("Ingrese un elemento a buscar"));

//    let result = array.indexOf(matcher);

//    if(result){
    
//     console.log("El elemento se encuentra en la posicion: " + result);
    
//     for(let i = 0; i<array.length;i++){

//         if(i == result){
//             console.log("El elemento es: " + array[i]);
//         }
//     }

//    }

// //    for(let i = 0; i<array.length; i++){
    
// //    }

 
    
// }

// meterNumeros();

// let page = 25;

// const btn_right = document.querySelector(".btn_right");
// const btn_left = document.querySelector(".btn_left");

// btn_left.addEventListener("click",()=>{

//   page = page + 24;
//   consumirAPIrest();
  
// });



// btn_right.addEventListener("click",()=>{

//   page = page - 24;
//   consumirAPIrest();
  
// });




// const consumirAPIrest= async ()=>{

//   let objeto = document.querySelector(".objeto");

//   objeto.innerHTML = "";

//     const resp = await fetch(`https://gateway.marvel.com:443/v1/public/comics?offset=${page}&limit=24&ts=1&apikey=1c1175d78135ea8b50e8c56960230ea5&hash=afe20a7284af32b0dc033363543a8afc`);
//     const data = await resp.json();

//     console.log(data);

//     const {data:{results}} = data;

//     results.forEach((index)=>{

//       console.log(index.name);

//       objeto.innerHTML += `
      

//       <img src = '${index.thumbnail.path}.jpg' >

//       `;

//     })

// }

// consumirAPIrest()





setInterval(()=>{

  function validarZero(timer){

    if(timer.toString().length < 2){
      return "0"+(timer);
    }
  
    else{
      return timer
    }
  }


let hours_html = document.querySelector(".hours");
let minutes_html = document.querySelector(".minutes");
let seconds_html = document.querySelector(".seconds");

  hours_html.innerHTML = validarZero(new Date().getHours())+ " Hrs";
  minutes_html.innerHTML = validarZero(new Date().getMinutes()) + " Min";
  seconds_html.innerHTML = validarZero(new Date().getSeconds()) + " Sec";
  
  
  
},1000);


let circulo = document.querySelectorAll(".circulo");

circulo.forEach((index) =>{

  index.addEventListener("dragstart",(e)=>{

    console.log(e.target.id);
    e.dataTransfer.setData("text/plain", e.target.id);
    

  });

  index.addEventListener("drag",(e)=>{
    console.log("Arrastrando " + e.target.id);
  });


  index.addEventListener("dragend",(e)=>{
    console.log("Finalizando drag");
  });

});



let Area = document.querySelector(".areaDeTrabajo");

Area.addEventListener("dragenter",()=>{

  console.log("Entrando al area de contenido");
});

Area.addEventListener("dragover",(e)=>{
  e.preventDefault();
});

Area.addEventListener("drop",(e)=>{
  
  let element = e.dataTransfer.getData("text");

  Area.appendChild(document.getElementById(element));

});



let AreaEnfoque = document.querySelector(".areaDeEnfoque");

AreaEnfoque.addEventListener("dragenter",()=>{

  console.log("Entrando al area de contenido");
});

AreaEnfoque.addEventListener("dragover",(e)=>{
  e.preventDefault();
});

AreaEnfoque.addEventListener("drop",(e)=>{
  
  let element = e.dataTransfer.getData("text");

  AreaEnfoque.appendChild(document.getElementById(element));

});







    