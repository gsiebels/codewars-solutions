// === Long solution ===

function even_or_odd(number) {
  if ( number % 2 == 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}


// === Short solution === 

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}


// === One-liner ===

const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd'






