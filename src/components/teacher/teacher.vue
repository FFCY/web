<template>
<div class="index">
<div class="index-one">
  <img src="../../images/tea-banner.png"/>
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
			<p class="title">综合全面的产品体验</p>
			<p class="font-con">    在线解决难题的问答模块，有问题迅速解决；新鲜趣闻分享话题模块，开阔视野的同时结交新朋友；解决线下课堂场地难题的租教室模块，系统化的个人中心模块，更细致的考虑机构需求。A+课堂，为您提供综合全面的产品体验！</p>
		</div>
		<div class="right">
			<div class="has-phone">
				<img src="../../images/tea-phone1.png" class="stu-phone" />
				<div class="inner-block"></div>
				<div class="big-screen">
					<img src="../../images/tea-big1.png"/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section2 section">
	<div class="container">
		<div class="left">
			<p class="title">趣味课程订制</p>
			<p class="font-con">     涵盖多个类别的优质课程,IT互联网、设计创作、职场技能、金融知识、兴趣生活、语言学习、兴趣爱好、中小学、考试认证等,全面的课程展示,满足个性需求,实现自由订制。客户在发布学习需求后，机构迅速对其需求进行评估后参与课程竞争实现课程中标。课程订制筛选、已报名、课程订制详情、中标,实现教师端实时掌控课程中标进度。</p>
		</div>
		<div class="right">
			<div class="has-phone">
				<img src="../../images/tea-phone2.png" class="stu-phone" />
				<div class="inner-block"></div>
				<div class="big-screen">
					<img src="../../images/tea-big2.png"/>
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
				<img src="../../images/tea-phone3.png" class="stu-phone" />
				<div class="inner-block"></div>
				<div class="big-screen">
					<img src="../../images/tea-big3.png"/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section2 section">
	<div class="container">
		<div class="left">
			<p class="title">赏金激励分享</p>
			<p class="font-con">     “1+1+N”的模式，即分享赏金+课程成交提成+N个机构推广人。课程分销体系助推机构宣传，平台和机构共同进行广告费充值，用户分享机构和课程信息，便可获得机构和平台共同提供的现金红包，若用户分享后有成交即可获得相应比例的课程提成。一份宣传，一份推广费用支出，不让教育机构枉费一分钱广告支出。低成本的激励推广机制，让每位学生及家长不仅是机构的客户，更是机构的课程顾问和良好口碑的传播者。</p>
		</div>
		<div class="right">
			<div class="has-phone">
				<img src="../../images/tea-phone4.png" class="stu-phone" />
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
.banner{
	width: 100%;
	height: 500px;
	background: #dadada;
}
.index{
	padding-bottom: 30px;
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
