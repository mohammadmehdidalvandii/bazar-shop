import Link from 'next/link'
import React from 'react'
import style from './ArticleCard.module.css';
function ArticleCard() {
  return (
    <Link href='' className={style.articleCard}>
    <img src="/images/ar.jpeg" alt="article-image" className={style.articleCard_img} />
    <div className={style.articleCard_content}>
        <h6 className={style.articleCard_title}>ایلان ماسک</h6>
        <div className={style.articleCard_creator_date}>
            <span className={style.articleCard_creator}>نویسنده : محمدی</span>

            <span className={style.articleCard_date}>12/مهر/1402</span>
        </div>
    </div>
</Link>
  )
}

export default ArticleCard