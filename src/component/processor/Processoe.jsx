import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { FaSearchPlus } from 'react-icons/fa'
const Processoe = () => {
  return (
    <div className="Processoe">
      <div className="processor-left">
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2023/04/7900X.jpg"
          alt=""
        />
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2023/04/7950x-1.jpg"
          alt=""
        />
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2023/04/AMD1.jpg"
          alt=""
        />
      </div>
      <div className="processor-right">
        <div className="processor-right-one">
          <h2 className="SpecialDeal">Special Deal</h2>
          <p className="blue"></p>
          <div className="processor-right-wrap">
            <img
              className="image"
              src="https://www.primeabgb.com/wp-content/uploads/2021/08/AMD-Ryzen-5-5600G-Desktop-Processor.jpg"
              alt=""
            />
            <div className="p-right-text">
              <p className="Ryzen">
                AMD Ryzen 5 5600G Desktop Processor With Integrated Radeon
                Graphics 100-100000252BOX
              </p>
              <div className="span">
                <b className="span-b">$11,400</b>
                <del className="span-p">$18,760</del>
                <p className="span-off">39% off</p>
              </div>
              <div className="cart">
                <p className="cart-p">
                  <BsCart2 />
                </p>
                <p className="cart-p">
                  <FaSearchPlus />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="processor-right-one">
          <h2 className="SpecialDeal">Tadka Deal</h2>
          <p className="blue"></p>
          <div className="processor-right-wrap">
            <img
              className="image"
              src="https://www.primeabgb.com/wp-content/uploads/2019/04/Corsair-Vengeance-LPX-8GB-8GBx1-3200MHz-DDR4-Desktop-Memory-CMK8GX4M1E3200C16.jpg"
              alt=""
            />
            <div className="p-right-text">
              <p className="Ryzen">
                Corsair Vengeance LPX 8GB (8GBx1) 3200MHz DDR4 Desktop Memory
                CMK8GX4M1E3200C16
              </p>
              <div className="span">
                <b className="span-b">$1,800</b>
                <del className="span-p">$10,760</del>
                <p className="span-off">58% off</p>
              </div>
              <div className="cart">
                <p className="cart-p">
                  <BsCart2 />
                </p>
                <p className="cart-p">
                  <FaSearchPlus />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Processoe
