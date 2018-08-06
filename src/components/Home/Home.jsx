import React, { Component } from 'react'
import './Home.less'
import Bar from '../Bar/Bar';
import Slide from '../Slide/Slide';
import MovieItem from '../MovieItem/MovieItem';
import Menu from '../Menu/Menu';
import request from '../../helpers/request'
import City from '../City/City';

export class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: '', // 当前城市
      poster: [], // 海报
      movie: [], // 电影
      cityLayorVisble: false, //城市浮层是否展现
    }
  }
  showCityLayor = () => {
    this.setState({cityLayorVisble: true})
  }
  hiddenCityLayor = () => {
    this.setState({cityLayorVisble: false})
  }
  selectCity = (city) => {
    this.setState({city: city})
    this.hiddenCityLayor();
  }
  componentWillMount () {
    this.getData();
    this.getCity();
  }
  getData = async () => {
    const data = await request('/index');
    this.setState(data)
    console.log(this.state);
  }
  getCity = async () => {
    const data = await request('/city');
   
    console.log(data);
  }
  render() {
    return (
      <div className="home">
        <Bar position={this.state.city} showCityLayor={this.showCityLayor}/>
        <div className="home__slide">
          <div className="home__slide--wrap">
            <Slide data={this.state.poster}/>
          </div>
        </div>
        <div className="home__content">
        {
          this.state.movie.map(( item, index ) => {
            return <MovieItem data = { item } key = { index }/>
          })
        }
        </div>
        <Menu current={"movie"}/>
        { this.state.cityLayorVisble &&  <City hiddenCityLayor = { this.hiddenCityLayor } selectCity = { this.selectCity } />}
      </div>
    )
  }
}

export default Home
