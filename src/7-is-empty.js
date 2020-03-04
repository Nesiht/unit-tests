export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } 

  return false
}


// #3 empty array is not working.
// #5 empty object is not working.