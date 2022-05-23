import React from 'react'
import { Skill } from './Skill/Skill'
import { Title } from '../../common/components/Title'
import { Fade } from 'react-awesome-reveal'
import { skillsDB } from './skillsDB'
import s from './Skills.module.scss'

export const Skills = () => {

  const skillsList = skillsDB.map((s, i) => <Skill key={i} skill={s} />)

  return (
    <div id={'skills'} className={s.skillsBlock}>
      <div className={s.container}>
        <Fade direction={'down'} triggerOnce>
          <Title title={'Skills'} />
        </Fade>
        <Fade direction={'up'} triggerOnce>
          <div className={s.skills}>
            {skillsList}
          </div>
        </Fade>
      </div>
    </div>
  )
}