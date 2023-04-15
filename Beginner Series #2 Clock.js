function past(h, m, s){
  let hourInMs = h*60*60*1000
  let minutesInMs = m*60*1000
  let secondsInMs = s*1000
  return hourInMs+minutesInMs+secondsInMs
}