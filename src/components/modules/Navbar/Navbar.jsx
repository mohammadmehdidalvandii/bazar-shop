"use client";
import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import Link from "next/link";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { FaUser, FaBars, FaTimesCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  const [navMenu, setNavMenu] = useState(false);
  const [navbarFixedTop, setNavbarFixedTop] = useState(false);
  const [routeName, setRouteName] = useState("/");

  // handler Change Menu
  useEffect(() => {
    const path_name = pathName;
    setRouteName(path_name);
  }, [pathName]);

  // handler navbar Fixed To Top;
  useEffect(() => {
    const fixedNavbarToTop = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 110) {
        setNavbarFixedTop(true);
      } else {
        setNavbarFixedTop(false);
      }
    };
    window.addEventListener("scroll", fixedNavbarToTop);
    return () => window.removeEventListener("scroll", fixedNavbarToTop);
  }, []);

  const handlerNavbarMenu = () => {
    setNavMenu(!navMenu);
  };
  const handlerNavbarClose = () => {
    setNavMenu(false);
  };
  return (
    <>
      <section
        className={`${
          navbarFixedTop ? style.nav_fixed : style.navBar
        } ${"d-lg-block d-none"}`}
      >
        <div className="containers">
          <div className={style.navbar_wrapper}>
            <div className={style.navbar_right}>
              <Link href="/" className={style.navbar_logo}>
                <img
                  src="/images/logo.png"
                  alt="logo-navbar"
                  className={style.navbar_logo_img}
                />
              </Link>
              <div className={style.navbar_searchBar}>
                <span className={style.navbar_searchBar_icon}>
                  <MdSearch />
                </span>
                <input
                  type="text"
                  className={style.navbar_searchBar_input}
                  placeholder="جستجو ..."
                />
              </div>
            </div>
            <div className={style.navbar_left}>
              <Link
                href="/LoginRegister"
                className={style.navbar_loginRegister}
              >
                <span className={style.navbar_loginRegister_icon}>
                  <FaUser />
                </span>
                <span className={style.navbar_loginRegister_text}>ورود</span>/
                <span className={style.navbar_loginRegister_text}>عضویت</span>
              </Link>
              <Link href="/Shopping" className={style.navbar_basket}>
                <span className={style.navbar_basket_number}>0</span>
                <span className={style.navbar_basket_icon}>
                  <MdShoppingCart />
                </span>
              </Link>
            </div>
          </div>
          <div className={style.navbar_menu}>
            <div className={style.navbar_category}>
              <span className={style.navbar_category_title}>
                دسته بندی محصولات
              </span>
              <ul className={style.navbar_category_items}>
                <li className={style.navbar_category_item}>
                  <Link href="/" className={style.navbar_category_link}>
                    خانه و آشپزخانه
                  </Link>
                </li>
                <li className={style.navbar_category_item}>
                  <Link href="/" className={style.navbar_category_link}>
                    لوازم برقی خانگی
                  </Link>
                </li>
                <li className={style.navbar_category_item}>
                  <Link href="/" className={style.navbar_category_link}>
                    مد و پوشاک
                  </Link>
                </li>
              </ul>
            </div>
            |
            <ul className={style.navbar_items}>
              <li className={style.navbar_item}>
                <Link
                  href="/"
                  className={
                    routeName === "/"
                      ? style.navbarActive
                      : style.navbar_item_link
                  }
                >
                  خانه
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link
                  href="/Shop"
                  className={
                    routeName === "/Shop"
                      ? style.navbarActive
                      : style.navbar_item_link
                  }
                >
                  محصولات
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link
                  href="/About"
                  className={
                    routeName === "/About"
                      ? style.navbarActive
                      : style.navbar_item_link
                  }
                >
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className={`${
          navbarFixedTop ? style.nav_fixed : style.navbarRes
        } ${"d-block d-lg-none"}`}
      >
        <div className="containers">
          <div className={style.navbarRes_wrapper}>
            <Link href="/" className={style.navbarRes_logo}>
              <img
                src="/images/logo.png"
                alt="logo-images"
                className={style.navbarRes_logo_img}
              />
            </Link>
            {/* navbar left section navbar */}
            <div className={style.navbar_left}>
              <Link
                href="/LoginRegister"
                className={style.navbar_loginRegister}
              >
                <span className={style.navbar_loginRegister_icon}>
                  <FaUser />
                </span>
                <span className={style.navbar_loginRegister_text}>ورود</span>/
                <span className={style.navbar_loginRegister_text}>عضویت</span>
              </Link>
              <Link href="/Shopping" className={style.navbar_basket}>
                <span className={style.navbar_basket_number}>0</span>
                <span className={style.navbar_basket_icon}>
                  <MdShoppingCart />
                </span>
              </Link>
            </div>
          </div>

          <div className={style.navbarRes_menu}>
            <span
              className={style.navbarRes_menu_btn}
              onClick={handlerNavbarMenu}
            >
              <FaBars />
            </span>
            {navMenu && (
              <div
                className={
                  navMenu ? style.activeMenu : style.navbarRes_menu_items
                }
              >
                <span
                  className={style.navbarRes_item_btn}
                  onClick={handlerNavbarClose}
                >
                  <FaTimesCircle />
                </span>
                <ul className={style.navbarRes_items}>
                  <li className={style.navbarRes_item}>
                    <Link
                      href="/"
                      className={
                        routeName === "/"
                          ? style.navbarActive
                          : style.navbarRes_item_link
                      }
                    >
                      خانه
                    </Link>
                  </li>
                  <li className={style.navbar_item}>
                    <Link
                      href="/Shop"
                      className={
                        routeName === "/Shop"
                          ? style.navbarActive
                          : style.navbar_item_link
                      }
                    >
                      محصولات
                    </Link>
                  </li>
                  <li className={style.navbarRes_item}>
                    <Link
                      href="/About"
                      className={
                        routeName === "/About"
                          ? style.navbarActive
                          : style.navbarRes_item_link
                      }
                    >
                      درباره ما
                    </Link>
                  </li>
                </ul>
                <ul className={style.navbarRes_items}>
                  <li className={style.navbarRes_items}>
                    <h6 className={style.navbarRes_item_title}>
                      دسته بندی محصولات
                    </h6>
                  </li>
                  <li className={style.navbarRes_item}>
                    <Link href="/" className={style.navbarRes_item_link}>
                      خانه و آشپزخانه
                    </Link>
                  </li>
                  <li className={style.navbarRes_item}>
                    <Link href="/" className={style.navbarRes_item_link}>
                      لوازم برقی خانگی
                    </Link>
                  </li>
                  <li className={style.navbarRes_item}>
                    <Link href="/" className={style.navbarRes_item_link}>
                      مد وپوشاک
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
