import React from 'react'
import  Slider from 'react-slick'
const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed:3000,
  };
  return (
    <Slider {...settings}>
      {/* {arrImages.map((image)=>{
        return (
          <Image src={image} alt="slider" className='img-fluid' preview={false} width="100%" height="600px"/>
        )
      })} */}
      <div className='slider'>
        <img src="assets/banner08.png" className='img-fluid' alt='banner'/>
      </div>
      <div className='slider'>
        <img src="assets/banner09.jpg" className='img-fluid'alt='banner'/>
      </div>
      <div className='slider'>
        <img src="assets/banner05.png" className='img-fluid' alt='banner'/>
      </div>
      <div className='slider'>
        <img src="assets/banner04.jpg" className='img-fluid' alt='banner'/>
      </div>
      {/* <div>
        <img src='assets/banner05.jpg' alt='banner02'/>
      </div> */}
      {/* <div>
        <img src='assets/banner02.jpg' alt='banner03'/>
      </div> */}
    </Slider>
  )
}

export default SliderBanner
