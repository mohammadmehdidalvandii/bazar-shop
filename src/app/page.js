import Navbar from '@/components/modules/Navbar/Navbar'
import Advertise from '@/components/template/home/Advertise/Advertise'
import Banner from '@/components/template/home/Banner/Banner'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Advertise/>
    </>
  )
}

export default page