<script>
/**
 * For more info go there: https://github.com/alexsasharegan/vue-functional-data-merge#readme
 */
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'VConatiner',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  render (h, { props, data, children }) {
    const componentData = {
      staticClass: 'v-container',
      class: { 'v-container--fluid': props.fluid }
    }

    return h(props.tag, mergeData(data, componentData), children)
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  @include center-block;
  width: 95%;

  @include screen(min-tablet) {
    max-width: $breakpoint-tablet;
  }

  @include screen(desktop) {
    max-width: $breakpoint-tablet;
  }

  @include screen(large-desktop) {
    max-width: $breakpoint-desktop;
  }

  &--fluid {
    max-width: 100% !important;
  }
}
</style>
