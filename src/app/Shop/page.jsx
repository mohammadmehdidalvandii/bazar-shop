import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import Brand from '@/components/template/Shop/Brand/Brand';
import Category from '@/components/template/Shop/Category/Category';
import Search from '@/components/template/Shop/Search/Search';
import React from 'react';

function page() {
  return (
   <>
    <Navbar/>
    <Breadcrumb text="محصولات "/>
    <div className="containers">
        <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-none">
                <Search/>
                <Brand/>
                <Category/>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">this is content</div>
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default page