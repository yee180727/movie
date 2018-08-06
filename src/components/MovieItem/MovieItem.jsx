import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './MovieItem.less'

export class MovieItem extends Component {
  render() {
    return (
      <div className="movie">
        <div className="movie__poster">
          <img src={ this.props.data.poster } alt=""/>
        </div>
        <div className="movie__detail">
          <div className="movie__detail--name">{ this.props.data.name }</div>
          <div className="movie__detail--score">观众评分: <span>{ this.props.data.score }</span></div>
          <div className="movie__detail--director">导演: { this.props.data.director }</div>
          { this.props.data.actor && <div className="movie__detail--actor">主演: { this.props.data.actor }</div> }
          <div className="movie__detail--tag">
          {
            this.props.data.tags.map((ele, index) => {
              if (index % 2) {
                return <span className="red" key = { index }>{ele}</span>
              } else {
                return <span className="blue" key = { index }>{ele}</span>
              }
            })
          }
          </div>
        </div>
        <div className="movie__btn">
          <div className="movie__btn--done">购买</div>
          <div className="movie__btn--price">9.9</div>
        </div>
      </div>
    )
  }
}
MovieItem.propYypes = {
  data: PropTypes.array.isRequired,
}

export default MovieItem
