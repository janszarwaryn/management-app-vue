<template lang="pug">
main#app
  ft-container
    transition(name="route" mode="out-in")
      router-view
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import FtLoader from '@/components/FtLoader'
import FtContainer from '@/components/FtContainer'

export default {
  name: 'App',
  watch: {
    '$route': {
      handler: 'update',
      immediate: true
    }
  },
  methods: {
    ...mapMutations([ 'setLoading', 'setError' ]),
    update () {
      if (this.loading) this.setLoading(false)
      if (this.error) this.setError(null)
    }
  },
  computed: {
    ...mapGetters([ 'loading', 'error' ])
  },
  components: {
    FtLoader,
    FtContainer
  }
}
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box
}

body {
  background-color: $background;
  font-family: $main-font;
  font-weight: $main-weight;
  font-size: $main-size-mobile;
  color: $dark-text;
  line-height: 1.6;
  padding: $space 0;

  @include screen(min-tablet) {
    font-size: $main-size;
    padding: $space * 2 0
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  color: $dark-text;
  line-height: 1.2;
  margin-top: 0
}

h1 {
  font-size: $base * 2.25
}

p {
  margin: 0 0 1rem 0;
  padding: 0
}

a {
  color: $accent;

  &:hover {
      color: $dark-accent
  }
}

strong {
  font-weight: 500
}

.text--accent {
  color: $accent;
}

.text--error {
  color: $error;
}

.grid {

  @include screen (min-tablet) {
    display: flex;
    flex-direction: row;
    margin-right:-1rem;
    margin-left: -1rem;
  }

  &__col {
    @include screen (min-tablet) {
      padding-right: 1rem;
      padding-left: 1rem;
    }

    &--first {

      @include screen (min-tablet) {
        width: calc(100% / 3 * 2)
      }
    }

    &--last {

      @include screen (min-tablet) {
        width: calc(100% / 6 * 2)
      }
    }

    &--half {

      @include screen (min-tablet) {
        width: calc(100% / 1 * 2)
      }
    }
  }
}

.hide {

  &--mobile {
    @include screen(mobile) {
      display: none !important
    }
  }

  &--tablet {
    @include screen(tablet) {
      display: none !important
    }
  }

  &--desktop {
    @include screen(desktop) {
      display: none !important
    }
  }

  &--large-desktop {
    @include screen(large-desktop) {
      display: none !important
    }
  }
}

.route {

  &-enter-active,
  &-leave-active {
    transition: opacity 300ms, transform 300ms
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(-10%)
  }
}
</style>
