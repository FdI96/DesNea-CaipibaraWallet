import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div id={'sidebar'} className={'fixed top-0 left-0 w-52 h-full z-10	| bg-gray-500 '}>
      <ul className={'flex flex-col gap-y-6 | text-xl font-semibold uppercase text-white | mt-40 '}>
        <li> Home </li>
        <li> Crypto Market </li>
        <li> Contact </li>
      </ul>
    </div>
  )
}
