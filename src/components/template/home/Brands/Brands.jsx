import React from 'react'
import style from './Brands.module.css';
import Title from '@/components/modules/Title/Title';

function Brands() {
  return (
    <section className={style.brands}>
        <div className="containers">
           <div className={style.brands_wrapper}>
           <div className="row">
                <div className="col-12">
                   <Title title="برند های ویژه"/>
                </div>  
            </div>
            <div className="row mt-5">
               <div className={style.brands_items}>
               <div className={style.brands_item}>
                    <img src="/images/b1.jpg" alt="brands image" className={style.brands_item_img} />
                    <span className={style.brands_item_text}>Nike</span>
                </div>
               <div className={style.brands_item}>
                    <img src="/images/b2.jpg" alt="brands image" className={style.brands_item_img} />
                    <span className={style.brands_item_text}>Adidas</span>
                </div>
               <div className={style.brands_item}>
                    <img src="/images/b3.png" alt="brands image" className={style.brands_item_img} />
                    <span className={style.brands_item_text}>Apple</span>
                </div>
               <div className={style.brands_item}>
                    <img src="/images/b4.png" alt="brands image" className={style.brands_item_img} />
                    <span className={style.brands_item_text}>Sumsung</span>
                </div>
               </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Brands