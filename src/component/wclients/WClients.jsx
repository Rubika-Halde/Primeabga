import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsStarHalf, BsFillStarFill, BsHeart } from 'react-icons/bs'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const WClients = () => {
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
    <div className="wclients">
      <div className="banner-left">
        <div className="banner-left-head">
          <h2 className="banner-left-para">WHAT OUR CLIENT SAY</h2>
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
              <p className="Swiper-Slide-para">
                I brought a graphics card (RTX 3060ti) Products are genuine &
                give best performance. The price is cheaper then other Sites. As
                they say ABGB (Always Believe in Getting Better). Thanks to
                Prime ABGB team.
              </p>
              <p className="Name"> Jasawi Mahalnabish</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <p className="Swiper-Slide-para">
                Putting all that information right at the consumers' fingertips
                might seem like it would deter some purchases due to low-star
                reviews. However, this isn't the case. Because Amazon is so
                large and can host so many competitors, all this information
                actually encourages greater purchase rates because consumers can
                make an educated purchase because they can compare star-ave
              </p>
              <p className="Name">Jasawi Mahalnabish</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <p className="Swiper-Slide-para">
                By employing a proactive social media team that will retweet
                customer content, as you can see in the image above, they are
                able to increase customer satisfaction not just for the one
                customer retweeted, but by all customers (and potential
                customers) who see the post.
                
              </p>
              <p className="Name">sujith Gayakvad</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <p className="Swiper-Slide-para">
                What our clients say Awesome Service, I ordered online & I get
                my Package with in 2 Days, package is packed properly & safely.
              </p>
              <p className="Name">Stuthi Singhade</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <p className="Swiper-Slide-para">
                What our clients say Awesome Service, I ordered online & I get
                my Package with in 2 Days, package is packed properly & safely.
                I brought a graphics card (RTX 3060ti) Products are genuine &
                give best performance. The price is cheaper then other Sites. As
                they say ABGB (Always Believe in Getting Better). Thanks to
                Prime ABGB team.
              </p>
              <p className="Name">Shaym Halde</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <p className="Swiper-Slide-para">
                What our clients say Awesome Service, I ordered online & I get
                my Package with in 2 Days, package is packed properly & safely.
                I brought a graphics card (RTX 3060ti) Products are genuine &
              </p>
              <p className="Name">yash Travden</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <p className="Swiper-Slide-para">
                What our package is packed properly & safely. I brought a
                graphics card (RTX 3060ti) Products are genuine & give best
                performance. The price is cheaper then other Sites. As they say
                ABGB (Always Believe in Getting Better). Thanks to Prime ABGB
                team.
              </p>
              <p className="Name">Rubina</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <p className="Swiper-Slide-para">
                What our clients say Awesome Service, I ordered online & I get
                my Package with in 2 Days, package is packed properly & safely.
                I brought a graphics card (RTX 3060ti) Products are genuine &
                give best performance. The price is cheaper then other Sites. As
                they say ABGB (Always Believe in Getting Better). Thanks to
                Prime ABGB team.
              </p>
              <p className="Name"> Mahalnabish</p>
              <div className="stars">
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsFillStarFill />
                </a>
                <a href="#">
                  <BsStarHalf />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default WClients
