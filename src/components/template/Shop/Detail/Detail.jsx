import React from 'react';
import style from './Detail.module.css';
import { SlCalender } from "react-icons/sl";
import { FaBarcode } from "react-icons/fa";
import { IoColorPaletteSharp , IoGrid , IoShieldCheckmark} from "react-icons/io5";
import { MdWifiFind ,  MdOutlinePriceCheck } from "react-icons/md";



function Detail() {
  return (
    <section className={style.detail}>
        <ul className={style.detail_items}>
            <li className={style.detail_item}>
                <span className={style.detail_item_icon}><SlCalender/></span>
                <span className={style.detail_item_text}>01 / شهریور / 1400</span>
            </li>
            <li className={style.detail_item}>
                <span className={style.detail_item_icon}><FaBarcode/></span>
                <span className={style.detail_item_text}>dkg-2035</span>
            </li>
            <li className={style.detail_item}>
                <span className={style.detail_item_icon}><IoColorPaletteSharp/></span>
                <span className={style.detail_item_text}>زرد</span>
            </li>
            <li className={style.detail_item}>
                <span className={style.detail_item_icon}><IoGrid/></span>
                <span className={style.detail_item_text}>نامشخص</span>
            </li>
            <li className={style.detail_item}>
                <span className={style.detail_item_icon}><IoShieldCheckmark/></span>
                <span className={style.detail_item_text}>ارانتی ۱۲۳ ماهه سام سرویس (موتورهای inventor)</span>
            </li>
            <li className={style.detail_item}>
                <span className={style.detail_item_icon}><MdWifiFind/></span>
                <span className={style.detail_item_text}>موجود در انبار
                </span>
            </li>
            <li className={style.detail_item}>
                <span className={style.detail_item_icon}><MdOutlinePriceCheck/></span>
                <span className={style.detail_item_text}>8,100,000
                تومان</span>
            </li>
            <li className={style.detail_item}>
                <button className={`${style.detail_item_btn} ${"btn_secondary"}`}>افزودن به سبد خرید</button>
            </li>
        </ul>
    </section>
  )
}

export default Detail