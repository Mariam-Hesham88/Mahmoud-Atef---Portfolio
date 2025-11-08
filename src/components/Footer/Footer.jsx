import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
  <section className='py-5 bg-primary text-white text-center'>
    <h3 className={style.font}>Developed By: Mariam Hesham Ramadan</h3>
    <h4 className={style.font}>Designed By: <a href="https://www.linkedin.com/in/doha-taher-5a9b3231b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='underline'>Doha Taher</a></h4>
  </section>
  </>
}
