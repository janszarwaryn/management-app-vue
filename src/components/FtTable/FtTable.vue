<template lang="pug">
  table.ft-table
    thead(v-if="headers.length")
      tr
        th(v-for="title in headers") {{ title }}

    tbody
      slot
</template>

<script>
export default {
  name: 'FtTable',
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.ft-table {
  border-collapse: collapse;
  text-align: left;
  width: 100%;

  td, th {
    padding: $td-space;
    min-height: $td-height;
  }

  tbody {
    tr {
      transition: background-color 200ms ease-in-out;

      &:nth-child(odd) {
        background-color: $tr-bg-color-odd
      }

      &:hover {
        background-color: $tr-bg-color-hover
      }
    }
  }
}
</style>
