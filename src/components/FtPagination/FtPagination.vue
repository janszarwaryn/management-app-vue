<template lang="pug">
  .ft-pagination
    ft-pagination-item(
      v-if="totalPages > 1"
      first
      aria-label="Previous page"
      :disabled="activePage < 2"
      @click="previous"
    )
      font-awesome-icon(:icon="arrowLeft")

    ft-pagination-item(
      v-for="(page, index) in +totalPages"
      :number="page"
      :active="page === +activePage"
      :key="`page-${page}`"
      @click="click(page)"
    ) {{ page }}

    ft-pagination-item(
      v-if="totalPages > 1"
      last
      aria-label="Next page"
      :disabled="activePage === totalPages"
      @click="next"
    )
      font-awesome-icon(:icon="arrowRight")
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import FtPaginationItem from './FtPaginationItem'

export default {
  name: 'FtPagination',
  data () {
    return {
      arrowRight: faAngleDoubleRight,
      arrowLeft: faAngleDoubleLeft
    }
  },
  props: {
    totalPages: {
      type: [String, Number],
      default: 0
    },
    activePage: {
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    previous () {
      if (this.activePage >= 2) {
        const pageNum = this.activePage - 1
        this.$emit('currentPage', pageNum)
      }
    },
    next () {
      if (this.activePage < this.totalPages) {
        const pageNum = this.activePage + 1
        this.$emit('currentPage', pageNum)
      }
    },
    click (pageNum) {
      this.$emit('currentPage', pageNum)
    }
  },
  components: {
    FontAwesomeIcon,
    FtPaginationItem
  }
}
</script>

<style lang="scss" scoped>
.ft-pagination {
  margin: $pagination-space 0
}
</style>
