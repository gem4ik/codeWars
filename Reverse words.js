function reverseWords(str) {
  const reverse = str.split(' ').map( word => word.split('').reverse().join('')).join(' ')
  return reverse
}