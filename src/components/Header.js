import React, { useState } from 'react'
import { Button, Navbar, Container } from 'react-bootstrap'

import CurrenciesAction from '../redux/actions/CurrenciesAction'

export const Header = () => {
  const [lastUpdate, setLastUpdate] = useState((new Date()).toLocaleString())

  const update = () => {
    CurrenciesAction.find()
    setLastUpdate((new Date()).toLocaleString())
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="Home">Курсы валют</Navbar.Brand>
        <Button className="ms-auto me-5" onClick={update}>
          Обновить
        </Button>
        <Navbar.Text>
          {'Последнее обновление: ' + lastUpdate}
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}
