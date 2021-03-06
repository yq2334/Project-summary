﻿ import store from "@/store";
 import { parseTime, toFixed } from "@/utils/index";

 let enumFilter = (value, key) => {
     var statusMap = store.getters.clientData.enumData[key];
     if (statusMap[value]) {
         var text = statusMap[value];
         return text;
     }
     return value;
 }
 let orderStatusFilter = (value, code) => {
     if (code == "b") {
         var statusMap = store.getters.clientData.enumData['HelpDicInfo'];
         if (statusMap[value]) {
             var text = statusMap[value].BuyerStatus;
             return text;
         }
         return value;
     } else {
         var statusMap = store.getters.clientData.enumData['HelpDicInfo'];
         if (statusMap[value]) {
             var text = statusMap[value].SellerStatus;
             return text;
         }
         return value;
     }


 }
 let orderListStatusFilter = value => {
     console.log(value);
     var text;
     if (value == 1) {
         text = '已付款,未发货'
         return text
     }
     if (value == 2) {
         text = '已发货，未确认'
         return text
     }
     if (value == 3) {
         text = '已确认，交易完成'
         return text
     }
 }
 let formatTimeFilter = value => {
     return parseTime(value);
 }
 let formatDateFilter = value => {
     return parseTime(value, '{y}-{m}-{d}');
 }
 let getImgUrlFilter = (value) => {
     return process.env.BASE_API + value
 }
 let oderByDate = (value) =>{
    // debugger;
    //  var TimeString = " ' "+ value + " ' ";
    //  console.log(TimeString)
     var date = new Date(value);
     var orderTime = date.getTime()
    console.log(orderTime)
    return orderTime
 }
let onlyNumber = function(val){
   
   
    console.log(typeof(val));
  
    if (isNaN(val)){
       
        return val
    }else{
       
        return '';
    }
}
 export {
     enumFilter,
     formatTimeFilter,
     getImgUrlFilter,
     orderStatusFilter,
     formatDateFilter,
     orderListStatusFilter,
     oderByDate,
     onlyNumber
 }