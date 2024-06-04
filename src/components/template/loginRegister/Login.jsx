import React from 'react';
import style from './Login.module.css';

function Login() {
  return (
    <section className={style.login}>
        <div className={style.login_wrapper}>
            <h5 className="form_title">اگر اکانت دارید وارد شوید!</h5>
            <form action="#" className='form'>
                <input type="text" className='form_input' placeholder='ایمیل'/>
                <input type="text" className='form_input' placeholder='رمز عبور'/>
                <button className="form_submit">ورود</button>
            </form>
        </div>
    </section>
  )
}

export default Login