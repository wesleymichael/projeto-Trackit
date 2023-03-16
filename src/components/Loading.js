import React from 'react'
import { ThreeDots } from  'react-loader-spinner'

export default function Loading() {
  return (
    <ThreeDots 
        height="50"
        width="50"
        radius="5"
        color="#FFFFFF" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />
  )
}
