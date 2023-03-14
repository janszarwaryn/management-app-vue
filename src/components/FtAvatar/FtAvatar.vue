<template lang="pug">
img.ft-avatar(
  :src="url"
  :style="{ borderRadius: radius + '%', width: size + 'px', height: size + 'px' }"
)
</template>

<script>
export default {
  name: 'FtAvatar',
  props: {
    src: {
      type: String,
      default: null
    },
    size: {
      type: [ String, Number ],
      default: null
    },
    radius: {
      type: String,
      default: '0'
    }
  },
  computed: {
    url () {
      return this.src || require('@/assets/images/avatar.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.ft-avatar {
  display: inline-block;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: auto;
  height: auto;
  min-height: auto;
  background: none;
  border: none;
  outline: none;
  text-decoration: none;
  font-family: inherit;
  line-height: inherit;
  font-weight: inherit;
  font-style: normal;
  font-size: inherit;
  color: inherit;
  box-shadow: none;
  width: auto
}
</style>
