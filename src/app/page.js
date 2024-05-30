import Navbar from '@/components/modules/Navbar/Navbar'
import Advertise from '@/components/template/home/Advertise/Advertise'
import Banner from '@/components/template/home/Banner/Banner'
import Discount from '@/components/template/home/Discount/Discount'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Advertise/>
    <Discount/>
    </>
  )
}

export default page