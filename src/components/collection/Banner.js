import { Autoplay, Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { banners } from '../../data/category'
import { Link } from 'react-router-dom'

const Banner = ({ collection }) => {
  const mainBanners = banners.filter((item) => item.collection === collection)
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation
      className='mainBannerContainer'
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {mainBanners.map((x, index) => (
        <SwiperSlide key={index}>
          <Link to={`/${x.collection}`}>
            <img src={x.images[0]} className='largeScreen' alt='' />
            <img src={x.images[1]} className='mobScreen' alt='' />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
