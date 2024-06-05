"use client"
import React, { useState } from 'react';
import style from './Menu.module.css';
import Login from './Login';
import Register from './Register';


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
                                    ثبت نام
                                  </button>
                        ):(
                            <button className={style.menu_button}
                            onClick={()=>handlerChangeMenu("Login")}
                        >
                            ورود
                        </button>
                        )} 
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                    {ChangeMenu === "Login" &&(
                        <Login/>
                    )}
                    {ChangeMenu === "Register" &&(
                        <Register/>
                    )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu