// Sum Numbers
function sum (numbers) {
    return (numbers == []) ? 0 : numbers.reduce(function(sum,elem){return sum+elem},0)
  };