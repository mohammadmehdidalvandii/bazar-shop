import React from 'react';
import style from './Discount.module.css';
import Link from 'next/link';

function Discount() {
  return (
    <section className={style.discount}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link href='/' className={style.discount_link}>
                        <img src="/images/dis-1.jpg" alt="discount-image" className={style.discount_link_img} />
                    </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link href='/' className={style.discount_link}>
                        <img src="/images/dis-2.jpg" alt="discount-image" className={style.discount_link_img} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount