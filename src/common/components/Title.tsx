import React, { FC } from 'react'
import s from './Title.module.scss'

type TitleProps = {
  title: string
}

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
    </div>
  )
}