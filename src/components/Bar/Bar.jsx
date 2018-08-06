import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Bar.less'
export class Bar extends Component {
  render() {
    return (
      <div className="bar">
        <div className="bar__position" onClick={this.props.showCityLayor}>{this.props.position}</div>
        <div className="bar__search"></div>
        <div className="bar__scan"></div>
      </div>
    )
  }
}

Bar.propTypes = {
  position: PropTypes.string.isRequired,
  showCityLayor: PropTypes.func.isRequired,
}

export default Bar
