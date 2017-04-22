<template>
<div class="index">
<div class="index-one">
  <img src="../../images/stu-banner.png"/>
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
<div class="section1 section">
	<div class="container">
		<div class="left">
			<p class="title">优质特惠课——多种钜惠课程</p>
			<p class="font-con">平台与优秀机构合作,定期推出一元课、分期返、秒杀课、优惠券等，更有线上与名师零距离接触的直播课，只需一个A+课堂,惊喜和钜惠课程可能都是你的。无价知识，优质课程，教学名师，学识知己，A+课堂，只为你所需！</p>
		</div>
		<div class="right">
			<div class="has-phone">
				<img src="../../images/stu-phone.png" class="stu-phone" />
				<div class="inner-block"></div>
				<div class="big-screen">
					<img src="../../images/stu-big1.png"/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section2 section">
	<div class="container">
		<div class="left">
			<p class="title">优质特惠课——多种钜惠课程</p>
			<p class="font-con">    话题刷屏、课程订制发布、多彩活动报名、问答抢打赏、大众化的聊天设置等，方便快捷，多彩体验,让你学习社交两不误!找课程、会名师、超省钱、交知己，一个A+课堂就够了!</p>
		</div>
		<div class="right">
			<div class="has-phone">
				<img src="../../images/stu-phone2.png" class="stu-phone" />
				<div class="inner-block"></div>
				<div class="big-screen">
					<img src="../../images/stu-big2.png"/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section3 section">
	<div class="container">
		<div class="left">
			<p class="title">优质特惠课——课程团购拼单</p>
			<p class="font-con">     拿起手机，轻轻一点，邀请好友与你分享优质精品课，一起会名师大神。课程线上拼单，节约时间,再也不用到机构排队报名;好友一起团,不用孤身一人奋斗在学习的最前沿;陌生人也可拼团,再也不怕好友不给力错过教育好资源.....!A+课堂,不只是省钱!</p>
		</div>
		<div class="right">
			<div class="has-phone">
				<img src="../../images/stu-phone3.png" class="stu-phone" />
				<div class="inner-block"></div>
				<div class="big-screen">
					<img src="../../images/stu-big3.png"/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section2 section">
	<div class="container">
		<div class="left">
			<p class="title">分享赢取现金奖励</p>
			<p class="font-con">优质课程,名师大咖,品牌机构一键分享即可领取现金奖励,若用户好友通过分享报名,分享者即有机会获得相应激励奖金。教育好资源，自己学习同时还能挣钱，谁说知识和金钱不可兼得</p>
		</div>
		<div class="right">
			<div class="has-phone">
				<img src="../../images/stu-phone4.png" class="stu-phone" />
				<div class="inner-block"></div>
				<!-- <div class="big-screen">
					<img src="../../images/stu-big3.png"/>
				</div> -->
			</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
	padding-bottom: 30px;
}
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
  bottom:22px;
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
.section{
	background: #f5f5f5;
}
.section .container{
	width: 880px;
}
.section .left{
	width: 415px;
	color: #000;
	float: left;
}
.section .right{
	float: right;
	width: 427px;
	height: 586px;
}
.section2 .left{
	float: right;
}
.section2 .right{
	float: left;
}
.section .left .title{
	font-size: 20px;
	text-align: center;
	padding: 274px 0 20px;
}
.section .left .font-con{
	line-height: 30px;
	text-align: left;
}
.section .right .has-phone{
	margin-top: 80px;
	position: relative;
}
.has-phone .stu-phone{
	display: block;
	position: absolute;
	right: 0;
	top: 0;
}
.has-phone .big-screen{
	position: absolute;
	right: 221px;
	top: 0;
}
.section2 .has-phone .stu-phone{
	left: 0;
}
.section2 .has-phone .big-screen{
	right: 110px;
	top: 24px;
}
.section3 .has-phone .big-screen{
	top: 250px;
}
</style>
