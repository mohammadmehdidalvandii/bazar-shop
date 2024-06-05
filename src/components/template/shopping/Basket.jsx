import React from 'react';
import style from './Basket.module.css';
import Link from 'next/link';
import { MdOutlineShoppingCart } from "react-icons/md";


function Basket() {
  return (
    <section className={style.basket}>
        <div className="containers">
            <div className={style.basket_wrapper}>
                <div className="row">
                    <div className="col-12">
                        {/* <div className={style.basket_empty}>
                            <span className={style.basket_empty_icon}>
                              <MdOutlineShoppingCart/>
                            </span>
                            <h5 className={style.basket_empty_title}>سبد کالا خالی است  </h5>
                            <p className={style.basket_empty_desc}>می‌توانید برای مشاهده محصولات بیشتر به صفحه زیر بروید</p>
                            <Link href='/' className={style.basket_empty_link}>فروشگاه</Link>
                        </div> */}
                        <ul className={style.basket_items}>
                          <li className={style.basket_item}>
                            <img src="/images/p1.jpg" alt="product - images" className={style.basket_item_img} />
                          </li>
                          <li className={style.basket_item}>
                            <span className={style.basket_item_title}>محصول</span>
                            <span className={style.basket_item_name}>زنجیر طلا</span>
                          </li>
                          <li className={style.basket_item}>
                              <span className={style.basket_item_title}>قیمت</span>
                              <span className={style.basket_item_price}>19,000,000 تومان</span>
                          </li>
                          <li className={style.basket_item}>
                              <span className={style.basket_item_title}>تعداد</span>
                              <span className={style.basket_item_count}>1</span>
                          </li>
                          <li className={style.basket_item}>
                                <button className="btn_secondary">حذف</button>
                          </li>
                        </ul>
                        <ul className={style.basket_items}>
                          <li className={style.basket_item}>
                            <img src="/images/p1.jpg" alt="product - images" className={style.basket_item_img} />
                          </li>
                          <li className={style.basket_item}>
                            <span className={style.basket_item_title}>محصول</span>
                            <span className={style.basket_item_name}>زنجیر طلا</span>
                          </li>
                          <li className={style.basket_item}>
                              <span className={style.basket_item_title}>قیمت</span>
                              <span className={style.basket_item_price}>19,000,000 تومان</span>
                          </li>
                          <li className={style.basket_item}>
                              <span className={style.basket_item_title}>تعداد</span>
                              <span className={style.basket_item_count}>1</span>
                          </li>
                          <li className={style.basket_item}>
                                <button className="btn_secondary">حذف</button>
                          </li>
                        </ul>

                    </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                  <div className={style.basket_bill}>
                      <ul className={style.bill_items}>
                          <li className={style.bill_item}>
                              <span className={style.bill_item_title}>تعداد محصولات</span>
                              <span className={style.bill_item_text}>2</span>
                          </li>
                          <li className={style.bill_item}>
                              <span className={style.bill_item_title}>قیمت کل</span>
                              <span className={style.bill_item_text}>21,000,000 تومان</span>
                          </li>
                          <li className={style.bill_item}>
                              <span className={style.bill_item_title}> قابل پرداخت</span>
                              <span className={style.bill_item_text}>21,000,000 تومان</span>
                          </li>
                          <Link href='' className={`${style.bill_item_pay} ${'btn_secondary'}`}>پرداخت</Link>
                      </ul>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket