import React from 'react';
import style from './Advertise.module.css';
import Link from 'next/link';

function Advertise() {
  return (
    <section className={style.advertise}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link href='/' className={style.advertise_link}>
                        <img src="/images/adv-1.jpg" alt="advertise-image" className={style.advertise_link_img} />
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link href='/' className={style.advertise_link}>
                        <img src="/images/adv-2.jpg" alt="advertise-image" className={style.advertise_link_img} />
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link href='/' className={style.advertise_link}>
                        <img src="/images/adv-3.jpg" alt="advertise-image" className={style.advertise_link_img} />
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link href='/' className={style.advertise_link}>
                        <img src="/images/adv-4.jpg" alt="advertise-image" className={style.advertise_link_img} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advertise