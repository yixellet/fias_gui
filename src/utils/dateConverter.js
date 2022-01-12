function twoDigitDate(number) {
  if (number < 10) {
    return `0${String(number)}`
  } else {
    return number
  }
}

function toDMY(dateString) {
  const date = new Date(dateString);
  return (`${twoDigitDate(date.getUTCDate())}.${twoDigitDate(date.getUTCMonth() + 1)}.${date.getUTCFullYear()}`)
}

export default toDMY
