<template>
    <div class="news">
       
       <div class="headLine">
           钟南山院士表示病毒可能与人类长期共存
       </div>

       <div class="mainContent">
           this is content
       </div>

       <div class="endNews">
           this is bottom
       </div>
    </div>
</template>

<script>
export default {
  
 
  
}
</script>

<style >
.news{
    
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: white;
    
}
.headLine{
    font-size: 20px;
    width: 100%;
    height: 20%;
    background-color: gray;
}
.mainContent{
    width: 100%;
    height: 60%;
    background-color: palegreen;
}

.endNews{
    width: 100%;
    height: 20%;
    background-color: khaki;
}




</style>