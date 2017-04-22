<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{msg}} </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是自己试一下'
    }
  }
}
</script>
