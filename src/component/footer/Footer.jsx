import React from 'react'
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineGlobe, HiOutlineMail, HiOutlineHome } from 'react-icons/hi'
import { TbPhoneCalling } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <h2 className="ABOUT">ABOUT US</h2>
          <p className="footer-left-para">
            We at Prime ABGB take pride in completing 25 years of our existence.
            Known in the IT market as a innovator of technology, Our Journey has
            truly been justified to our name.Always Believe in Getting Better …
          </p>
          <div className="icons">
            <a href="#" className="icon-a-fa">
              <FiFacebook />
            </a>
            <a href="#" className="icon-a-tw">
              <FiTwitter />
            </a>
            <a href="#" className="icon-a-in">
              <FaInstagram />
            </a>
            <a href="#" className="icon-a-yt">
              <FiYoutube />
            </a>
          </div>
        </div>
        <div className="footer-left-nav-one">
          <h3 className="Location">Location</h3>
          <p className="Prime">Prime ABGB Pvt. Ltd.</p>
          <span className="span">
            <p className="home">
              <HiOutlineHome />
            </p>
            <p className="p">
              Simlim Square, 106-109, 1st Floor, D.B.Marg, Lamington Road, Grant
              Road East Mumbai, Maharashtra – 400007
            </p>
          </span>
          <span className="span">
            <p className="home">
              <TbPhoneCalling />
            </p>
            <p className="p">+91-22-67402000</p>
          </span>
          <span className="span">
            <p className="home">
              <HiOutlineMail />
            </p>
            <p className="p">sales@primeabgb.com</p>
          </span>
          <span className="span">
            <p className="home">
              <HiOutlineGlobe />
            </p>
            <p className="p">https://www.primeabgb.com</p>
          </span>
        </div>
        <div className="footer-left-nav-two">
          <h3 className="HELP">HELP</h3>
          <div className="footer-a">
            <a href="#" className="help-a">
              Shipping Policy
            </a>
            <a href="#" className="help-a">
              Return Policy
            </a>
            <a href="#" className="help-a">
              Privacy Policy
            </a>
            <a href="#" className="help-a">
              Terms & Conditions
            </a>
            <a href="#" className="help-a">
              Askgb
            </a>
            <a href="#" className="help-a">
              E-Waste Management
            </a>
          </div>
        </div>
        <div className="footer-left-nav-two">
          <h3 className="HELP">QUICK LINK</h3>
          <div className="footer-a">
            <a href="#" className="help-a">
              Contact Us
            </a>
            <a href="#" className="help-a">
              About Us
            </a>
            <a href="#" className="help-a">
              Payment Options / Bank Details
            </a>
            <a href="#" className="help-a">
              Careers
            </a>
          </div>
        </div>
        <div className="footer-left-nav-three">
          <h3 className="HELP">Our Courier Partners</h3>
          <img
            className="imag"
            src="https://www.primeabgb.com/wp-content/uploads/2021/09/Courier-Logo-N.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="footer-bottom">
        <img
          src="https://www.primeabgb.com/wp-content/themes/kapee/assets/images/payments-method.png"
          alt=""
        />
        <p className="Copyright">
          Copyright © 2023 Prime ABGB Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
