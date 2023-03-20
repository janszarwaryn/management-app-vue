<template lang="pug">
  .ft-section
    header.ft-section__header(
      v-if="hasSlotHeader"
      :class="{ 'ft-section__header--has-two-cols' : headerTwoColumns }"
    )
      slot(name="header")

    .ft-section__body(:class="{ 'ft-section__body--center' : centerContent }")
      slot

    .ft-section__footer(v-if="hasSlotFooter")
      slot(name="footer")
</template>

<script>
export default {
  name: 'FtSection',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    headerTwoColumns: {
      type: Boolean,
      default: false
    },
    centerContent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlotHeader () {
      return !!this.$slots['header']
    },
    hasSlotFooter () {
      return !!this.$slots['footer']
    }
  }
}
</script>

<style lang="scss" scoped>
.ft-section {
  position: relative;
  background-color: $section-background;
  border: 1px solid $section-border-color;
  border-radius: $section-radius;
  box-shadow: $section-shadow;
  padding: $section-space;
  margin-bottom: $section-space;

  &__header {
    border-bottom: 1px solid $section-header-border-color;
    padding-bottom: $section-space;

    @include screen(min-tablet) {
      margin-bottom: $section-space;

      &--has-two-cols {
        @include has-two-cols
      }
    }
  }

  &__body {
    margin-bottom: $section-space;

    &--center {
      @include center-block-vertically;
      justify-content: center
    }

    @include screen(min-tablet) {
      min-height: $section-min-height;
    }
  }
}
</style>
