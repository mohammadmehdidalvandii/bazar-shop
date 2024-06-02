import React from 'react';
import style from './Latest.module.css';
import Link from 'next/link';
import ProductCard from '@/components/modules/ProductCard/ProductCard';

function Latest() {
  return (
    <section className={style.latest}>
        <div className="containers">
            <div className={style.latest_wrapper}>
                <div className={style.latest_right}>
                    <div className={style.latest_right_wrapper}>
                        <img src="/images/box.png" alt="image box latest" className={style.latest_right_img} />
                        <Link href='/' className={style.latest_showMore}>مشاهده بیشتر</Link>
                    </div>
                </div>
                <div className={style.latest_left}>
                    <div className={style.latest_left_wrapper}>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Latest