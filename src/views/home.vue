<template>
  <div class="home-container">
  </div>
</template>

<script>
import { Toast } from 'mand-mobile'
export default {
  name: 'home-view',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    // this.id = +this.$route.params.id
    setTimeout(() => {
      Toast.info('Hi :)')
    }, 1000)
  },
  activated () {

  },
  deactivated () {

  },
  destroyed () {

  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
