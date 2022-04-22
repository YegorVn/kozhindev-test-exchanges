import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { CustomTable } from '../components/CustomTable'
import { Converter } from '../components/Converter'
import CurrenciesAction from '../redux/actions/CurrenciesAction'
import { useSelector } from 'react-redux'
import { currenciesForRequest } from '../constants'

export default function MainView () {
  const currencies = useSelector((state) => state.currencies).currencies

  useEffect(() => {
    CurrenciesAction.find(currenciesForRequest)
  }, [])

  if (currencies !== undefined && currencies !== [] && currencies.length > 0) {
    return (
      <>
        <Container className="mt-5">
          <h4>Перевод валют</h4>
          <Converter currencies={currencies}/>
          <h4>Курсы валют</h4>
          <CustomTable defaultCurrencies={currencies} />
        </Container>
      </>
    )
  } else {
    return (
      <div className="d-flex">
        <Spinner animation="border" className="ms-auto me-auto mt-5" />
      </div>
    )
  }
}
