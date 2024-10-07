//your JS code here. If required.
 function secondHighest(arr){
        
        const secound= [...arr].sort((a,b)=>a-b);

        
        if(arr.every((val,i,arr) => val === arr[0])){
        return "-Infinity";
        //or this wold also work or(val,i,arr) will also work 
        //if(arr.every((val, _) => val === arr[0])) {
        //return "-Infinity";


    }
    
       
       if(secound.length<=1){return "-Infinity"}

       else{
            let finalanswer=secound[secound.length-2];
            return finalanswer;
       }
      
       
    }
    console.log(secondHighest([5,1,2,3,4]));  
    console.log(secondHighest([-1,-2,-3,-4,-5]));
    console.log(secondHighest([1, 1, 1, 1, 1]));
   console.log(secondHighest([]));
   console.log(secondHighest([1]));