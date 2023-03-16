import React, { useContext } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RoutineMain from './RoutineMain'

export default function RoutinePage() {
  return (
    <>
      <Header />
      <RoutineMain />
      <Footer />
    </>
  )
}