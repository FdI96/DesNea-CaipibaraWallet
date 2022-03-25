import React from 'react'
import Layout from '../layout/Layout'
import Body from '../body/Body'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log("se renderiza el componente Home (Victor)");
  }, [])
  return (
    <Layout>
     <Body/>
    </Layout>
  )
}
