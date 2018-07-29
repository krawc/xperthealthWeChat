//index.js
//获取应用实例
const app = getApp()
//const logo = require('../../assets/logo.png')


Page({
  data: {
    motto: 'XpertHealth',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logo: '../../assets/XHLogoExtended.png',
    slider: {
      img1: '../../assets/slider/sliderImg1.png',
    },
    buttons: {
      btn1: {
        img: '../../assets/buttons/icon1.svg',
        text_en: 'News',
        text_cn: '新闻',
      },
      btn2: {
        img: '../../assets/buttons/icon1.svg',
        text_en: 'About us',
        text_cn: '关于我们',
      },
      btn3: {
        img: '../../assets/buttons/icon1.svg',
        text_en: 'Corporate Wellness',
        text_cn: '企业健康',
      },
      btn4: {
        img: '../../assets/buttons/icon1.svg',
        text_en: 'For you!',
        text_cn: '为您！',
      },
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.request({
      url: 'https://www.wpdaxue.com/wp-json/wp/v2/posts',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
