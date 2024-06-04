import React from 'react';
import style from './Register.module.css';

function Register() {
  return (
    <section className={style.register}>
        <div className={style.register_wrapper}>
            <h5 className="title_from">اگر اکانت  ندارید ثبت نام کنید ⬇️</h5>
            <form action="#" className='form'>
                <input type="text" className='form_input' placeholder='ایمیل'/>
                <input type="text" className='form_input' placeholder=' نام و نام خانوادگی'/>
                <input type="text" className='form_input' placeholder='رمز عبور'/>
                <button className="form_submit">ثبت نام</button>
            </form>
        </div>
    </section>
  )
}

export default Register