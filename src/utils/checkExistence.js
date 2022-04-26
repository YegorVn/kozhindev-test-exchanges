export const checkExistence = (variable) => {
  if (variable !== 'undefined' && variable !== null && variable !== '') {
    return true
  } else {
    return false
  }
}
