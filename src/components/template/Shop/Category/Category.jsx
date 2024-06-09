import React from 'react';
import style from './Category.module.css';

function Category() {
  return (
    <section className={`${style.category} ${"shop_Wrapper"}`}>
        <h5 className="shop_title">دسته بندی</h5>
        <div className={style.category_wrapper}>
            <div className={style.category_box}>
                <input type="checkbox" className={style.category_box_input}/>
                <span className={style.category_box_text}>لباسشویی</span>
            </div>
            <div className={style.category_box}>
                <input type="checkbox" className={style.category_box_input}/>
                <span className={style.category_box_text}>ظرفشویی</span>
            </div>
            <div className={style.category_box}>
                <input type="checkbox" className={style.category_box_input}/>
                <span className={style.category_box_text}>یخچال و فیریزر</span>
            </div>
            <div className={style.category_box}>
                <input type="checkbox" className={style.category_box_input}/>
                <span className={style.category_box_text}>متفرقه</span>
            </div>
        </div>
    </section>
  )
}

export default Category