import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-scroll'
import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={s.navbarBlock}>
      <Fade direction={'right'} triggerOnce>
        <div className={s.content}>
          <Link to={'main'} smooth duration={600} spy activeClass={s.active}>Main</Link>
          <Link to={'skills'} smooth duration={600} spy activeClass={s.active} offset={0}>Skills</Link>
          <Link to={'projects'} smooth duration={600} spy activeClass={s.active} offset={0}>Projects</Link>
          <Link to={'contactMe'} smooth duration={600} spy activeClass={s.active} offset={-70}>Contact me</Link>
        </div>
      </Fade>
    </div>
  )
}