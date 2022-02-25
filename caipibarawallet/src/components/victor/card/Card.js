import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className={'card center'}>
      {props.children}
    </div>
  )
}
