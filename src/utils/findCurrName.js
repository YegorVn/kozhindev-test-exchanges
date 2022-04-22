import { codes } from '../constants'
/// Поиск имени валюты по коду
export const findCurrName = (givenCode) => {
  let name
  Object.keys(codes).forEach((code) => {
    if (code === givenCode.replace('USD', '')) name = codes[code]
  })
  return name
}
