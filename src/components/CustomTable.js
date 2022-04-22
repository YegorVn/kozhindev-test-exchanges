import React, { useEffect, useState } from 'react'

import { Table, Button, Form } from 'react-bootstrap'
import { convert } from '../utils/convert'

export const CustomTable = ({ defaultCurrencies }) => {
  const [showMore, setShowMore] = useState(false)
  const [currencies, setCurrencies] = useState(defaultCurrencies)

  const searchCurrencies = (val, currencies) => {
    return currencies.filter((quote) => {
      return (
        quote.name.toUpperCase().includes(val.toUpperCase()) ||
        quote.code.toUpperCase().includes(val.toUpperCase())
      )
    })
  }

  const sliceCurrencies = (currencies) => {
    return currencies.slice(0, 2)
  }

  useEffect(() => {
    setCurrencies(
      showMore ? sliceCurrencies(defaultCurrencies) : defaultCurrencies
    )
  }, [showMore, defaultCurrencies])

  const handleSearch = (val) => {
    setCurrencies(searchCurrencies(val, defaultCurrencies))
  }

  return (
    <>
      <Form.Group className="mt-4 mb-4" responsive='sm' >
        <Form.Control
          id=""
          placeholder=""
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Form.Group>
      <Table className="custom-table col-10" size="sm" responsive="xl" striped bordered hover>
        <thead>
          <tr>
            <th>Строка</th>
            <th>Валюта</th>
            <th>Код</th>
            {defaultCurrencies.map((quote) => {
              return <th key={quote.code}>{quote.name}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {currencies.map((row, index) => {
            return (
              <tr key={row.price}>
                <td>{index + 1}</td>
                <td>{currencies[index].name}</td>
                <td>{currencies[index].code}</td>
                {defaultCurrencies.map((cell) => {
                  return (
                    <td key={cell.code}>
                      {convert(1, cell.price, row.price, 2)}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div className="d-flex">
        <Button
          className="mt-2 ms-auto me-auto"
          onClick={() => setShowMore(!showMore)}
          variant={'secondary'}
        >
          {showMore ? 'Показать' : 'Скрыть'}
        </Button>
      </div>
    </>
  )
}
