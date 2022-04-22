import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import { convert } from '../utils/convert'

export const Converter = ({ currencies }) => {
  const [currenciesVals, setCurrenciesVals] = useState({
    fromAmount: 0,
    toAmount: 0,
    fromPrice: currencies[0].price,
    toPrice: currencies[0].price
  })

  /// отдельный обработчик для каждого инпута
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
  }

  const handleToPrice = (val) => {
    const convertedValue = convert(
      currenciesVals.fromAmount,
      val,
      currenciesVals.fromPrice,
      2
    )
    setCurrenciesVals({
      ...currenciesVals,
      toPrice: val,
      toAmount: convertedValue
    })
  }

  const handleFromPrice = (val) => {
    const convertedValue = convert(
      currenciesVals.fromAmount,
      currenciesVals.toPrice,
      val,
      2
    )
    setCurrenciesVals({
      ...currenciesVals,
      fromPrice: val,
      toAmount: convertedValue
    })
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
  }

  return (
    <div className="d-flex mt-4 mb-5 col-6 col-sm-9 col-md-7 col-lg-5 col-xl-4">
      <div className="d-flex flex-column col-5">
        <Form.Group className="mb-3">
          <Form.Control
            id=""
            placeholder="0"
            value={currenciesVals.fromAmount}
            name="fromAmount"
            onChange={(e) =>
              handleFromAmount(e.target.value.replace(/[^0-9.,]/g, ''))
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
              handleToAmount(e.target.value.replace(/[^0-9.,]/g, ''))
            }
          />
        </Form.Group>
      </div>
      {/* <div className="d-flex flex-column ms-3 col-6 col-sm-5 col-md-4 col-xl-3"> */}
      <div className="d-flex flex-column ms-3">
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
