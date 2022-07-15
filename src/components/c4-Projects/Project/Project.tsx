import React from 'react'
import { ProjectDescription } from '../projectsDB'
import s from './Project.module.scss'

type TProjectProps = {
  project: ProjectDescription
}

export const Project: React.FC<TProjectProps> = ({ project }) => {
  return (
    <div className={s.projectItem}>
      <div className={s.projectImg} style={project.style}>
        <a className={s.btn} href={project.refs.project} target={'_blank'}>View project</a>
        <a className={s.btn} href={project.refs.code} target={'_blank'}>View source code</a>
      </div>
      <h3>{project.title}</h3>
      <div className={s.description}>
        <div className={s.aboutProject}>
          {project.description.about}
        </div>
        <b>Techs used:</b>
        <ul>
          {project.description.techsUsed.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
      </div>
    </div>
  )
}
