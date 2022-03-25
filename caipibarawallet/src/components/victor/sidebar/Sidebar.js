import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div id={'sidebar'}>
      <ul className={'flex flex-col gap-y-6 | text-xl font-semibold uppercase | mt-40 '}>
        <li> Home </li>
        <li> Crypto Market </li>
      </ul>
    </div>
  )
}
