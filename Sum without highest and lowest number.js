function sumArray(array) {
   if (array == null || array.length <= 2) {
     return 0
   } else {
     let max = Math.max.apply(Math, array)
     let min = Math.min.apply(Math, array)
     let sum = 0
     
     for (i = 0; i < array.length; i++)
        sum += array[i]
     return sum - max - min
     }
  
}