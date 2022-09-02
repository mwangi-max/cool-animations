const body = document.querySelector('body');

body.addEventListener('mousemove', (e)=>{
     let x = e.offsetX;
     let y = e.offsetY;

     const span = document.createElement('span');
     span.style.left = x + 'px';
     span.style.top = y + 'px';

     const size = Math.random()*200;

     span.style.height = size + 'px';
     span.style.width = size + 'px';
     body.appendChild(span);
     setTimeout(()=>{
        span.remove();
     },4000);
});