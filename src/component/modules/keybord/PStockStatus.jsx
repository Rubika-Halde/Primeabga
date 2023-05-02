import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { HiOutlineShare } from 'react-icons/hi'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { BsExclamationCircle } from 'react-icons/bs'

const PStockStatus = () => {
  return (
    <div className="product_details">
      <div className="p_left">
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2023/03/Intel-Core-I5-13500-13th-Gen-Desktop-Processor-BX8071513500.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p_right">
        <div className="p_top_text_wrapper">
          <div className="p_top_left">
            <div className="p_top_line">
              <a href="">Home</a>

              <button className="A_right_btn">
                <RxDoubleArrowRight />
              </button>

              <a href="">Shop</a>

              <button className="A_right_btn">
                <RxDoubleArrowRight />
              </button>

              <p className="p_para_one">
                Intel Core I5-13500 13th Gen Desktop Processor BX8071513500
              </p>
            </div>
          </div>
          <div className="p_top_right">
            <div className="share_icon">
              <HiOutlineShare />
            </div>
            <div className="left_arrow">
              <SlArrowLeft />
            </div>
            <div className="right_arrow">
              <SlArrowRight />
            </div>
          </div>
        </div>
        <p className="p_para_two">
          Intel Core I5-13500 13th Gen Desktop Processor BX8071513500
        </p>
        <div className="price_wrapper">
          <div className="p_price">
            <span>&#8377;</span>
            23,799
          </div>
          <del className="p_second_price">
            <span>&#8377;</span>
            28,999
          </del>
        </div>
        <div className="offline_payment">
          or Pay <b>₹5950</b> now. Rest in <b>0% interest EMIs</b> Credit card
          NOT required, Online approval in 2 minutes
        </div>
        <div className="exclamation_mark">
          <BsExclamationCircle />
        </div>
        <div className="hurry_text">Hurry, Only 3 left.</div>
        <div className="Highlights_wrapper">
          <div className="Highlights_left">Highlights:</div>
          <div className="Highlights_right">
            Intel Core i5-13500 Processor is a 13th Gen Desktop Processor. This
            Products formerly Raptor Lake It has 14 Cores and 20 Threads. Max
            Turbo Frequency 4.80GHz. 24 MB Intel Smart Cache Memory, with Intel
            UHD Graphics 770.
          </div>
        </div>
        <div className="btnS_wrapper">
          <div className="plus_minus_btn">
            <button className="minus">-</button>
            <div className="number">0</div>
            <button className="plus">+</button>
          </div>
          <div className="add_to_cart_btn">
            <button className="add_to_cart">Add to cart</button>
            <button className="buy_now">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PStockStatus
