function bmi(weight, height) {
  const index = weight / Math.pow(height, 2)
  switch (true) {
      case index <= 18.5 :
      return "Underweight"
      break;
      case index <= 25.0 :
      return "Normal"
      break;
      case index <= 30.0 :
      return "Overweight"
      break;
      case index > 30 :
      return "Obese"
      break;
  }
}