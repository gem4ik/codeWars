function oddOrEven(array) {
    let sum = 0
    
     for (i=0;i<array.length;i++){
       sum += array[i]
     }
    
       if (sum%2 == 0){
         return "even"
       } else {
         return "odd"
       }
    console.log(sum)
  }