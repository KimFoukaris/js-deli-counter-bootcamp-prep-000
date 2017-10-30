var katzDeliLine = []

function takeANumber(katzDeliLine, newPerson) {
  var count = katzDeliLine.length
  katzDeliLine[count] = newPerson
  return "Welcome, " + katzDeliLine[count] + ". You are number " + (count+1) + " in line."
}

function nowServing(katzDeliLine) {
  var test = katzDeliLine.length
  if (test===0) {
    return "There is nobody waiting to be served!"
  } else {
  return "Currently serving " + katzDeliLine[0] + "."
  katzDeliLine.shift()
  return katzDeliLine
  }
}

function currentLine(katzDeliLine) {
  var count = katzDeliLine.length
  if (count === 0) {
    return "The line is currently empty."
  } else {
    var line = ""
    for (let i=0; i<count; i++) {
      line = line + (count+1) + ". " + katzDeliLine[count]
      }
    return "The line is currently: " + line
      }
}
