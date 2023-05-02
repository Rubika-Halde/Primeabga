import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
const Peripherals = () => {
  return (
    <div className="Peripherals">
      <div className="peripheral-one">
        <div className="peripheral-one-left">
          <p className="PROCESSOR">
            <BsArrowRightCircle /> PROCESSOR
          </p>
          <ul className="ul">
            <li className="li">All Brands</li>
            <li className="li">AMD</li>
            <li className="li">intel</li>
          </ul>
        </div>
        <div className="peripheral-one-left">
          <p className="PROCESSOR">
            <BsArrowRightCircle /> MOTHERBOARD
          </p>
          <ul className="ul">
            <li className="li">All Brands</li>
            <li className="li">Asrock</li>
            <li className="li">Asus</li>
            <li className="li">Gigabyte</li>
            <li className="li">Msi</li>
          </ul>
        </div>
      </div>
      <div className="peripheral-two">
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> SDD
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> RAM
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> HDD
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> CPU COOLER
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> MONITOR
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> GRAPHIC CARD
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> PC CASE
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> POWER SUPPLY
        </p>
        <p className="peripheral-two-p">
          <BsArrowRightCircle /> CASE FAN
        </p>
      </div>
      <div className="peripheral-three">
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> SPEAKERS
        </p>
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> GAMING KEYBOARD
        </p>
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> GAMING MOUSE
        </p>
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> GAMING MOUSEPAD
        </p>

        <p className="peripheral-three-p">
          <BsArrowRightCircle /> GAMING CHAIR
        </p>
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> GAMING HEADSETS
        </p>
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> GAMING ROUTERS
        </p>
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> MINI PC
        </p>
        <p className="peripheral-three-p">
          <BsArrowRightCircle /> HP GAMING PC
        </p>
      </div>
      <div className="peripheral-four">
        <p className="peripheral-four-p">
          <BsArrowRightCircle /> HDMI CABLES
        </p>
        <p className="peripheral-four-p">
          <BsArrowRightCircle /> POWERED BY ASUS
        </p>
      </div>
    </div>
  )
}

export default Peripherals
