/*
* @Author: Administrator
* @Date:   2018-01-19 16:12:34
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-19 17:12:55
*/

'use strict';
var aa="123"
console.log(aa);
var button=document.getElementsBysClassName("button")
console.log(button);
// 当页面加载的时候
window.onload=function(){
	// 当点击按钮的时出现弹框
	button[0].onclik=function(){
		// alert(这是一个按钮)
	var city=document.getElementsBysClassName("city");
	console.log(city);
	city[0].style.display="none";
	}
	var pos=document.getElementBysClassName("pos");
	pos[0].onclick=function(){
		var city=document.getElementsByClassName("city");
		console.log(city);
		city[0].style.display="block";
	}
}
// js
// 1.当整个页面加载完成时，才可以对元素进行操作；
// 2.获取元素：document.getElementsByClassName("")[0];
// 3.添加事件函数
// 4.进行样式操作
$.ajax({	
	url:"https://www.toutiao.com/stream/widget/local_weather/city/"
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		console.log(obj);
		var city=obj.data;
		console.log(city);
	}
})
// 关于天气的数据
$ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原"
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		var tianqi=obj.data;
		console.log(tianqi);
	}

})