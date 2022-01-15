import React, { Component } from "react";
import './Products.css';
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#E0752F", borderRadius: "50px;"  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#E0752F" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className='products'>

            <div className="text-products">
                <p className="p-products">Products</p>
                <h2>It eget tortor tempor mollis purus</h2>
            </div>
            
      <div className="cards">
        <Slider {...settings}>
          <div className="card" style="width: 80%; display: inline-block;">
            <h5>Aliquam at dui lorem ipsum</h5>
            <ul>
              <li>- Ut mattis gravida efficitur.</li>
              <li>- Ut feugiat vehicula nibh, efficitur laoreet justo.</li>
              <li>- Molestie id. Integer varius enim sit amet egestas.</li>
              <li>- Ut mattis gravida efficitur.</li>
            </ul>
          </div>

          <div className="card">
            <h5>Aliquam at dui lorem ipsum</h5>
            <ul>
              <li>- Ut mattis gravida efficitur.</li>
              <li>- Ut feugiat vehicula nibh, efficitur laoreet justo.</li>
              <li>- Molestie id. Integer varius enim sit amet egestas.</li>
              <li>- Ut mattis gravida efficitur.</li>
            </ul>
          </div>
          <div className="card">
            <h5>Aliquam at dui lorem ipsum</h5>
            <ul>
              <li>- Ut mattis gravida efficitur.</li>
              <li>- Ut feugiat vehicula nibh, efficitur laoreet justo.</li>
              <li>- Molestie id. Integer varius enim sit amet egestas.</li>
              <li>- Ut mattis gravida efficitur.</li>
            </ul>
          </div>
          <div className="card">
            <h5>Aliquam at dui lorem ipsum</h5>
            <ul>
              <li>- Ut mattis gravida efficitur.</li>
              <li>- Ut feugiat vehicula nibh, efficitur laoreet justo.</li>
              <li>- Molestie id. Integer varius enim sit amet egestas.</li>
              <li>- Ut mattis gravida efficitur.</li>
            </ul>
          </div>
          <div className="card">
            <h5>Aliquam at dui lorem ipsum</h5>
            <ul>
              <li>- Ut mattis gravida efficitur.</li>
              <li>- Ut feugiat vehicula nibh, efficitur laoreet justo.</li>
              <li>- Molestie id. Integer varius enim sit amet egestas.</li>
              <li>- Ut mattis gravida efficitur.</li>
            </ul>
          </div>
          <div className="card">
            <h5>Aliquam at dui lorem ipsum</h5>
            <ul>
              <li>- Ut mattis gravida efficitur.</li>
              <li>- Ut feugiat vehicula nibh, efficitur laoreet justo.</li>
              <li>- Molestie id. Integer varius enim sit amet egestas.</li>
              <li>- Ut mattis gravida efficitur.</li>
            </ul>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}


/* 
const Products = () => {
    return (
      <>
        <div className='products'>

            <div className="text-products">
                <p className="p-products">Products</p>
                <h2>It eget tortor tempor mollis purus</h2>
            </div>
            
           


        </div>

      </>
    );
  };
  
  export default Products; */