<template> 
   
        <div  class="continu">
             <div class="box">
            <h1> Success</h1>
            <p>nous vous reviendrons dans un bref delai</p>
            </div>
        </div>
        <ComponentFooter/> 
   

 
</template>

<script>
import ComponentFooter from '../components/ComponentFooter.vue'

export default {
    name:'ResultatView',
    components: {
        ComponentFooter
    }
}
</script>
<style scoped>
  .continu{
  height: 68Vh;
   background-color: #00035a!important;
   color: #00035a;
}
.box{
    background-color:white;
    position: absolute;
    text-align: center;
    padding: 50px;
    top: 25%;
    width: 20%;
    height: 13%;
    left: 35%;
    border: 2px solid white;
    border-radius: 15px;
}
.box>p{
 font-size:20px;
}
@media screen and (max-width: 1024px) {
  .box{
    top: 30%;
    width: 30%;
    left: 30%;
    
  }
  .box>p{
    font-size:18px ; 
  }
}
@media screen and (max-width: 768px) {
    .box{ 
    width: 35%;
    left: 28%;  
  }
    .box>p{
    font-size:16px ; 
  }
}
@media screen and (max-width:425px) {
    .box{ 
    width: 45%;
    left: 18%;  
  }
    .box>p{
    font-size:18px ; 
  }
}
@media screen and (max-width:375px) {
    .box{ 
    width: 45%;
    left: 13%;  
  }
    .box>p{
    font-size:18px ; 
  }
}
@media screen and (max-width:375px) {
    .box{ 
    width: 45%;
    left: 12%; 
    padding: 55px; 
  }
    .box>p{
    font-size:20px ; 
  }
}


</style>