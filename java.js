
//Dgital Clcok with Date API

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


//Drag And Drop API

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



