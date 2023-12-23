const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId
const startChngingColor = function(){
    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    }
  if(intervalId == null){
    intervalId = setInterval(changeBgColor,1000)
  }
}

const stopChngingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector("#start").addEventListener('click',startChngingColor);
document.querySelector("#stop").addEventListener('click',stopChngingColor);