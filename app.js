const crossBtn = document.querySelector('.cross-btn');
const container = document.querySelector('.container');

crossBtn.addEventListener('click',()=>{  
   window.setTimeout(() => {
     container.style = {
       transition:'scaleY 0.3s ease',
       transform :'scaleY(0)'
     }
   }, 1000);

});