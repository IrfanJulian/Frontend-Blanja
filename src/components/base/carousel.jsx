import React from "react";
import c1 from '../../assets/carousel1.jpg'
import c2 from '../../assets/carousel2.jpg'
import c3 from '../../assets/carousel3.jpg'

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner relative w-full overflow-hidden">
          {/* <!-- Single item --> */}
          <div className="carousel-item active relative float-left w-full">
            <img
              src={c3}
              className="block h-[30rem] w-full"
              alt="Motorbike Smoke"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-4xl font-semibold text-white">Viral in 2022</h5>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={c1}
              className="block h-[30rem] w-full"
              alt="Mountaintop"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-4xl font-semibold text-white">Popular in 2022</h5>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={c2}
              className="block h-[30rem] w-full"
              alt="Woman Reading a Book"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-4xl font-semibold text-white">Mega Discount</h5>
            </div>
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
