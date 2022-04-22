import { findCurrName } from './findCurrName'
/// преобразование объекта {USD%VAL_CODE%: NUMBER} в массив [{code: %VAL_CODE%, name: %VAL_NAME%, price: %VAL_PRICE%}]
export const transformRequestCurrencies = (payload) => {
  const currencies = payload.quotes
  return Object.keys(currencies).map(
    (quote) => (quote = { price: currencies[quote], name: findCurrName(quote), code: quote.replace('USD', '') })
  )
}
