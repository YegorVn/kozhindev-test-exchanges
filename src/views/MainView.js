import React from 'react'
import { Container } from 'react-bootstrap'
import { CustomTable } from '../components/CustomTable'
import { Converter } from '../components/Converter'
export default function MainView () {
  return (<Container className="mt-5">
  <h4>Перевод валют</h4>
  <Converter/>
  <h4>Курсы валют</h4>
  <CustomTable/>
</Container>)
}
