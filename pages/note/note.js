//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //滑动窗口数据设置
    imgUrls: [
      'http://uploadpic.55.la/upload/temp/2017/07/13/01/92389412822922.png',
      'http://uploadpic.55.la/upload/temp/2017/07/13/01/80204142428108.png',
      'http://uploadpic.55.la/upload/temp/2017/07/13/01/9436524733344.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    scrollTop: 100,
    noteData: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //显示缓存数据
  onShow: function () {
    var that = this
    var data = []
    wx.getStorage({
      key: 'note',
      success: function (res) {
        data = res.data;
        that.setData({
          noteData: res.data
        })
      }
    })
  },
  //跳转页面
  gonextnote: function () {
    wx.navigateTo({
      url: '../nextnote/nextnote'
    })
  },
  //清空指定缓存
  clear: function () {
    wx.removeStorage({
      key: 'note',
      success: function (res) {
        console.log(res.data)
      }
    })
    this.setData({noteData:[]})
  }
  
  })
