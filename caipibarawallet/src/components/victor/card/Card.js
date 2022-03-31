import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className={'card grid place-content-center | bg-red-500 w-1/3 h-1/2 | rounded-3xl'}>
      {props.children}
    </div>
  )
}
