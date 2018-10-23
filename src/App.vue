<template>
  <div>
    <router-view></router-view>
    <FooterGuides v-if="$route.meta.showFooter"></FooterGuides>
  </div>
</template>

<script>

  import FooterGuides from './components/FooterGuides/FooterGuides.vue'
  export default {
    components: {
      FooterGuides
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
