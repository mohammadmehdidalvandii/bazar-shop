import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb text="جزئیات محصول" />
      <div className="containers">
        <div className="row mt-5">
          <div className="col-12">
            <div className="shop_Wrapper">this is shop wrapper</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
