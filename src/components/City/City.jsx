import React, { Component } from 'react'
import './City.less'
import request from '../../helpers/request.js';

class City extends Component {
  constructor() {
    super();
    this.state = {
      hot: [],
      all: {},
    }
  }
  componentWillMount() {
    this.getData()
  }
  getData = async () => {
    const data = await request('/city');
    this.setState(data)
  }
  render() {
    const { selectCity, hiddenCityLayor } = this.props;
    const alphabetKeys = Object.keys(this.state.all);
    console.log(alphabetKeys);
    return (
      <div className="city">
        <div className="city__title">
          <div className="city__title--close" onClick={hiddenCityLayor}>关闭</div>
          选择城市
        </div>
        <div className="city__content">
          <div className="city__block">
            <div className="city__block--label" id="定位">定位城市</div>
            <div className="city__block--wrap">
              <span onClick = {() => selectCity(`杭州`)}>杭州</span>
            </div>
          </div>
          <div className="city__block">
            <div className="city__block--label" id="热门">热门城市</div>
            <div className="city__block--wrap">
              {
                this.state.hot.map((item) => {
                  return <span key={item.cityCode}  onClick = {() => selectCity(item.regionName)}>{item.regionName}</span>
                })
              }
            </div>
          </div>
          {
            alphabetKeys.map((item) => {
              const citys = this.state.all[item]
              return (
                <div className="city__list" key={item}>
                  <div className="city__list--label" id={item}>{item}</div>
                  <ul className="city__list--wrap">
                    {
                      citys.map(city => <li key={city.cityCode} onClick = {() => selectCity(city.regionName)}>{city.regionName}</li>)
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
        <div className="city__index">
          <ul className="city__index-wrap">
            <li><a href="#定位">定位</a></li>
            <li><a href="#热门">热门</a></li>
            {
              alphabetKeys.map(item => <li key={item}><a href={`#${item}`}>{item}</a></li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default City
