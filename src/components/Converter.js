import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import { convert } from '../utils/convert'

export const Converter = ({ currencies }) => {
  const [currenciesVals, setCurrenciesVals] = useState({
    fromAmount: localStorage.getItem('fromAmount')
      ? localStorage.getItem('fromAmount')
      : '',
    toAmount: localStorage.getItem('toAmount')
      ? localStorage.getItem('toAmount')
      : '',
    fromPrice: localStorage.getItem('fromPrice')
      ? localStorage.getItem('fromPrice')
      : currencies[0].price,
    toPrice: localStorage.getItem('toPrice')
      ? localStorage.getItem('toPrice')
      : currencies[0].price
  })

  const handleToAmount = (val) => {
    const convertedValue = convert(
      val,
      currenciesVals.fromPrice,
      currenciesVals.toPrice,
      2,
      currencies
    )

    setCurrenciesVals({
      ...currenciesVals,
      toAmount: val,
      fromAmount: convertedValue
    })
    localStorage.setItem('toAmount', val)
    localStorage.setItem('fromAmount', convertedValue)
  }

  const handleToPrice = (val) => {
    const convertedValue = convert(
      currenciesVals.fromAmount,
      currenciesVals.fromPrice,
      val,
      2
    )
    setCurrenciesVals({
      ...currenciesVals,
      toPrice: val,
      toAmount: convertedValue
    })
    localStorage.setItem('toPrice', val)
  }

  const handleFromPrice = (val) => {
    const convertedValue = convert(
      currenciesVals.fromAmount,
      val,
      currenciesVals.toPrice,
      2
    )
    setCurrenciesVals({
      ...currenciesVals,
      fromPrice: val,
      toAmount: convertedValue
    })
    localStorage.setItem('fromPrice', val)
  }

  const handleFromAmount = (val) => {
    const convertedValue = convert(
      val,
      currenciesVals.fromPrice,
      currenciesVals.toPrice,
      2
    )
    console.log(currenciesVals)
    setCurrenciesVals({
      ...currenciesVals,
      fromAmount: val,
      toAmount: convertedValue
    })
    localStorage.setItem('toAmount', convertedValue)
    localStorage.setItem('fromAmount', val)
  }

  return (
    <div className="d-flex mt-4 mb-5">
      <div className="d-flex flex-column col-2">
        <Form.Group className="mb-3">
          <Form.Control
            id=""
            placeholder="0"
            value={currenciesVals.fromAmount}
            name="fromAmount"
            onChange={(e) =>
              handleFromAmount(e.target.value.replace(/[^0-9\.\,]/g, ''))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            id=""
            placeholder="0"
            value={currenciesVals.toAmount}
            name="toAmount"
            onChange={(e) =>
              handleToAmount(e.target.value.replace(/[^0-9\.\,]/g, ''))
            }
          />
        </Form.Group>
      </div>
      <div className="d-flex flex-column col-3 ms-5">
        <Form.Group className="mb-3">
          <Form.Select
            id=""
            className="mb-3"
            value={currenciesVals.fromPrice}
            name="fromPrice"
            onChange={(e) => handleFromPrice(e.target.value)}
          >
            {currencies.map((quote) => {
              return (
                <option value={quote.price} key={quote.code}>
                  {quote.name}
                </option>
              )
            })}
          </Form.Select>
          <Form.Select
            id=""
            value={currenciesVals.toPrice}
            name="toPrice"
            onChange={(e) => handleToPrice(e.target.value)}
          >
            {currencies.map((quote) => {
              return (
                <option value={quote.price} key={quote.code}>
                  {quote.name}
                </option>
              )
            })}
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  )
}
