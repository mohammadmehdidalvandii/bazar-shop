import React from 'react';
import style from './Info.module.css';
import { FaCheckCircle } from "react-icons/fa";


function Info() {
  return (
    <section className={style.info}>
      <div className={style.info_content}>
        <h3 className={style.info_bigTitle}>یخچال و فریزر دوقلوی سامسونگ مدل RR20W-RZ20W</h3>
        <h6 className={style.info_smallTitle}>Samsung RR20W-RZ20W twin refrigerator</h6>
      </div>
      <div className={style.info_category}>
        <span className={style.info_category_title}>دسته بندی :</span>
        <span className={style.info_category_text}>یخچال و فریز </span>
        <span className={style.info_category_text}>یخچال و فریز </span>
        <span className={style.info_category_text}>یخچال و فریز </span>
      </div>
      <div className={style.info_brand}>
        <span className={style.info_title}>برند :</span>
        <span className={style.info_text}>Sumsung</span>
      </div>
      <div className={style.info_color}>
        <span className={style.info_title}>برند :</span>
        <span className={style.info_text}>زرده</span>
      </div>
      <ul className={style.info_items}>
        <li className={style.info_item}>
            <h4 className={style.info_item_title}>ویژگی کالا</h4>
        </li>
        <li className={style.info_item}>
          <span className={style.info_item_icon}>
            <FaCheckCircle/>
          </span>
          <span className={style.info_item_text}>قفل کودک: بله</span>
        </li>
        <li className={style.info_item}>
          <span className={style.info_item_icon}>
            <FaCheckCircle/>
          </span>
          <span className={style.info_item_text}>اخطار باز ماندن درب: بله</span>
        </li>
        <li className={style.info_item}>
          <span className={style.info_item_icon}>
            <FaCheckCircle/>
          </span>
          <span className={style.info_item_text}>آبسردکن: بله</span>
        </li>
      </ul>
    </section>
  )
}

export default Info