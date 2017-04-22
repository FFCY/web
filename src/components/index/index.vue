<template>
<div class="index">
<div class="index-one">
  <img src="../../images/banner.png"/>
  <div class="center-down">
    <ul class="banner-down">
    <li>
      <a href=""><img src="../../images/iosDown.png"/></a>
    </li>
    <li class="andLi">
      <a href=""><img src="../../images/andDown.png"/></a>
    </li>
  </ul>
  </div>
</div>
<!-- 学生端简介 -->
<div class="index-procudt">
  <p class="font-title">
    <img src="../../images/font1.png" alt="">
  </p>
  <div class="center-con">
    <div class="left">
    <img src="../../images/s-title.png" class="stu-tea" />
    <p class="bold-font">
      A+学生端—全民的优质课程特惠平台！
    </p>
    <p class="under-bold">
      国内外顶尖的优质教育资源特惠平台。
    </p>
    <p><span class="bold-font">课程团购拼单：</span>拿起手机，轻轻一点，邀请好友与你分享优质精品课，一起会名师大神。
    </p>
    <p><span class="bold-font">多种形式钜惠课程: </span>平台与优秀机构合作,定期推出一元课、分期返、秒杀课、优惠券等，无价知识，优质课程，教学名师，学识知己，尽在A+课堂。</p>
     <p><span class="bold-font">分享赢取现金奖励：</span>优质课程,名师大咖,品牌机构一键分享即可领取现金奖励,若用户好友通过分享报名,分享者即有机会获得相应激励奖金。 
</p>
 <p><span class="bold-font">实用功能设置：</span>话题刷屏、课程订制发布、多彩活动报名、问答抢打赏、大众化的聊天设置等，让你学习社交两不误!找课程、会名师、超省钱、交知己，一个A+课堂就够了!</p>
 <div class="seeMore">
   <a href="#/student">点击查看更多>></a>
 </div>
  </div>
  <div class="right">
    <div class="has-phone">
    <img src="../../images/rigPhone.png" class="phone-border" />
      <div class="enter-phone">
        <img src="../../images/stu.gif" alt=""/>
      </div>
    </div>
  </div>
  </div>
  </div>
  <!-- 教师端简介 -->
  <div class="index-procudt tea-introduce">
  <p class="font-title">
    <img src="../../images/font1.png" alt="">
  </p>
  <div class="center-con">
    <div class="left">
    <img src="../../images/tea-title.png" class="stu-tea" />
    <p class="bold-font">
      教师端——人人都是机构的课程顾问！
    </p>
    <p class="under-bold">
      国内首家优质教育资源分销平台。
    </p>
    <p><span class="bold-font">赏金激励分享：</span>“1+1+N”的模式，即分享赏金+课程成交提成+N个机构推广人。
    </p>
    <p><span class="bold-font">课程拼单：</span>拼单课程设置，便捷网上拼单，客户轻松拼单，机构批量成单。</p>
     <p><span class="bold-font">课程订制：</span>涵盖多个类别的优质课程，客户在发布学习需求后，机构迅速对其需求进行评估后参与课程竞争实现课程中标。</p>
 <p><span class="bold-font">大众化的沟通设置：</span>简洁明了的聊天界面，便捷的面谈约见方式，机构、教师和学生沟通就像家人一样无障碍，不只是省时间。</p>
 <div class="seeMore">
   <a href="#/teacher">点击查看更多>></a>
 </div>
  </div>
  <div class="right">
    <div class="has-phone">
    <img src="../../images/lefPhone.png" class="phone-border" />
      <div class="enter-phone">
        <img src="../../images/tea.gif"/>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="ling-blo">
    <div class="con">
      <div class="img-blo">
        <img src="../../images/liing1.png"/>
      </div>
      <div class="img-blo">
        <img src="../../images/ling2.png"/>
      </div>
      <div class="img-blo">
        <img src="../../images/ling3.png"/>
      </div>
      <div class="img-blo">
        <img src="../../images/ling6.png"/>
      </div>
      <div class="img-blo">
        <img src="../../images/ling7.png"/>
      </div>
      <div class="img-blo">
        <img src="../../images/ling8.png"/>
      </div>
      <div class="white-con white-con1">
        <img src="../../images/ling4.png"/>
      </div>
      <div class="white-con white-con2">
        <img src="../../images/ling5.png"/>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import $ from 'jquery'
export default {
  mounted () {
    $(function () {
      var height = $(window).height()
      console.log(height)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
	width: 100%;
	height: 500px;
	background: #dadada;
}
.index-one{
  position: relative;
}
.index-one img{
  width: 100%;
  height: auto;
  display: block;
  border:none;
  vertical-align: middle;
}
.center-down{
  width: 100%;
  position: absolute;
  left: 0;
  bottom:143px;
}
.banner-down{
  width: 443px;
  height: 65px;
  margin: 0 auto;
}
.banner-down li{
  float: left;
  overflow: hidden;
}
.banner-down li a:hover img{
  opacity: 0.8;
}
.banner-down .andLi{
  margin-left: 40px;
}
.banner-down li img{
  display: block;
  vertical-align: middle;
}
.index-procudt{
  background-color: #f5f5f5;
}
.index-procudt .font-title{
  padding: 48px 0 60px 0;
  margin:0 auto;
  text-align: center;
  background-color: #fff;
}
.index-procudt .center-con{
  width: 1000px;
  overflow: hidden;
  margin:0 auto;
}
.index-procudt .left{
  width: 610px;
  float: left;
  font-size: 18px;
  color: #000000;
  line-height: 34px;
  text-align: left;
}
.index-procudt .stu-tea{
  margin: 40px 0;
}
.bold-font{
  font-weight: bold;
}
.under-bold{
  margin-bottom: 40px;
}
.seeMore{
  padding: 25px 0 70px 0;
}
.seeMore a{
  font-size: 18px;
  color: #333;
  padding: 6px 13px;
  background-color: #ffcc33;
  border-radius: 4px;
  border:1px solid #a0a0a0;
  display: inline-block;
  text-decoration: none;
  text-align: center;
}
.seeMore a:hover{
  transition: all .2s ease 0s;
    -moz-transition: all .2s ease 0s;
    -webkit-transition: all .2s ease 0s;
    -o-transition: all .2s ease 0s;
    border:1px solid #ffcc33;
}
.index-procudt .right{
  float: right;
  width: 390px;
}
.has-phone{
  float: right;
  margin-top: 40px;
  height: 545px;
  width: 267px;
  position: relative;
}
.has-phone .phone-border{
  position: absolute;
  display: block;
  right: 0;
  top: 0;
}
.has-phone .enter-phone{
  position: absolute;
    width: 235px;
    height: 415px;
    right: 17px;
    top: 67px;
}
.has-phone .enter-phone img{
  height: 410px;
  width: 100%;
}
.tea-introduce .enter-phone img{
  height: 415px;
}
.tea-introduce .has-phone .enter-phone{
  right: 16px;
}
.tea-introduce .left{
  float: right;
}
.tea-introduce .right{
  float: left;
}
.tea-introduce .right .has-phone{
  float: left;
}
.tea-introduce .left .stu-tea{
  float: right;
}
.tea-introduce .left .bold-font{
  clear: both;
}
.ling-blo{
  padding: 40px 0 60px 0;
  background: #f8f8f8;
}
.ling-blo .con{
  width: 1080px;
  margin:0 auto;
  overflow: hidden;
  position: relative;
}
.ling-blo .img-blo{
  float: left;
  margin:0 4px 4px 0;
}
.ling-blo .white-con{
  position: absolute;
}
.ling-blo .white-con1{
  top: 179px;
  left: 179px;
}
.ling-blo .white-con2{
  top: 179px;
  right: 189px;
}
.ling-blo img:hover{
  transition: all .2s ease 0s;
  -moz-transition: all .2s ease 0s;
  -webkit-transition: all .2s ease 0s;
  -o-transition: all .2s ease 0s;
  transform: scale(0.99); 
  -moz-transform: scale(0.99);  
  -webkit-transform: scale(0.99);  
  -o-transform: scale(0.99);   
}
</style>
