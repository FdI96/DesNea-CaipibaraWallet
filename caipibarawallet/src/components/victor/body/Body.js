import React from 'react'
// import './body.css'

// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducer/victorReducer";
import CapiLogo from '../capiLogo/CapiLogo'
import Card from '../card/Card'

export default function Body() {
  
  // const switchRenders = () => {
  //   switch (component) {
  //     case 'myHome':
  //       return <ShowRecords records={records}/>
  //     case 'crypto':
  //       return <RegisterRecords />
  //     case 'contact':
  //       return <DeleteRecords />
  //     default:
  //       return <ShowRecords records={records}/>
  //   }
  // }

  const counterOnClick = () => {
    dispatch(increment())
  }

  var balance = useSelector((state) => state.victor.myMoney)

  return (
    <div className={'fixed bg-slate-50 w-full h-full'}>
      <Card>
        <CapiLogo />
        <h2>Caipibara Wallet</h2>
      </Card>
    </div>
  )
}
