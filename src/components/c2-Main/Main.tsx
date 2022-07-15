import React from 'react'
import Tilt from 'react-parallax-tilt'
import ReactTypingEffect from 'react-typing-effect'
import { Fade } from 'react-awesome-reveal'
import s from './Main.module.scss'

export const Main = () => {
  return (
    <div id={'main'} className={s.mainBlock}>
      <div className={s.container}>
        <Fade direction={'left'} triggerOnce>
          <div className={s.aboutMe}>
            <span>Hi, there</span>
            <span>I am Evgeniy <span>Zamatevskiy</span></span>
            <span><ReactTypingEffect typingDelay={1500} eraseDelay={3000} text={'Front-end developer.'} /></span>
          </div>
        </Fade>
        <Fade direction={'right'} triggerOnce>
          <Tilt transitionSpeed={1600}>
            <div className={s.photo}>
              <div className={s.photoFrame} />
            </div>
          </Tilt>
        </Fade>
      </div>
    </div>
  )
}