<template>
    <div class="mapcontainer">
        
        
        <WebMap/> 

    </div>
    
</template>

<script>
import WebMap from './webmap.vue';
export default {
    name: 'App',
    components: { WebMap }
}
</script>

<style >
.mapcontainer{
    
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    background-color:rgb(56, 51, 51);
    
   
}



</style>