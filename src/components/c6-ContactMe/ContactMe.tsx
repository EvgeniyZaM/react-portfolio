import React from 'react'
import { Title } from '../../common/components/Title'
import { Fade } from 'react-awesome-reveal'
import s from './ContactMe.module.scss'

export const ContactMe = () => {
  return (
    <div id={'contactMe'} className={s.contactMeBlock}>
      <div className={s.container}>
        <Fade direction={'down'} triggerOnce>
          <Title title={'Contact me: '} />
        </Fade>
        <Fade direction={'up'} triggerOnce>
          <form className={s.form}>
            <input className={s.formInput} placeholder={'Your name'} />
            <input className={s.formInput} placeholder={'Your e-mail'} />
            <textarea className={s.messageTextarea} placeholder={'Your message'} />
            <button type={'submit'}>Contact Me</button>
          </form>
        </Fade>
      </div>
    </div>
  )
}