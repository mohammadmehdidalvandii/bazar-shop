import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Advertise from '@/components/template/home/Advertise/Advertise'
import Articles from '@/components/template/home/Articles/Articles'
import Banner from '@/components/template/home/Banner/Banner'
import Brands from '@/components/template/home/Brands/Brands'
import Discount from '@/components/template/home/Discount/Discount'
import Latest from '@/components/template/home/Latest/Latest'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Advertise/>
    <Discount/>
    <Latest/>
    <Advertise/>
    <Latest/>
    <Discount/>
    <Brands/>
    <Articles/>
    <Footer/>
    </>
  )
}

export default page