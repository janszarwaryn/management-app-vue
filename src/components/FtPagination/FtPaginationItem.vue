<template lang="pug">
button.ft-pagination__item(
  :class="`${isFirst} ${isLast} ${isActive}`"
  @click="click"
)
  slot
</template>

<script>
export default {
  name: 'FtPaginationItem',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    first: {
      type: Boolean,
      default: false
    },
    last: {
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
    isActive () {
      return this.active ? 'ft-pagination__item--active' : ''
    },
    isFirst () {
      return this.first ? 'ft-pagination__item--first' : ''
    },
    isLast () {
      return this.last ? 'ft-pagination__item--last' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.ft-pagination__item {
  @include button(
    $pagination-item-bg-color,
    $pagination-item-bg-color-hover,
    $pagination-item-bg-color-active,
    $pagination-item-text-color
  );
  font-size: $pagination-item-font-size;
  font-weight: $pagination-item-font-weight;
  border: 1px solid $pagination-item-border-color;
  border-right: 0;
  height: $pagination-item-height;
  min-width: $pagination-item-max-width;

  &:last-child() {
    border-right: 1px solid $pagination-item-border-color;
  }

  &:hover {
    color: $pagination-item-text-color-hover;
  }

  &--active {
    background-color: $pagination-item-bg-color-active;
    color: $pagination-item-text-color-active
  }

  &--first {
    border-radius: 5px 0 0 5px;
  }

  &--last {
    border-radius: 0 5px 5px 0;
  }
}
</style>
