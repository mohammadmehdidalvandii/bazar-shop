import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Gallery from "@/components/template/Shop/Gallery/Gallery";
import Info from "@/components/template/Shop/Info/Info";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb text="جزئیات محصول" />
      <div className="containers">
        <div className="shop_Wrapper mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Gallery />
            </div>
            <div className="col-lg-6 col-md-3 col-sm-12">
              <Info />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
