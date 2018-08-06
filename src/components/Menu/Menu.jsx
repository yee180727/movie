import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './Menu.less'

export class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to='/' className={`menu__item  ${this.props.current === 'movie' ? 'menu__item--active': ''}`}>
          <i className="menu__item--icon menu__item--movie"></i>
          <span className="menu__item--text">电影</span>
        </Link>
        <Link to="/user" className={`menu__item ${this.props.current === 'user' ? 'menu__item--active': ''}`}>
          <i className="menu__item--icon menu__item--user"></i>
          <span className="menu__item--text">我的</span>
        </Link>
      </div>
    )
  }
}

Menu.propTypes = {
  current: PropTypes.string.isRequired,
}

export default Menu
