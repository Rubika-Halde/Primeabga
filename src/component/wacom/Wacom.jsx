import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Wacom = () => {
  const [slides, setSlides] = useState(0)
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 800
        ? 1
        : window.innerWidth > 720
        ? 1
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
    <div className="Wacom">
      <div className="wacom-wrapper">
        <div className="banner-right">
          <div className="banner-right-head">
            <h2 className="banner-right-para">WACOM</h2>
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-Intuos-Pro-PTH660-K0-Medium-Graphics-Input-Tablet-Black.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-One-by-CTL-672-K0-CX-Graphic-Pen-Tablet-Red-and-Black.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-One-by-CTL-472-K0-CX-Digital-Drawing-Graphics-Pen-Tablet-Red-Black.jpg"
                  alt=""
                />
                <p className="Swiper-Slide-para">
                  Corsair RM Series RM850e 850W 80 PLUS GOLD Modular Power
                  Supply Compatible with PCIE 5.0 CP-9020249-NA
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-Intuos-Bluetooth-CTL-6100WL-K0-CX-Digital-Graphics-Pen-Tablet-for-Drawing-Black.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-One-Pen-Medium-Display-DTC133W0C.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-Intuos-Pro-PTH660-K0-Medium-Graphics-Input-Tablet-Black.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-Intuos-Bluetooth-CTL-6100WL-K0-CX-Digital-Graphics-Pen-Tablet-for-Drawing-Black.jpg"
                  alt=""
                />
                <p className="Swiper-Slide-para">
                  RM Series RM850e 850W 80 PLUS GOLD Certified Full Modular
                  Power Supply Compatible with PCIE 5.0 CP-9020249-NA
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-Intuos-Pro-PTH660-K0-Medium-Graphics-Input-Tablet-Black.jpg"
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
        <div className="banner-right">
          <div className="banner-right-head">
            <h2 className="banner-right-para">PENPOWER</h2>
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/WorldPenScan-X.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/PenPower-WorldCard-Pro-Business-Card-Scanner-for-Windows-and-Mac.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-Intuos-Bluetooth-CTL-6100WL-K0-CX-Digital-Graphics-Pen-Tablet-for-Drawing-Black.jpg"
                  alt=""
                />
                <p className="Swiper-Slide-para">
                  Corsair RM Series RM850e 850W 80 PLUS GOLD Modular Power
                  Supply Compatible with PCIE 5.0 CP-9020249-NA
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/PenPower-WorldCard-Pro-Business-Card-Scanner-for-Windows-and-Mac.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-One-Pen-Medium-Display-DTC133W0C.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/WorldPenScan-X.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/PenPower-WorldCard-Pro-Business-Card-Scanner-for-Windows-and-Mac.jpg"
                  alt=""
                />
                <p className="Swiper-Slide-para">
                  RM Series RM850e 850W 80 PLUS GOLD Certified Full Modular
                  Power Supply Compatible with PCIE 5.0 CP-9020249-NA
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/WorldPenScan-X.jpg"
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
        <div className="banner-right">
          <div className="banner-right-head">
            <h2 className="banner-right-para">J5 CREATE</h2>
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/J5-Create-USB-C-Gigabit-Ethernet-Adapter-JCE131.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/Wacom-Intuos-Bluetooth-CTL-6100WL-K0-CX-Digital-Graphics-Pen-Tablet-for-Drawing-Black.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/J5-Create-ScreenCast-Wireless-Display-Adapter-JVAW56.jpg"
                  alt=""
                />
                <p className="Swiper-Slide-para">
                  Corsair RM Series RM850e 850W 80 PLUS GOLD Modular Power
                  Supply Compatible with PCIE 5.0 CP-9020249-NA
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/J5-Create-USB-C-Gigabit-Ethernet-Adapter-JCE131.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/J5-Create-USB-3.0-7-Port-HUB-JUH377.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/J5-Create-USB-C-Multiport-Adapter-with-Power-Delivery-JCD376.jpg"
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/J5-Create-USB-3.0-7-Port-HUB-JUH377.jpg"
                  alt=""
                />
                <p className="Swiper-Slide-para">
                  RM Series RM850e 850W 80 PLUS GOLD Certified Full Modular
                  Power Supply Compatible with PCIE 5.0 CP-9020249-NA
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
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/J5-Create-ScreenCast-Wireless-Display-Adapter-JVAW56.jpg"
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
      <div className="rtxcard-imgs">
        <img
          src="https://www.primeabgb.com/wp-content/uploads/2023/02/PRIME-ABGB_H770-B760-Cross-series-Banners1180-_-350.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Wacom
