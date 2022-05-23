import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Title } from '../../common/components/Title'
import s from './Remote.module.scss'

export const Remote = () => {
  return (
    <div className={s.remoteBlock}>
      <Fade direction={'up'} triggerOnce>
        <div className={s.container}>
          <Title title={'Remote work is acceptable for me.'} />
          <a className={s.link} href="#contactMe">Hire Me</a>
        </div>
      </Fade>
    </div>
  )
}