let counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{

    counter.innerText = count;
    count++
    
    if(count > 5) location.replace('/xyz.html')
    
},1000)