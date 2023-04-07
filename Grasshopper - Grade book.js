function getGrade(s1, s2, s3) {

  let sum = s1 + s2 + s3;
  let quantity = getGrade.length
  let average = sum / quantity

  if (average < 60) return "F"
  else if (average < 70) return "D"
  else if (average < 80) return "C"
  else if (average < 90) return "B"
  else return "A"
}