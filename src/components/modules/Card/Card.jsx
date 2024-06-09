import React from "react";
import style from './Card.module.css';
import Link from "next/link";

function Card() {
  return (
    <Link href="/" className={style.card}>
      <img src="/images/p2.jpg" alt="product-img" className={style.card_img} />
      <div className={style.card_content}>
        <h6 className={style.card_title}>یخچال و فریزر دوقلو</h6>
        <span className={style.card_price}>تومان 4,488,000</span>
      </div>
    </Link>
  );
}

export default Card;
