import { React, useState } from 'react'
import Card from './Card1'
import '../Brainbiltz.css'
import Card1 from './Card1'


export default function BrainBiltz(props) {

  return (

    <div className='contianer'>

      <div className='row'>

        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className='row'>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div >
  )
}
