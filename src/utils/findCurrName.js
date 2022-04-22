import { codes } from "../constants";

export const findCurrName = (givenCode) => {
    let name  
    Object.keys(codes).forEach((code) => {
        if(code === givenCode.replace('USD', '')) name = codes[code];
    })
    return name
}
