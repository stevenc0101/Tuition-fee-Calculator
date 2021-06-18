const newLocal = 0
// pages/application/application.js
Page({

  data: {
    sum:1,
    variable:1,
    newarray:["Engineering","Nursing","B.Tech","Biomedical Engineering","Computer Science","Art & Science","B.Com.Integrated Bussiness and Humanites", "Bussiness & Commerce","Engineering Mgt","IBEHS Health Engineering Science and Entrepreneurship","Health Science","Humanities","Science/Kinesiology","Medical Radiation Science","Social Science"],
    selectData: "1234",
    multiArray: [['大一', '大二', '大三', '大四'], ['国际学生', '本地学生']],
    multiIndex: [0, 0],
    multiIndex_level:null,
    multiIndex_id:null,
    tuition:0,
    temp:0,
    Array_fee_int:new Int16Array(),
    Array_fee_int: [[[1484.74,336.38],[1430.75,336.38],[1327.19,336.38],[1278.03,332.21]],[[1365.97,201.42],[1259.06,199.96],[1167.93,198.51],[1124.67,198.51]],[[1306.58,265.77],[1259.06,265.77],[1167.93,265.77],[1124.67,262.47]],[[1484.74,336.38],[1430.75,336.38],[1327.19,336.38],[1278.03,332.21]],[[1484.74,266.58],[1230.43,266.58],[1141.37,266.58],[1099.10,263.28]],[[1187.78,201.42],[1144.58,199.96],[1061.73,198.51],[1022.41,198.51]],[[1325.23,336.38],[1325.23,336.38],[1276.15,336.38],[1228.88,332.21]],[[1272.26,311.83],[1272.26,311.83],[1225.14,311.83],[1179.76,307.97]],[[1484.74,336.38],[1352.71,336.38],[1327.19,336.38],[1327.19,332.21]],[[1484.74,336.38],[1430.75,336.38],[1327.19,336.38],[1278.03,332.21]],[[1349.75,201.42],[1144.58,199.96],[1061.73,198.51],[1022.41,198.51]],[[1128.39,201.42],[1087.35,199.96],[1008.65,198.51],[971.29,198.51]],[[1187.78,201.42],[1144.58,199.96],[1061.73,198.51],[1022.41,198.51]],[[1187.78,201.42],[1144.58,199.96],[1061.73,198.51],[1022.41,198.51]],[[1128.39,201.42],[1087.35,199.96],[1008.65,198.51],[971.29,198.51]]],
    
     credit:null,
     istap:false,
     
  },

  bindPickerChange:function(e) {
    this.setData({
      index:e.detail.value
    })
  },

  bindMultiPickerChange:function (e) {
    this.setData({
      multiIndex: e.detail.value,
      multiIndex_level: e.detail.value[0],
      multiIndex_id: e.detail.value[1],
    })

  },

  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
  },

  handleInput:function(e){
    this.setData({
      credit:Number(e.detail.value)
    })
  },

  handletap:function(e){
    this.setData({
     index:this.data.index,
     tuition:((this.data.Array_fee_int[Number(this.data.index)][Number([this.data.multiIndex_level])][Number(this.data.multiIndex_id)])*(this.data.credit)).toFixed(2),
     istap:true,
    })
  },

  handletap_clear:function(e) {
    this.setData ({
        istap:false,
        multiIndex_id:null,
        multiIndex_level:null,
        index:null,
        credit:null,
        inputcre:'',
    })

  }

 /* checkboxChange:function(e) {
    this.setData({
      item:e.detail.value
    })
  }  */

})