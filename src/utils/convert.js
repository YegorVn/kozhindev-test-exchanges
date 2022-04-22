export const convert = (fromAmount, fromPrice, toPrice, approximation) => {
  if(fromAmount && fromPrice && toPrice && approximation) return ((fromAmount * fromPrice) / toPrice).toFixed(approximation);
  else return 0
}