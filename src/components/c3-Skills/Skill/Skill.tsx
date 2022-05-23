import React from 'react'
import { SkillDescription } from '../skillsDB'
import s from './Skill.module.scss'

type SkillPropsType = {
  skill: SkillDescription
}

export const Skill: React.FC<SkillPropsType> = ({ skill }) => {
  return (
    <div className={s.skillBlock}>
      <div className={s.titleSection}>
        <div className={s.logoContainer}>
          <img className={s.logo} src={skill.icon} alt={'skill logo'} />
        </div>
        <h3>{skill.title}</h3>
      </div>
      <span>
        {skill.description}
      </span>
    </div>
  )
}