import React, { Component } from 'react'
import Slick from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

import './Slide.less'

export class Slide extends Component {
  render() {
    const slickOptions = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      arrows: false,
    }
    return (
      <div className="slide">
        <Slick {...slickOptions}>
          {
            this.props.data.map(ele => (
              <div key={ele.image}>
                <img src={ele.image} alt=""/>
              </div>
            ))
          }
        </Slick>
      </div>
    )
  }
}

Slide.propTypes = {
  data: PropTypes.array.isRequired,
}


export default Slide
