import React from 'react';
import style from './Search.module.css';

function Search() {
  return (
    <section className={`${style.search} ${"shop_Wrapper"}`}>
        <h5 className="shop_title">جستجو محصول</h5>
        <input type="text" className={style.search_input} placeholder='جستجو ...' />
    </section>
  )
}

export default Search