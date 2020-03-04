const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

//  SOLVED WITH REGULAR ELSE IF STATEMENT
// export const monthName = (monthNumber) => {
//   if ( monthNumber > 0 && monthNumber < 13) {
//     return months[monthNumber-1]
//   } else {
//     return null
//   }
// }

// SOLVED WITH TERNARY OPERATOR
 export const monthName = (monthNumber) => {
  return ( monthNumber > 0 && monthNumber < 13 ) ? months[monthNumber-1]
  : null
 }