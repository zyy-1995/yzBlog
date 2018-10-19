import React, { Component } from 'react';
import './lunbo.css';

class LunBo extends Component {
    //当第一次渲染完成后
    componentDidMount(){
            var imgList = document.getElementById("imgLists");
            var imgArr = document.getElementsByClassName("lunBopic");
            imgList.style.width = (1000+10) * imgArr.length +  "px";
            var navList = document.getElementById("navLists");
            var outer = document.getElementById("lunBo");

            navList.style.left = (outer.offsetWidth - navList.offsetWidth)/2 + "px";
            var index = 0;
            var allA = document.getElementsByClassName("item");
            allA[index].style.backgroundColor = "black";
            //为所有的超链接绑定单击响应函数
            for(var i = 0;i < allA.length;i++) {
                allA[i].num = i;
                allA[i].onclick = function () {
                    clearInterval(timer);
                    index = this.num;
                    setA();
                    moveDiv(imgList,(-1000-10)*index,50,"left",function() {
                        autoChange();
                    });
                };
            }
            autoChange();

            //创建一个方法，用来设置选中的a
            function setA() {
                //判断当前索引是否是最后一张图片
                if(index >= imgArr.length - 1) {
                    index = 0;
                    imgList.style.left = 0;
                }
                for(var i = 0;i < allA.length;i++) {
                    allA[i].style.backgroundColor = "red";
                }
                allA[index].style.backgroundColor = "black";
            }

            var timer;//定义定时器标识

            //创建一个函数，用来开启自动切换图片
            function autoChange() {
                //开启一个定时器，用来定时切换图片
                timer = setInterval(function () {
                    //使索引自增
                    index++;
                    //判断Index值
                    index %= imgArr.length;
                    //执行动画
                    moveDiv(imgList,(-1000-10)*index,50,"left",function(){
                        //修改导航按钮
                        setA();
                    });
                },3000);
            }

            function moveDiv(obj,target,speed,attr,callback) {
                //关闭上一个定时器
                clearInterval(obj.timer);

                var current = parseInt(getStyle(obj,attr),10);
                //判断speed速度的正负
                if(current > target) {
                    speed = -speed;
                }

                obj.timer = setInterval(function() {

                    var oldValue = parseInt(getStyle(obj,attr),10);

                    //speed代表速度
                    var newValue = oldValue + speed;

                    if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                        newValue = target;
                    }

                    obj.style[attr] = newValue + "px";

                    //关闭定时器
                    if(newValue === target) {
                        clearInterval(obj.timer);
                        //动画执行完毕，调用回调函数
                        callback && callback();
                    }
                },30);
            }

            //定义一个函数，用来获取指定元素的当前的样式
            function getStyle(obj,name){
                if(window.getComputedStyle){
                    //正常浏览器的方法
                    return  getComputedStyle(obj,null)[name];
                }else{
                    //IE8的方式
                    return  obj.currentStyle[name];
                }
            }
        }

    render() {
        return (
            <div id="lunBo">
                <ul id="imgLists">
                    <li><img className="lunBopic"  src={require('./1.jpg')} alt=""/></li>
                    <li><img className="lunBopic"  src={require('./2.jpg')} alt=""/></li>
                    <li><img className="lunBopic" src={require('./back.jpg')} alt=""/></li>
                    <li><img className="lunBopic"  src={require('./4.jpg')} alt=""/></li>
                    <li><img className="lunBopic"  src={require('./5.jpg')} alt=""/></li>
                    <li><img className="lunBopic" src={require('./1.jpg')} alt=""/></li>
                </ul>
                <div id="navLists">
                    <a href="javascript:;" className="item"></a>
                    <a href="javascript:;" className="item"></a>
                    <a href="javascript:;" className="item"></a>
                    <a href="javascript:;" className="item"></a>
                    <a href="javascript:;" className="item"></a>
                </div>
            </div>
                )
            }
        }

export default  LunBo;