import React from 'react';
import style from './Banner.module.css';
import Link from 'next/link';

function Banner() {
  return (
    <section className={style.banner}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className={style.banner_wrapper}>
                        <Link href='/' className={style.banner_logo}>
                            <img src="/images/banner1.jpg" alt="banner-logo" className={style.banner_logo_img} />
                        </Link>
                        <Link href='/' className={style.banner_logo}>
                            <img src="/images/banner2.jpg" alt="banner-logo" className={style.banner_logo_img} />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 d-none d-lg-block">
                    <Link href='/' className={style.banner_logo}>
                        <img src="/images/banner3.jpg" alt="banner-logo" className={style.banner_logo_img} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner