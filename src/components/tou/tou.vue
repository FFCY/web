<template>
<div class="header">
     <div class="container">
        <h1>
          <a href="">
            <img src="../../images/logo.png"/>
          </a>
        </h1>
      <ul class="header-ul">
        <li>
          <router-link to="/index">首页<span>HOME</span></router-link>
        </li>
        <li>
        <router-link to="/student">学生端<span>STUDENT SIDE</span></router-link>
        </li>
        <li>
        	<router-link to="/teacher">老师端<span>TEACHER SIDE</span></router-link>
        </li>
        <li>
        	<router-link to="/aboutUs">关于我们<span>ABOUT US</span></router-link>
        </li>
        <!-- <li>
          <a>联系我们<span>CONTACT US</span></a>
        </li> -->
      </ul>
     </div>
    </div>
</template>
<script>
export default {}
</script>

<style>
.header .header-ul{
  margin-top: 33px;
}
.header .header-ul  a{
	text-decoration: none;
	font-size: 16px;
	color: #333;
}
.header .header-ul .active{
	color: #2577e3;
}
.header .header-ul .active span{
  color: #2577e3;
}
</style>
