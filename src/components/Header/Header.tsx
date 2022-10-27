import { IonIcon } from '@ionic/react'
import { menu, notifications } from 'ionicons/icons'
import React from 'react'


import './Header.css'

const Header = () => {
  return (
    <section className='header ion-padding-vertical'>
    <IonIcon icon={ menu } size='large' />
    <IonIcon icon={ notifications } color='danger' size='small' />
    </section>
  )
}

export default Header