import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Latest = () => {
  const [slides, setSlides] = useState(0)
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 2
        : window.innerWidth <= 800
        ? 2
        : window.innerWidth > 720
        ? 4
        : 0,
    )
  }
  React.useEffect(() => {
    setSlidesPerview()
    window.addEventListener('resize', setSlidesPerview)
    return () => {
      window.removeEventListener('resize', setSlidesPerview)
    }
  }, [])
  return (
    <div className="Latest">
      <div className="banner-right">
        <div className="banner-right-head">
          <h2 className="banner-right-para">LATEST PRODUCTS</h2>
          <p className="line"></p>
        </div>
        <div className="banner-right-swiper">
          <Swiper
            slidesPerView={slides}
            spaceBetween={20}
            loop={true}
            autoplay={true}
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="my-Swiper"
          >
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/AMD-Special-Combo-7950X3D7900XTX.jpg"
                alt=""
              />
              <p className="Swiper-Slide-para">
                Certified Full Modular Power Supply Compatible with PCIE 5.0
                CP-9020249-NA
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$500</b>
                <del className="swiper-slide-top-para">$1000</del>
                <p className="swiper-slide-top-green">50% off</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/AMD-Special-Combo-7950X7900XTX.jpg"
                alt=""
              />
              <p className="Swiper-Slide-para">
                Corsair RM Series RM850e 850W 80 PLUS GOLD Certified Full
                Modular Power Supply CP-9020249-NA
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$500</b>
                <del className="swiper-slide-top-para">$1000</del>
                <p className="swiper-slide-top-green">50% off</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/AMD-Special-Combo-7950X3D7900XTX.jpg"
                alt=""
              />
              <p className="Swiper-Slide-para">
                Corsair RM Series RM850e 850W 80 PLUS GOLD Modular Power Supply
                Compatible with PCIE 5.0 CP-9020249-NA
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$800</b>
                <del className="swiper-slide-top-para">$900</del>
                <p className="swiper-slide-top-green">10% off</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                alt=""
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/Gigabyte-G5-GD-51IN123SE-Gaming-Laptop-5.jpg"
              />
              <p className="Swiper-Slide-para">
                Corsair CX750F RGB 750 Watt 80 Plus Bronze Fully Modular PSU
                CP-9020227-IN
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$90</b>
                <del className="swiper-slide-top-para">$500</del>
                <p className="swiper-slide-top-green">55% off</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/Gigabyte-G-Series-G5-MD-52IN123SE.jpg"
                alt=""
              />
              <p className="Swiper-Slide-para">
                Corsair CV Series CV550 550 Watt 80 Plus Bronze Certified PSU
                CP-9020210-IN
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$250</b>
                <del className="swiper-slide-top-para">$500</del>
                <p className="swiper-slide-top-green">20% off</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/Gigabyte-GeForce-RTX-4070-EAGLE-OC-12G-12GB-GDDR6X-Graphic-Card-GV-N4070EAGLE-OC-12GD.jpg"
                alt=""
              />
              <p className="Swiper-Slide-para">
                CX750F RGB 750 Watt 80 Plus Bronze Fully Modular PSU
                CP-9020227-IN
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$800</b>
                <del className="swiper-slide-top-para">$8000</del>
                <p className="swiper-slide-top-green">30% off</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/Gigabyte-G-Series-G5-MD-52IN123SE.jpg"
                alt=""
              />
              <p className="Swiper-Slide-para">
                RM Series RM850e 850W 80 PLUS GOLD Certified Full Modular Power
                Supply Compatible with PCIE 5.0 CP-9020249-NA
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$200</b>
                <del className="swiper-slide-top-para">$800</del>
                <p className="swiper-slide-top-green">60% off</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2023/04/Zotac-Gaming-GeForce-RTX-4070-TWIN-EDGE-OC-12GB-GDDR6X-Graphic-Card-ZT-D40700H-10M.jpg"
                alt=""
              />
              <p className="Swiper-Slide-para">
                Corsair RM Series RM850e 850W 80 PLUS GOLD Certified Full PCIE
                5.0 CP-9020249-NA
              </p>
              <div className="swiper-slide-top">
                <b className="swiper-slide-top-b">$80</b>
                <del className="swiper-slide-top-para">$100</del>
                <p className="swiper-slide-top-green">20% off</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Latest
