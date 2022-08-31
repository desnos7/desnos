<template>

  <ComponentNav/>
 
  <router-view/>
</template>
<script>
import ComponentNav from './components/ComponentNav.vue';

export default {
  components: {
    ComponentNav
  },
}
</script>


<style lang="scss">


</style>
