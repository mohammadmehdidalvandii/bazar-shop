import React from 'react';
import style from './Brand.module.css';

function Brand() {
  return (
    <section className={`${style.brand} ${"shop_Wrapper"}`}>
        <h5 className="shop_title">برند ها</h5>
        <div className={style.brand_wrapper}>
            <div className={style.brand_box}>
                <input type="checkbox" className={style.brand_box_input} />
                <span className={style.brand_box_text}>متفرقه</span>
            </div>
            <div className={style.brand_box}>
                <input type="checkbox" className={style.brand_box_input} />
                <span className={style.brand_box_text}>اچ پی</span>
            </div>
            <div className={style.brand_box}>
                <input type="checkbox" className={style.brand_box_input} />
                <span className={style.brand_box_text}>سامسونگ</span>
            </div>
            <div className={style.brand_box}>
                <input type="checkbox" className={style.brand_box_input} />
                <span className={style.brand_box_text}>نایکی</span>
            </div>
            <div className={style.brand_box}>
                <input type="checkbox" className={style.brand_box_input} />
                <span className={style.brand_box_text}>ال جی</span>
            </div>
            <div className={style.brand_box}>
                <input type="checkbox" className={style.brand_box_input} />
                <span className={style.brand_box_text}>سونی</span>
            </div>
        </div>
    </section>    
  )
}

export default Brand