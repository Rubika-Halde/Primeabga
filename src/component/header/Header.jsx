import React, { useState } from 'react'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { BsHandbag } from 'react-icons/bs'
import FormLogin from '../formlogin/FormLogin'

const Header = () => {
  const [profile, setProfile] = useState(false)
  console.log(profile)
  const handleOnProfileClick = () => {
    setProfile(true)
  }

  return (
    <div className="Header">
      <div className="header-left">
        <img
          className="header-left-img"
          src="https://www.primeabgb.com/wp-content/uploads/2023/03/logo.png"
          alt=""
        />
      </div>
      <div className="header-middle">
        <input
          placeholder="search for products..."
          type="text"
          className="input"
        />
        <button className="button">search</button>
      </div>
      <div className="header-right">
        <a
          href="#"
          className="MdOutlinePersonOutline"
          onClick={handleOnProfileClick}
        >
          <MdOutlinePersonOutline />
        </a>
        <div className="profile">
          {profile ? <FormLogin setProfile={setProfile} /> : ''}
        </div>
        <a href="#" className="BsFillHandbagFill">
          <BsHandbag />
        </a>
        <div className="header-right-wrap">
          <a href="#" className="cart">
            cart
          </a>
          <a href="#" className="money">
            $0
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
