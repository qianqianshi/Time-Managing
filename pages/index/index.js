//index.js
var app = getApp()
Page({
  data: {  
    userInfo: {},
    focus: false,
    inputValue: '',
    userinput: '',
  },
  //设置分享
  onShareAppMessage: function () {

  },
  onLoad: function () {
    var that = this;
    //获取之前保留在缓存里的数据
    wx.getStorage({
      key: 'geqian',
      success: function (res) {
        if (res.data) {
          that.setData({
            inputValue: res.data
          })
        }
      }
    })
    //获取用户信息
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //点击按钮Input输入框获得焦点
bindButtonTap: function () {
  this.setData({
    focus: true
  })
},
bindKeyInput: function (e) {
  this.setData({
    inputValue: e.detail.value,
    userinput: e.detail.value
  })
},
saveData: function () {
   this.setData({
    userInput: ''
  });
  let www = this.data.inputValue;
  wx.setStorage({
    key: 'geqian',
    data: www
  })
},
})