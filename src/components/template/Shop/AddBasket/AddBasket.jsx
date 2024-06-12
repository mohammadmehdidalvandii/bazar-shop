import React from 'react';
import style from './AddBasket.module.css';

function AddBasket() {
  return (
    <section className={style.addBasket}>
        <div className="row">
            <div className="col-12">
                <ul className={style.addBasket_items}>
                    <li className={style.addBasket_item}>
                        <img src="/images/p2.jpg" alt="product" className={style.addBasket_img} />
                        <span className={style.addBasket_name}>یخچال و فریزر دوقلوی سامسونگ مدل RR20W-RZ20W</span>
                    </li>
                    <li className={style.addBasket_item}>
                        <span className={style.addBasket_price}>8,900,000 تومان</span>
                    </li>
                    <li className={style.addBasket_item}>
                        <button className={`${style.addBasket_btn} ${"btn_secondary "}`}>اضافه کردن به سبد خرید</button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default AddBasket