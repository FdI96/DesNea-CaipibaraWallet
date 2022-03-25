import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className={'card bg-red-500'}>
      {props.children}
    </div>
  )
}
