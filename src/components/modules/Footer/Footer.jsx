import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <section className={style.footer}>
      <div className="containers">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className={style.footer_images}>
              <img src="/images/fo1.png" alt="" className={style.footer_img} />
              <img src="/images/fo2.png" alt="" className={style.footer_img} />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <ul className={style.footer_items}>
              <li className={style.footer_item}>
                <h4 className={style.footer_item_title}>دسترسی سریع</h4>
              </li>
              <li className={style.footer_item}>
                <Link href="" className={style.footer_item_link}>
                  خانه
                </Link>
              </li>
              <li className={style.footer_item}>
                <Link href="" className={style.footer_item_link}>
                  درباره ما
                </Link>
              </li>
              <li className={style.footer_item}>
                <Link href="" className={style.footer_item_link}>
                  سبد خرید
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className={style.footer_content}>
              <img
                src="/images/logo.png"
                alt="logo footer"
                className={style.footer_logo}
              />
              <p className={style.footer_desc}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
        <div className="div row mt-5">
            <div className={style.footer_support}>پیشتیبانی 24 ساعته و هفت روز هفته</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
