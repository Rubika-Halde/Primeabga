import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Thermal = () => {
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
    <div className="Thermal">
      <div className="banner-right">
        <div className="banner-right-head">
          <h2 className="banner-right-para">THERMAL GRIZZLY</h2>
          <p className="line"></p>
        </div>
        <div className="banner-right-swiper">
          <Swiper
            slidesPerView={slides}
            spaceBetween={20}
            loop={true}
            autoplay={true}
            rewind={true}
            navigation={false}
            modules={[Navigation, Autoplay]}
            className="my-Swiper"
          >
            <SwiperSlide className="Swiper-Slide">
              <img
                className="Swiper-Slide-img"
                src="https://www.primeabgb.com/wp-content/uploads/2022/04/Thermal-Grizzly-Aeronaut-Thermal-Paste-TG-A-001-RS.jpg"
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
                src="https://www.primeabgb.com/wp-content/uploads/2023/02/Thermal-Grizzly-Kryonaut-CPU-Cooling-Thermal-Paste-37G-TG-K-100-R.jpg"
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
                src="https://www.primeabgb.com/wp-content/uploads/2022/04/Thermal-Grizzly-Hydronaut-Thermal-Paste-TG-H-001-RS.jpg"
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
                src="https://www.primeabgb.com/wp-content/uploads/2022/04/Thermal-Grizzly-Aeronaut-Thermal-Paste-TG-A-001-RS.jpg"
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
                src="https://www.primeabgb.com/wp-content/uploads/2022/04/Thermal-Grizzly-Aeronaut-Thermal-Paste-TG-A-001-RS.jpg"
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
                src="https://www.primeabgb.com/wp-content/uploads/2022/04/Thermal-Grizzly-Aeronaut-Thermal-Paste-TG-A-001-RS.jpg"
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
                src="https://www.primeabgb.com/wp-content/uploads/2023/02/Thermal-Grizzly-Kryonaut-CPU-Cooling-Thermal-Paste-37G-TG-K-100-R.jpg"
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
                src="https://www.primeabgb.com/wp-content/uploads/2023/02/Thermal-Grizzly-Kryonaut-CPU-Cooling-Thermal-Paste-37G-TG-K-100-R.jpg"
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
      <div className="rtxcard-imgs">
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2023/02/4070Ti-Graphic-Card.jpg"
          alt=""
        />
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2023/02/Arc-Graphic-Card.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Thermal
