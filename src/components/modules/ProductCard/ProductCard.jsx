import React from "react";
import style from "./ProductCard.module.css";
import Link from "next/link";

function ProductCard() {
  return (
    <div className={style.productCard}>
      <img
        src="/images/p1.jpg"
        alt="product image"
        className={style.productCard_image}
      />
      <div className={style.productCard_content}>
        <h6 className={style.productCard_title}>
          زنجیر طلای 18 عیار زنانه ماهک
        </h6>
        <div className={style.productCard_prices}>
          <span className={style.productCard_price_number}>9,482,000</span>
          <span className={style.productCard_price_text}>تومان</span>
        </div>
        <Link
          href="/"
          className={`${style.productCard_showProduct} ${"btn_primary"}`}
        >
          مشاهده سریع
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
