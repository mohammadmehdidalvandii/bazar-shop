import React from 'react';
import style from './Related.module.css';
import Title from '@/components/modules/Title/Title';
import Card from '@/components/modules/Card/Card';

function Related() {
  return (
    <section className={style.related}>
        <div className="row">
            <div className="col-12">
                <Title title="محصولات مرتبط"/>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Card/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Card/>
            </div>
        </div>
    </section>
  )
}

export default Related