import React from 'react';
import style from './Specs.module.css';

function Specs() {
  return (
    <section className={style.specs}>
        <div className="row">
            <div className="col-12">
                <h5 className="tab_title">مشخصات فنی</h5>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12">
                <ul className={style.specs_items}>
                    <li className={style.specs_item}>
                        <span className={style.specs_item_title}>آبسرد کن</span>
                        <span className={style.specs_item_text}>بله</span>
                    </li>
                    <li className={style.specs_item}>
                        <span className={style.specs_item_title}>آبسرد کن</span>
                        <span className={style.specs_item_text}>بله</span>
                    </li>
                    <li className={style.specs_item}>
                        <span className={style.specs_item_title}>آبسرد کن</span>
                        <span className={style.specs_item_text}>بله</span>
                    </li>
                    <li className={style.specs_item}>
                        <span className={style.specs_item_title}>آبسرد کن</span>
                        <span className={style.specs_item_text}>بله</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Specs