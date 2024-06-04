"use client"
import React, { useState } from 'react';
import style from './Menu.module.css';


function Menu() {
    const [ChangeMenu , setChangeMenu] = useState('Login');

    const handlerChangeMenu = (MenuID)=>{
        setChangeMenu(MenuID);
    }
  return (
    <section className={style.menu}>
        <div className="containers">
            <div className={style.menu_wrapper}>
                <div className="row">
                    <div className="col-12">
                        <div>
                        {ChangeMenu === "Login" ?(
                                      <button className={style.menu_button}
                                      onClick={()=>handlerChangeMenu("Register")}
                                  >
                                      ورود
                                  </button>
                        ):(
                            <button className={style.menu_button}
                            onClick={()=>handlerChangeMenu("Login")}
                        >
                            ثبت نام
                        </button>
                        )} 
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                    {ChangeMenu === "Login" &&(
                        <h1>this is login</h1>
                    )}
                    {ChangeMenu === "Register" &&(
                        <h1>this is Register</h1>
                    )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu