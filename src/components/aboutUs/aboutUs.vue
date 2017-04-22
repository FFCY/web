<template>
<div class="index">
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
.index-one{
  position: relative;
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
