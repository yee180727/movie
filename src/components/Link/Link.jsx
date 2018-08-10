import React, { Component } from 'react'
import './Link.less'

export class Link extends Component {
  render() {
    return (
      <a href="" className="link">
        <div className="link__title">{this.props.title}</div>
        <div className="link__extra">{this.props.extra}</div>
        <i className="link__arrow"></i>
      </a>
    )
  }
}

export default Link
