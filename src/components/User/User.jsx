import React, { Component } from 'react'
import LinkList from '../Link/Link';
import Menu from '../Menu/Menu';
import './User.less'

export class User extends Component {
  render() {
    return (
      <div className="user">
          <div className="user__top">
            <div className="operator">
              <div className="operator__setting operator__icon"></div>
              <div className="operator__message operator__icon"></div>
            </div>
            <div className="user__info">
              <div className="user__avator" style = {{ backgroundImage: 'url(/source/avatar.jpeg)' }}></div>
              <div className="user__detail">
                <div className="user__name">周杰伦</div>
                <div>
                  <span className="user__follow">关注100</span>
                  <span className="user__fans">被关注10</span>
                </div>
                <div className="user__level">黄金会员</div>
              </div>
            </div>
          </div>
          <div className="user__content">
            <LinkList title="收藏的电影" extra="20" href="#"/>
            <LinkList title="看过的电影" extra="20" href="#"/>
          </div>
          <Menu current={"user"}/>
        </div>
    )
  }
}

export default User

