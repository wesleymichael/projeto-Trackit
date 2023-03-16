import React, { useContext } from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RoutineMain from './RoutineMain'

import { GlobalContext } from '../../context/GlobalContext'

export default function RoutinePage() {
  return (
    <>
      <Header />
      <RoutineMain />
      <Footer />
    </>
  )
}