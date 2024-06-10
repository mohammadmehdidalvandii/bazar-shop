import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Gallery from "@/components/template/Shop/Gallery/Gallery";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb text="جزئیات محصول" />
      <div className="containers">
        <div className="row mt-5">
            <div className="shop_Wrapper">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <Gallery/>
                </div>
                <div className="col-lg-6 col-md-3 col-sm-12"></div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
