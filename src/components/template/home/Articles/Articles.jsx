import React from 'react';
import style from './Articles.module.css';
import Title from '@/components/modules/Title/Title';
import Link from 'next/link';
import ArticleCard from '@/components/modules/ArticleCard/ArticleCard';

function Articles() {
  return (
    <section className={style.articles}>
        <div className="containers">
            <div className={style.articles_wrapper}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Title title="جدیدترین مقالات"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Link href='' className={style.articles_link}>مشاهده بیشتر</Link>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                       <ArticleCard/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                       <ArticleCard/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                       <ArticleCard/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articles