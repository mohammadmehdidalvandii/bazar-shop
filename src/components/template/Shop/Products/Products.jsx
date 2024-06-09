import React from 'react';
import style from './Products.module.css';
import Card from '@/components/modules/Card/Card';

function Products() {
  return (
    <section className={`${style.products} ${"shop_Wrapper"}`}>
        <div className="row">
            <h7 className={style.products_title}>لوازم آشپزخانه</h7>
        </div>
        <div className="row mt-3">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Card/>
            </div>
        </div>
    </section>
  )
}

export default Products