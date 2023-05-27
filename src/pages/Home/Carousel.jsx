import React from "react";
import Slider from "infinite-react-carousel";

export default function Carousel() {
  return (
	// https://www.npmjs.com/package/infinite-react-carousel
    <Slider
      slidesToShow={4}
      swipe={true}
      autoplay={true}
      centerMode={true}
      arrows={false}
      pauseOnHover={false}
    >
      <div>
        <h3>🏓</h3>
      </div>
      <div>
        <h3>🏃‍♀️</h3>
      </div>
      <div>
        <h3>🏋️</h3>
      </div>
      <div>
        <h3>⚽️</h3>
      </div>
      <div>
        <h3>⛳️</h3>
      </div>
      <div>
        <h3>🧘</h3>
      </div>
      <div>
        <h3>🏊‍♀️</h3>
      </div>
      <div>
        <h3>🏄‍♀️</h3>
      </div>
      {/* <div>
        <h3>🚣‍♂️</h3>
      </div>
      <div>
        <h3>🧗‍♀️</h3>
      </div>
      <div>
        <h3>🤽‍♂️</h3>
      </div>
      <div>
        <h3>🏂</h3>
      </div>
      <div>
        <h3>🥋</h3>
      </div>
      <div>
        <h3>🤿</h3>
      </div>
      <div>
        <h3>☄️</h3>
      </div>
      <div>
        <h3>🏹</h3>
      </div> */}
    </Slider>
  );
}



{/* <div className="carousel carousel-end rounded-box ">
          <div className="carousel-item w-36">🏓 </div>
          <div className="carousel-item w-36">🏃‍♀️ </div>
          <div className="carousel-item w-36">🏋️ </div>
          <div className="carousel-item w-36">⚽️ </div>
          <div className="carousel-item w-36">⛳️ </div>
          <div className="carousel-item w-36">🧘</div>
          <div className="carousel-item  w-36">🏊‍♀️</div>
          <div className="carousel-item  w-36">🏄‍♀️</div>
          <div className="carousel-item  w-36">🚣‍♂️</div>
          <div className="carousel-item  w-36">🧗‍♀️</div>
          <div className="carousel-item  w-36">🤽‍♂️</div>
          <div className="carousel-item  w-36">🏂</div>
          <div className="carousel-item  w-36">🥋</div>
          <div className="carousel-item  w-36">🤿</div>
          <div className="carousel-item  w-36">☄️</div>
          <div className="carousel-item  w-36">🏹</div>
        </div> */}