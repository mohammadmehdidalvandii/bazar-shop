import React from 'react';
import style from './Breadcrumb.module.css';
import Link from 'next/link';

function Breadcrumb({text}) {
  return (
    <section className={style.breadcrumb}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.breadcrumb_wrapper}>
                            <Link href='/' className={style.Breadcrumb_link}>خانه</Link>
                            /
                            <span className={style.breadcrumb_text}>{text}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Breadcrumb