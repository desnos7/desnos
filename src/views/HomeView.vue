<template>
  <ComponentHome/>
  <ComponentFooter/>
</template>

<script>
// @ is an alias to /src
import ComponentHome from '@/components/ComponentHome.vue'
import ComponentFooter from '@/components/ComponentFooter'

export default {
  name: 'HomeView',
  components: {
    ComponentHome,
    ComponentFooter


   
  }
}
</script>
