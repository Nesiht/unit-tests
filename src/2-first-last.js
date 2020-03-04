
//  SOLVED WITH REGULAR ELSE IF STATEMENT
// export const firstLast = (items) => {
//   if ( items.length >= 2 ) {
//     return `First: ${items[0]}, Last: ${items[items.length-1]}`
//   } else if ( items.length == 1) {
//     return `Only item: ${items[0]}`
//   } else {
//     return `No items!`
//   }
// }

// SOLVED WITH TERNARY OPERATOR
export const firstLast = (items) => {
return ( items.length >= 2 ) ? `First: ${items[0]}, Last: ${items[items.length-1]}`
: ( items.length == 1 ) ? `Only item: ${items[0]}`
: `No items!`;
}

