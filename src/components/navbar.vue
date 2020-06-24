<template >
<div class="barcontainer">
 
    <div class="menu">
      <button class="bt" @click="changeComponent('map')" >Map</button>
      <button class="bt" @click="changeComponent('tables')">Tables</button>
      <button class="bt" @click="changeComponent('trend')">Trend</button>
      <button class="bt" @click="changeComponent('news')">News</button>
    
      <div class="list">
        
          <h6>
              <li  class= "li" v-for="item in items" :key="item.country">
                <div class="line">
                  <span style="color:#e60000" >
                    <strong>{{item.totalCases+" "}}</strong>
                  </span>
                  <span style="color:#d6d6d6">{{item.country}}</span>
                </div>
                
              </li>
          </h6>   
      
      </div>
    
      
    </div>

    <div class="content">
      <component  :is="currentTabComponent"></component>
    </div>

</div>

</template>

<script>
import map from '@/components/displays/map';
import news from '@/components/displays/news';
import tables from '@/components/displays/tables';
import trend from '@/components/displays/trend';

import http from "../http-common";

export default {
  components:{
    'map-component':map,
    'news-component':news,
    'tables-component':tables,
    'trend-component':trend
  },
  async created(){
     try{
         const res = await http.get('getList');
         this.items = res.data
         console.log(res.data)
      }catch(e){
        console.log(e)
      }
    
   
  },
  data() {
    return{
    items: [],
    currentTabComponent: map
     
    }
    
  },
  methods:{
    
    
    changeComponent(componentName){
      if(componentName==='map'){
        this.currentTabComponent = map
      }else if(componentName==='news'){
        this.currentTabComponent = news
      }else if(componentName==='tables'){
        this.currentTabComponent = tables
      }else if(componentName==='trend'){
        this.currentTabComponent = trend
      }
      
    }

    
  }
}
</script>



<style >


.barcontainer{
  
  margin: 0px;
  padding: 0px;
  background-color:black;
  display: flex;
  height: 100%;
  width: 100%;
  
}

.menu{
  
  
  border: 1px solid #ccc;
  background-color: grey;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  padding: 0px;
  overflow: hidden;
  
  
}

.content{
  
  /* float:left; */
	width:80%;
  
	border:1px solid #ccc;
	padding:0px;
	/* box-sizing:border-box; */
}

.bt{
  width: 90%;
  height: 6%;
  background-color: royalblue;
  margin: 0px;
  padding:0px;
}

.bt:hover{
  background-color:blue;
}

.list{

  list-style:none;
  height:70%; 
  width:90%;
  margin: 4px;
  padding: 12px;
  overflow-y:scroll;
  overflow-x:scroll;

  /* overflow:hidden;  */
  background-color:grey;
  
}

.li{
  margin: 0px;
  height: 100%;
  width: 100%;
}
.line{
  
  
  width: 100%;
  height: 100%;
  text-align: left;
  list-style-type:none;
  margin:2px;
  background-color: black;
  padding: 2px;
}


</style>