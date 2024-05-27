import React from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { MdSearch , MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";


function Navbar() {
  return (
    <>
        <section className={style.navBar}>
            <div className="containers">
                <div className={style.navbar_wrapper}>
                    <div className={style.navbar_right}>
                        <Link href='/' className={style.navbar_logo}>
                            <img src="/images/logo.png" alt="logo-navbar" className={style.navbar_logo_img} />
                        </Link>
                        <div className={style.navbar_searchBar}>
                            <span className={style.navbar_searchBar_icon}><MdSearch/></span>
                            <input type="text" className={style.navbar_searchBar_input} placeholder='جستجو ...' />
                        </div>
                    </div>
                    <div className={style.navbar_left}>
                        <Link href='/LoginRegister' className={style.navbar_loginRegister}>
                            <span className={style.navbar_loginRegister_icon}><FaUser/></span>
                            <span className={style.navbar_loginRegister_text}>ورود</span>
                            /
                            <span className={style.navbar_loginRegister_text}>عضویت</span>
                        </Link>
                        <Link href='/' className={style.navbar_basket}>
                            <span className={style.navbar_basket_number}>0</span>
                            <span className={style.navbar_basket_icon}><MdShoppingCart/></span>
                        </Link>
                    </div>
                </div>
                <div className={style.navbar_menu}>
                    <div className={style.navbar_category}>
                        <span className={style.navbar_category_title}>دسته بندی محصولات</span>
                        <ul className={style.navbar_category_items}>
                            <li className={style.navbar_category_item}>
                                <Link href='/' className={style.navbar_category_link}>خانه و آشپزخانه</Link>
                            </li>
                            <li className={style.navbar_category_item}>
                                <Link href='/' className={style.navbar_category_link}>لوازم برقی خانگی</Link>
                            </li>
                            <li className={style.navbar_category_item}>
                                <Link href='/' className={style.navbar_category_link}>مد و پوشاک</Link>
                            </li>
                        </ul>
                    </div>
                    |
                    <ul className={style.navbar_items}>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>خانه</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>درباره ما</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar