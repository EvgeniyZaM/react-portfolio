import React from 'react'
import { Project } from './Project/Project'
import { Title } from '../../common/components/Title'
import { Fade } from 'react-awesome-reveal'
import { projects } from './projectsDB'
import s from './Projects.module.scss'

export const Projects = () => {

  const projectsList = projects.map((p, i) => <Project key={i} project={p} />)

  return (
    <div id={'projects'} className={s.projectsBlock}>
      <div className={s.container}>
        <Fade direction={'down'} triggerOnce>
          <Title title={'Projects'} />
        </Fade>
        <Fade direction={'up'} triggerOnce className={s.itemsFade}>
          <div className={s.itemFade}>
            {projectsList}
          </div>
        </Fade>
      </div>
    </div>
  )
}