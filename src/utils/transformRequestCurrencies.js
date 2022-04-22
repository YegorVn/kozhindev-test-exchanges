import { findCurrName } from "./findCurrName";
export const transformRequestCurrencies = (payload) => {
  const currencies = payload.quotes  
  return Object.keys(currencies).map(
        (quote) => (quote = { price: currencies[quote], name: findCurrName(quote), code: quote.replace('USD', "")})
      );
}