<template>
<div class="index">
<div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026886181.jpg" alt="首页banner图片01">
        </div>
        <div class="swiper-slide">
          <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026905031.jpg" alt="首页banner图片02">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
</div>
</template>
<script>
import Swiper from '../../../static/swiper.min.js'
require('../../../static/swiper.min.css')
import $ from 'jquery'
export default {
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
    mySwiper
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
</style>
