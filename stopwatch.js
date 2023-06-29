//fetch html data 
const start = document.querySelector ('#Start');
const stopbutt = document.querySelector ('#stop');
const resetbutt = document.querySelector ('#reset');
const display = document.querySelector ('.timer');

//default values 
let min =0 ;
let sec= 0;
let hr =0;
let intervalid ;

//event listener 

start.addEventListener ( 'click' , ()=> {
 let converttonum =  parseInt (display.innerHTML);
  let intervalid = setInterval ( () => {
       

    
       console.log (sec);
       if (sec < 59) 
       {
         sec=sec+1;
       }
       
      else if (min>=59)
       {
        
          
          min =0;
          hr=hr+1;
          
      }
      else 
       { 
            min= min+1;
            sec =0;

      }

       // add intial zeros to string 
      const Second = sec.toString().padStart(2,"0");
       const hour = hr.toString().padStart(2,"0");
       const minute = min.toString().padStart(2,"0");
      

    
    display.textContent =`${hour}: ${minute}: ${Second}`;

  },1000)

  //stop the interval 
  stopbutt.addEventListener ('click' , ()=> {
    clearInterval(intervalid);
  });
  
 //set display to 00:00:00 and start from 1; 
  resetbutt.addEventListener("click",()=> {
    clearInterval(intervalid);
    display.textContent = "00:00:00";
    hr=0;
    sec=0;
    min=0;
  })


 
})



 
    
       
    
 
    
    
