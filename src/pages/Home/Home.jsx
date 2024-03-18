import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const menuNavigate = useNavigate();
  const menuClick = () => {
    setTimeout(() => {
      menuNavigate("/menu");
    }, 200);
  };
  return (
    <div className="home-container">
      <Slider {...settings}>
        <div className="slider-container">
          <div className="slider-head">
            <i className="slider-title">Pepperoni Pizza</i>
            <p className="slider-info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span onClick={menuClick} className="order">
              Order
            </span>
          </div>
          <img className="slider-image" src="/public/menu-pızza.jpg" alt="" />
        </div>

        <div className="slider-container">
          <div className="slider-head">
            <i className="slider-title">Gennaro Pizza</i>
            <p className="slider-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className="order">Order</span>
          </div>
          <img className="slider-image" src="/public/menu-pızza.jpg" alt="" />
        </div>

        <div className="slider-container">
          <div className="slider-head">
            <i className="slider-title">Supreme Pizza</i>
            <p className="slider-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className="order">Order</span>
          </div>
          <img className="slider-image" src="/public/menu-pızza.jpg" alt="" />
        </div>

        <div className="slider-container">
          <div className="slider-head">
            <i className="slider-title">Barbekü Pizza</i>
            <p className="slider-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className="order">Order</span>
          </div>
          <img className="slider-image" src="/public/menu-pızza.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
