import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import ShopBy from '../shopby/ShopBy'
import Peripherals from '../peripherals/Peripherals'
import Accessories from '../accessories/Accessories'
import Enterprise from '../enterprise/Enterprise'
const Categories = () => {
  const [shop, setShop] = useState(false)
  const onMouseHover = () => {
    setShop(true)
  }
  const onMouseRemove = () => {
    setShop(false)
  }
  const [show, setShow] = useState(false)
  const onPeripheralHover = () => {
    setShow(true)
  }
  const onPeripheralRemove = () => {
    setShow(false)
  }
  const [accessories, setAccessories] = useState(false)
  const onAccessoriesHover = () => {
    setAccessories(true)
  }
  const onAccessoriesRemove = () => {
    setAccessories(false)
  }
  const [enterprise, setEnterprise] = useState(false)
  const onEnterpriseHover = () => {
    setEnterprise(true)
  }
  const onEnterpriseRemove = () => {
    setEnterprise(false)
  }

  return (
    <div className="Categories">
      <div className="categories-shop">
        <div className="s">
          <div
            className="shop"
            onMouseOver={onMouseHover}
            onMouseOut={onMouseRemove}
          >
            <p className="shop-para">Shop by categories</p>
            <a href="#" className="BiMenu">
              <BiMenu />
            </a>
          </div>
          <div className="shoby-com">{shop ? <ShopBy /> : ''}</div>
        </div>
        <div className="p">
          <div
            className="shop-one"
            onMouseOver={onPeripheralHover}
            onMouseOut={onPeripheralRemove}
          >
            <p className="shop-one-para">peripherals</p>
            <a href="#" className="shop-one-a">
              <AiOutlineDown />
            </a>
          </div>
          <div className="peri">{show ? <Peripherals /> : ''}</div>
        </div>
        <div className="a">
          <div
            className="shop-two"
            onMouseOver={onAccessoriesHover}
            onMouseOut={onAccessoriesRemove}
          >
            <p className="shop-two-para">Accessories</p>
            <a href="#" className="shop-two-a">
              <AiOutlineDown />
            </a>
          </div>
          <div className="access">{accessories ? <Accessories /> : ''}</div>
        </div>
        <div className="Accesori"></div>
        <p className="Gaming">Gaming laptop</p>
        <div className="e">
          <div
            className="shop-three"
            onMouseOver={onEnterpriseHover}
            onMouseOut={onEnterpriseRemove}
          >
            <p className="shop-three-para">enterprise</p>
            <a href="#" className="shop-three-a">
              <AiOutlineDown />
            </a>
          </div>
          <div className="enter">{enterprise ? <Enterprise /> : ''}</div>
        </div>
        <p className="pre">pre built pc</p>
      </div>
    </div>
  )
}

export default Categories
