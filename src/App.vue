<template>
  <div id="app">
    <tou></tou>
    <router-view>
    </router-view>
    <div class="footer">
      <div class="container">
        <div class="left">
          <ul class="code-ul">
            <li>
             <img src="./images/codeStu.png"/>
             扫一扫下载学生端APP
            </li>
            <li>
             <img src="./images/codeTea.png"/>
             扫一扫下载老师端APP
            </li>
          </ul>
        </div>
        <div class="right">
          <p class="title">联系我们</p>
          <p class="white-line"></p>
          <ul class="contact-way">
            <li><span class="little-bg little1"></span>2553007717</li>
            <li><span class="little-bg little2"></span>021-63350959</li>
            <li><span class="little-bg little3"></span>上海市黄浦区北京东路668号科技京城西楼8G</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tou from './components/tou/tou.vue'
export default {
  components: {
    tou
  }
}
</script>
<style>
*{
  margin:0;
  padding: 0;
}
ul li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}
.container{
  width: 1000px;
  margin:0 auto;
  overflow: hidden;
}
.header{
  height: 100px;
  border-bottom: 1px solid #dadada;
  overflow: hidden;
}
.header .container{
  height: 100px;
}
.header ul{
  height: 93px;
  overflow: hidden;
  float: right;
}
.header ul li{
  float: left;
  text-align: center;
  padding:0 8px;
  list-style: none;
  font-size: 18px;
  color: #333;
}
.header ul li a{
  display: block;
  font-size: 18px;
  color: #333;
}
.header ul li span{
  font-size: 12px;
  color: #333;
  display: block;
  margin-top: 7px;
}
.header h1{
  height: 93px;
  width: 120px;
  float: left;
  margin: 0;
}
.header h1 img{
  height: auto;
  display: block;
  margin-top: 33px;
}
.footer{
  position: relative;
  height: 338px;
  text-align: center;
  background-color: #1d242f;
  color: #666;
  background-image: url('images/foot-bg.png');
  background-size: 100% 100%;
  overflow: hidden;
}
.footer .code-ul{
  padding-top: 70px;
  overflow: hidden;
}
.footer .left{
  float: left;
}
.footer .code-ul li{
  float: left;
  text-align: center;
  color: #fff;
  font-size: 12px;
  margin-right: 89px;
}
.code-ul li img{
  display: block;
  width: 126px;
  height: 126px;
  margin: 0 auto 38px;
}
.footer .right{
  float: left;
  margin-left: 100px;
  overflow: hidden;
  color: #fff;
  text-align: left;
}
.footer .right .title{
  font-size: 24px;
  padding-top: 70px;
}
.footer .right .white-line{
  border-bottom: 1px solid #fff;
  width: 70px;
  padding-top:20px;
}
.contact-way{
  margin-top: 20px;
  font-size: 12px;
}
.contact-way li{
  height: 35px;
  line-height: 35px;
}
.contact-way li .little-bg{
  background:url('images/fotLogo.png');
  height: 30px;
  width: 32px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 7px;
}
.contact-way li:hover{
  opacity: 0.7;
  transition: all .2s ease 0s;
  -moz-transition: all .2s ease 0s;
  -webkit-transition: all .2s ease 0s;
  -o-transition: all .2s ease 0s;
   transform: scale(0.99); 
  -moz-transform: scale(0.99);  
  -webkit-transform: scale(0.99);  
  -o-transform: scale(0.99);   
}
.contact-way li .little3{
  background-position: 0 30px;
}
.contact-way li .little2{
  background-position: 0 60px;
}
</style>
