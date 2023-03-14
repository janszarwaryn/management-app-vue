<template lang="pug">
button.ft-button(
  :class="`ft-button--${variant} ft-button--${size} ${isRounded} ${isBlock}`"
  @click="click"
  @keyup.enter="click"
)
  slot
</template>

<script>
const validVariants = [ 'default', 'primary', 'transparent' ]
const validSizes = [ 'small', 'medium', 'large' ]

export default {
  name: 'FtButton',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: val => validVariants.includes(val)
    },
    size: {
      type: String,
      default: 'medium',
      validator: val => validSizes.includes(val)
    },
    rounded: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click (event) {
      this.$emit('click', event)
    }
  },
  computed: {
    isRounded () {
      return this.rounded ? 'ft-button--rounded' : ''
    },
    isBlock () {
      return this.block ? 'ft-button--block' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.ft-button {
  font-weight: $button-font-weight;
  min-width: $button-min-width;
  white-space: nowrap;
  border-radius: 5px;

  &--rounded {
    border-radius: 50px;
  }

  &--block {
    width: 100%;
  }

  &--small {
    font-size: $button-text-size-small;
    padding: $button-padding-small;
    min-width: $button-min-width;
  }

  &--medium {
    font-size: $button-text-size-medium;
    padding: $button-padding-medium;
    min-width: $button-min-width + 2rem;
  }

  &--large {
    font-size: $button-text-size-large;
    padding: $button-padding-desktop;
    min-width: $button-min-width + 8rem;
  }

  &--transparent {
    @include button(transparent, transparent, transparent, $button-text-color-second)
  }

  &--default {
    @include button(
      $button-bg-color-default,
      $button-bg-color-default-hover,
      $button-bg-color-default-active,
      $button-text-color-second
    );
    border-color: $button-text-color-second
  }

  &--primary {
    @include button(
      $button-bg-color-primary,
      $button-bg-color-primary-hover,
      $button-bg-color-primary-active,
      $button-text-color
    )
  }
}
</style>
