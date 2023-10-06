let input=document.querySelector("input");
let display=document.querySelector("p");
let right=document.getElementById("right");
document.addEventListener('input',update);
function update()
{
   display.innerText=input.value;
}

let buttons=document.getElementsByTagName("button");

const buttonpressed=e=>{
   let Id=e.target.id;
   console.log(Id);
   let len=Id.length;
   console.log(len);
   if(len<=6)
   {
       let element=document.getElementById(Id);
       let color=window.getComputedStyle(element);
       let bg=color.backgroundColor;
       display.style.color=bg;
       document.getElementsByName('text-color')[0].value= bg;
       document.getElementById('btn').style.backgroundColor=bg;
   }
   else{
    let element=document.getElementById(Id);
    let color=window.getComputedStyle(element);
    let bg=color.backgroundColor;
    right.style.backgroundColor=bg;
    document.getElementsByName('text-bg')[0].value= bg;
    document.getElementById('btn-bg').style.backgroundColor=bg;
   }
   
}

for(let button of buttons)
{
   button.addEventListener("click",buttonpressed);
}