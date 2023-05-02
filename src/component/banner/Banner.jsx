import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  // const navigate = useNavigate()
  // function handleClick() {
  //   navigate('/Modules')
  // }
  return (
    <div className="Banner">
      <div className="wrapper">
        <div className="banner-left">
          <Swiper
            loop={true}
            autoplay={true}
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="SwiperSlide">
              <Link to="/Modules">
                <img
                  // onClick={handleClick}
                  className="SwiperSlide-img"
                  src="https://www.primeabgb.com/wp-content/uploads/2023/03/2023-ROG-PBA-Components_Dark_1024_512.jpg"
                  alt=""
                />
              </Link>
            </SwiperSlide>
            <Link to="/Modules">
              <SwiperSlide className="SwiperSlide">
                <img
                  className="SwiperSlide-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiTh2nToE8uFY6-9vpx70O24Qg5nOtEMBe5cotLbZzjuAXhh8NT1d2OR-8f5AFY0-5FcVom22dxM&usqp=CAU&ec=48600113"
                  alt=""
                />
              </SwiperSlide>
            </Link>
            <SwiperSlide className="SwiperSlide">
              <Link to="/Modules">
                <img
                  className="SwiperSlide-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoCvGCaGCunlYRCq5t1D7eGTJmnntEL_CBO8Iiv2Ihg&usqp=CAU&ec=48600113"
                  alt=""
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Link to="/Modules">
                <img
                  className="SwiperSlide-img"
                  src="https://www.primeabgb.com/wp-content/uploads/2023/04/AMD-Processor.jpg"
                  alt=""
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <Link to="/Modules">
                <img
                  className="SwiperSlide-img"
                  src="https://www.primeabgb.com/wp-content/uploads/2023/02/PRIME-ABGB_H770-B760-Cross-series-Banners1180-_-350.jpg"
                  alt=""
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="banner-right">
          <img
            src="https://www.primeabgb.com/wp-content/uploads/2022/12/side-banner-home.jpg"
            alt=""
          />
          <img
            src="https://www.primeabgb.com/wp-content/uploads/2023/04/SSD.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="banner-para">
        <p className="para">
          Our office will remain shut for Maharashtra Day on 1st May 2023,
          Monday. All orders therefore will be processed on 2nd May 2023,
          Tuesday. Inconvenience is regretted.
        </p>
      </div>
    </div>
  )
}

export default Banner
