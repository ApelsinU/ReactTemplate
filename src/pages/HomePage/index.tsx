import React from 'react'

import './home-page.scss'
import Logo from '@Assets/icons/logo.png'

export const HomePage = () => {
  return (
    <div className="home-page  ">
      <div className="mask">
        <div className="hello-block">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}
