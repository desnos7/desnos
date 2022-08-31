<template>
<div>
   <ComponentRendezvous/>
   <ComponentFooter/>
</div> 
   
</template>
<script>
 
   import ComponentFooter from '../components/ComponentFooter.vue';
   import ComponentRendezvous from '../components/ComponentRendezvous.vue';
   export default{
      name:'Rendezvous',
      components:{
          ComponentFooter,ComponentRendezvous,
    
      }
      

   }

</script>
