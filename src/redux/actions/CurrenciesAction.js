import store from '../../index'
import axios from 'axios'
const DEFAULT_URL =
  'http://api.currencylayer.com/live?access_key=d32a5d184881bca99bf74d6ac67a5f34&currencies='

/// Получаем данные через api
export default class CurrenciesAction {
  static async find (params) {
    const response = await axios.get(`${DEFAULT_URL + params.join(',') + '&source=USD&format=1'}`).then((res) => {
      return res
    })
    console.log(response)
    if (response.statusText === 'OK') {
      store.dispatch({
        type: 'CURRENCIES_INDEX',
        payload: response.data
      })
    } else console.log('err')
  }
}
