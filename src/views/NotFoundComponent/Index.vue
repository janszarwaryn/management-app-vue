<template lang="pug">
ft-section
  h1 Not found
  p Uppsss... Something went wrong...
  ft-button(@click="goBack") Back to the previous page
</template>

<script>
import FtSection from '@/components/FtSection'
import FtButton from '@/components/FtButton'

export default {
  name: 'NotFoundComponent',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  components: {
    FtSection,
    FtButton
  }
}
</script>

<style lang="scss" scoped>
.ft-section {
  text-align: center
}
</style>
