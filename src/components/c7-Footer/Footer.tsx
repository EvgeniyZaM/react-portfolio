import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { Fade } from 'react-awesome-reveal'
import { faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Title } from '../../common/components/Title'
import s from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className={s.footerBlock}>
			<Fade direction={'up'} triggerOnce>
				<div className={s.container}>
					<Title title={'Evgeniy Zamatevskiy'} />
					<div className={s.contacts}>
						<a href="">
							<FontAwesomeIcon icon={faGithub} className={s.contactsItem} />
						</a>
						<a href="">
							<FontAwesomeIcon icon={faTelegram} className={s.contactsItem} />
						</a>
						<a href=''>
							<FontAwesomeIcon icon={faLinkedinIn} className={s.contactsItem} />
						</a>
						<a href="">
							<FontAwesomeIcon icon={faMailBulk} className={s.contactsItem} />
						</a>
						<a href="">
							<FontAwesomeIcon icon={faPhone} className={s.contactsItem} />
						</a>
					</div>
					<span className={s.rights}>@2022 ZaM. All rights reserved</span>
				</div>
			</Fade>
		</div>
	)
}