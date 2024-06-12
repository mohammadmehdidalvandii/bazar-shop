"use client"
import React, { useState } from 'react';
import style from './Tab.module.css';
import { FaInfoCircle , FaArrowAltCircleUp} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Details from '../Details/Details';
import Specs from '../Specs/Specs';


function Tab() {
    const [tabMenu , setTabMenu] = useState("details");
    const handlerTabMenu = (MenuID)=>{
        setTabMenu(MenuID)
    }
  return (
    <section className={style.tab}>
        <div className="row">
            <div className="col-12">
                <div className={style.tab_wrapper}>
                    <button className={tabMenu === "details" ? style.tab_btnActive :style.tab_btn} onClick={()=>handlerTabMenu("details")}>
                        <span className={style.tab_btn_icon}><FaInfoCircle/></span>
                        <span className={style.tab_btn_text}>جزئیات</span>
                    </button>
                    <button className={tabMenu === "info" ? style.tab_btnActive :style.tab_btn} onClick={()=>handlerTabMenu("info")}>
                        <span className={style.tab_btn_icon}><FaArrowAltCircleUp/></span>
                        <span className={style.tab_btn_text}>مشخصات</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                {tabMenu === "details" && (<Details/>)}
                {tabMenu === "info" && (<Specs/>)}
            </div>
        </div>
    </section>
  )
}

export default Tab