import React from 'react'
import './body.css'

import CapiLogo from '../capiLogo/CapiLogo'
import Card from '../card/Card'

export default function Body() {
  return (
    <div id={'body'}>
      <Card>
        <CapiLogo />
        <h2>Caipibara Wallet</h2>
      </Card>
    </div>
  )
}
