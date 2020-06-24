<template>
  <div id="app">
    <div class = "head">
      this is the head
    </div>
    <div class="middle">
      <navbar ></navbar>
    </div>
    
    <div class = "foot">
      Copyright @2020 zhangyichiawesome.com - All rights reserved 
    </div>

  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components:{
    navbar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  width: 98%;
  height: 100%;
  width: 100%;
  margin: 0px;
  border: 0px; */
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.head{
  margin: 0;
  padding: 0;
  font-size:xx-large;
  text-align: center;
  text-emphasis: none;
  font-weight: bold;
  background-color: cornflowerblue;
  height: 5%;
  /* height: 50%; */
}

.middle{
  margin: 0;
  padding: 0;
  font-size:xx-large;
  text-align: center;
  text-emphasis: none;
  font-weight: bold;
  background-color:green;
  /* height:700px;
  width: 1870px */
  height: 90%;
}


.foot{
  margin: 0;
  padding: 0;
  font-size: 15px;
  
  text-align: center;
  text-emphasis: none;
  font-weight: bold;
  background-color: cornflowerblue;
  height: 5%;
}

</style>
